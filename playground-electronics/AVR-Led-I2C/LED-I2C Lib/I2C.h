#ifndef I2C_MASTER_H
#define I2C_MASTER_H

#define I2C_READ 0x01
#define I2C_WRITE 0x00

#include <avr/interrupt.h>
#include <stdint.h>
//void I2C_WAIT_FOR_TWINT_FLAG(void);
void I2C_M_init(void);

uint8_t I2C_M_start(uint8_t address);
uint8_t I2C_M_write(uint8_t data);
uint8_t I2C_M_read_ack(void);
uint8_t I2C_M_read_nack(void);
uint8_t I2C_M_transmit(uint8_t address, uint8_t* data, uint16_t length);
uint8_t I2C_M_receive(uint8_t address, uint8_t* data, uint16_t length);
uint8_t I2C_M_writeReg(uint8_t devaddr, uint8_t regaddr, uint8_t* data, uint16_t length);
uint8_t I2C_M_readReg(uint8_t devaddr, uint8_t regaddr, uint8_t* data, uint16_t length);
void I2C_M_stop(void);


void I2C_S_init(uint8_t address);
void I2C_S_stop(void);
void I2C_S_setCallbacks(void (*recv)(uint8_t), void (*req)());
void I2C_S_transmitByte(uint8_t data);
/*inline void __attribute__((always_inline)) I2C_S_transmitByte(uint8_t data)
{
	TWDR = data;
}*/

ISR(TWI_vect);
#endif // I2C_MASTER_H
