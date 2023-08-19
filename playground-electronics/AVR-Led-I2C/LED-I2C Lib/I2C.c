#ifndef  F_CPU
#define F_CPU 8000000UL
#endif

#include <avr/io.h>
#include <util/twi.h>
#include <math.h>
#include <avr/interrupt.h>
#include "I2C.h"
#define F_SCL 100000UL // SCL frequency
#define TWBR_val ((F_CPU - (16*F_SCL)) / (2 * (F_SCL * Prescaler)))

uint8_t status_CODE;
static void (*I2C_S_recv)(uint8_t);		//isr routines for i2c
static void (*I2C_S_req)();


void	I2C_WAIT_FOR_TWINT_FLAG(void){
	// wait for end of transmission
	while( !(TWCR & (1<<TWINT)) ); //waits TWINT(Bit7)Until it turn to 1
}

void	I2C_M_init(void)
{
	/**************************************************************************
		Prescaler Value Setup
		TWPS1	TWPS0	PRESCALER VALUE
			0		0			1
			0		1			4	
			1		0			16
			1		1			64
	**************************************************************************/
	TWSR = (0<<TWPS1 | 0<<TWPS0);
	uint8_t TWPSDATA = (TWSR & 0x03);
	int nummber = 1;
	for(int po=1; po <= (int)TWPSDATA ; po++){nummber = nummber*4;}
	uint8_t Prescaler = (uint8_t)nummber;
	
	
	
	/**************************************************************************
	SCK BIT RATE SETUP	TWBR = TWI BIT RATE REGISTER
	TWBR_val = ((F_CPU - (16*F_SCL)) / (2 * (F_SCL * Prescaler)))
	Make sure TWBR should be equal or more than 10
	**************************************************************************/
	TWBR = (uint8_t)TWBR_val;
}

void	I2C_M_stop(void)
{
	// transmit STOP condition
	TWCR = (1<<TWINT) | (1<<TWEN) | (1<<TWSTO);
}

uint8_t I2C_TWSR_STATUS_CODE(void){
	return TWSR & 0xF8;
}

uint8_t I2C_M_start(uint8_t address)
{
	// reset TWI control register
	TWCR = 0;
	
	/************************************************************************** 
	Transmit START condition 
	
	TWSTA : TWI START Condition Bit:	To make the micro-controller master device on the Two wire Serial Bus, you must set this bit.
	
	TWINT : TWI Interrupt Flag:			This bit is set by hardware when the TWI has finished its current job and expects application
										software response. It is not automatically cleared by hardware when executing the interrupt routine.
										So, you must clear TWINT Flag by writing a logic one to it.
										Also note that clearing this flag starts the operation of the TWI. So before clearing this flag,
										all accesses to the other TWI registers must be complete.
										
	TWEN : TWI Enable Bit:				To start TWI interface write one to this bit.								
	**************************************************************************/
	TWCR = (1<<TWINT) | (1<<TWSTA) | (1<<TWEN);
	I2C_WAIT_FOR_TWINT_FLAG();
	
	// check if the start condition was successfully transmitted
	if(I2C_TWSR_STATUS_CODE() != TW_START){ return 1; }
	
	// load slave address into data register
	TWDR = address;
	// start transmission of address
	TWCR = (1<<TWINT) | (1<<TWEN);
	// wait for end of transmission
	I2C_WAIT_FOR_TWINT_FLAG();
	
	// check if the device has acknowledged the READ / WRITE mode
	if ( (I2C_TWSR_STATUS_CODE() != TW_MT_SLA_ACK) && (I2C_TWSR_STATUS_CODE() != TW_MR_SLA_ACK) ) return 1;
	return 0;
}

uint8_t I2C_M_write(uint8_t data)
{
	// load data into data register
	TWDR = data;
	// start transmission of data
	TWCR = (1<<TWINT) | (1<<TWEN);
	// wait for end of transmission
	I2C_WAIT_FOR_TWINT_FLAG();
	
	if( I2C_TWSR_STATUS_CODE() != TW_MT_DATA_ACK ){ return 1; }//means error and should be repeated
	
	return 0;
}

uint8_t I2C_M_read_ack(void)
{
	
	// start TWI module and acknowledge data after reception
	TWCR = (1<<TWINT) | (1<<TWEN) | (1<<TWEA); 
	// wait for end of transmission
	I2C_WAIT_FOR_TWINT_FLAG();
	// return received data from TWDR
	return TWDR;
}

uint8_t I2C_M_read_nack(void)
{
	
	// start receiving without acknowledging reception
	TWCR = (1<<TWINT) | (1<<TWEN);
	// wait for end of transmission
	I2C_WAIT_FOR_TWINT_FLAG();
	// return received data from TWDR
	return TWDR;
}

uint8_t I2C_M_transmit(uint8_t address, uint8_t* data, uint16_t length)
{
	if (I2C_M_start(address <<1 | I2C_WRITE)) return 1;
	
	for (uint16_t i = 0; i < length; i++)
	{
		if (I2C_M_write(data[i])) return 1;
	}
	
	I2C_M_stop();
	
	return 0;
}

uint8_t I2C_M_receive(uint8_t address, uint8_t* data, uint16_t length)
{
	if (I2C_M_start(address<<1 | I2C_READ)) return 1;
	
	for (uint16_t i = 0; i < (length-1); i++)	//it doesn't run at all for 1 byte
	{
		  data[i] = I2C_M_read_ack();
	}
	
	data[(length-1)] = I2C_M_read_nack();
	
	I2C_M_stop();
	
	return 0;
}

uint8_t I2C_M_writeReg(uint8_t devaddr, uint8_t regaddr, uint8_t* data, uint16_t length)
{
	if (I2C_M_start(devaddr | 0x00)) return 1;

	I2C_M_write(regaddr);

	for (uint16_t i = 0; i < length; i++)
	{
		if (I2C_M_write(data[i])) return 1;
	}

	I2C_M_stop();

	return 0;
}

uint8_t I2C_M_readReg(uint8_t devaddr, uint8_t regaddr, uint8_t* data, uint16_t length)
{
	if (I2C_M_start(devaddr)) return 1;

	I2C_M_write(regaddr);

	if (I2C_M_start(devaddr | 0x01)) return 1;

	for (uint16_t i = 0; i < (length-1); i++)
	{
		data[i] = I2C_M_read_ack();
	}
	data[(length-1)] = I2C_M_read_nack();

	I2C_M_stop();

	return 0;
}




void I2C_S_setCallbacks(void (*recv)(uint8_t), void (*req)())
{
	I2C_S_recv = recv;
	I2C_S_req = req;
}

void I2C_S_init(uint8_t address)
{
	cli();
	// load address into TWI address register
	TWAR = address << 1;
	// set the TWCR to enable address matching and enable TWI, clear TWINT, enable TWI interrupt
	TWCR = (1<<TWIE) | (1<<TWEA) | (1<<TWINT) | (1<<TWEN);
	sei();
}

void I2C_S_stop(void)
{
	// clear acknowledge and enable bits
	//Frequently, interrupts are being disabled for periods of time in order to perform certain operations without being disturbed
	cli(); //cli clears the global interrupt flag in SREG so prevent any form of interrupt occurring.
	TWCR = 0;
	TWAR = 0;
	sei(); //While sei sets the bit and switches interrupts on.
}

void I2C_S_transmitByte(uint8_t data)
{
	TWDR = data;
}

ISR(TWI_vect)
{
	switch(TW_STATUS)
	{
		case TW_SR_DATA_ACK:
		// received data from master, call the receive callback
		I2C_S_recv(TWDR);
		TWCR = (1<<TWIE) | (1<<TWINT) | (1<<TWEA) | (1<<TWEN);
		break;
		case TW_ST_SLA_ACK:
		// master is requesting data, call the request callback
		I2C_S_req();
		TWCR = (1<<TWIE) | (1<<TWINT) | (1<<TWEA) | (1<<TWEN);
		break;
		case TW_ST_DATA_ACK:
		// master is requesting data, call the request callback
		I2C_S_req();
		TWCR = (1<<TWIE) | (1<<TWINT) | (1<<TWEA) | (1<<TWEN);
		break;
		case TW_BUS_ERROR:
		// some sort of erroneous state, prepare TWI to be readdressed
		TWCR = 0;
		TWCR = (1<<TWIE) | (1<<TWINT) | (1<<TWEA) | (1<<TWEN);
		break;
		default:
		TWCR = (1<<TWIE) | (1<<TWINT) | (1<<TWEA) | (1<<TWEN);
		break;
	}
}

