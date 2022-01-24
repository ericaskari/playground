/*
 * Created: 4/16/2018 4:48:39 PM
 * Author : Mohammad
 */ 

#define F_CPU 8000000UL
#define _CH_LCD_

#define SLAVE_1_ADRR 0b00000010
#define SLAVE_2_ADRR 0b00000100
#define SLAVE_3_ADRR 0b00001000
#define SLAVE_4_ADRR 0b00010000
#include <stdio.h>
#include <string.h>


#include <avr/io.h>
#include <util/delay.h>
#include <D:\GitHub\LED-I2C\LED-I2C Lib\I2C.c>
//#include <D:\GitHub\LCD-Lib-Cplusplus\LIB\CharacterLCD.h>
#include <D:\GitHub\MYLCDLIB\mlcd_CPU\mlcd_CPU\lib\mlcd.cpp>
#include <D:\GitHub\MYLCDLIB\mlcd_CPU\mlcd_CPU\lib\mlcd.h>
char data_received;
CH_LCD LCD1;

int main(void)
{
	LCD1.SetRSPin (ADD(PORTD),ADD(DDRD),0);
	LCD1.SetRWPin (ADD(PORTD),ADD(DDRD),1);
	LCD1.SetEPin  (ADD(PORTD),ADD(DDRD),2);
	LCD1.SetD4Pin (ADD(PORTD),ADD(DDRD),3);
	LCD1.SetD5Pin (ADD(PORTD),ADD(DDRD),4);
	LCD1.SetD6Pin (ADD(PORTD),ADD(DDRD),5);
	LCD1.SetD7Pin (ADD(PORTD),ADD(DDRD),6);
	LCD1.Init();
	
	I2C_M_init();
	LCD1.SendString("TWBR :");
	LCD1.SendInteger((int)TWBR);
	LCD1.Goto(1,1);
	LCD1.SendString(" TWPS :");
	
	LCD1.SendInteger((int)TWSR & 0x03);
	_delay_ms(1000);
	
	DDRA = 0;
	DDRB = 0;
			
	unsigned char ADDRESS;
    /* Replace with your application code */
	uint8_t receivedDATA[1];
	uint8_t SendDATA[1];
    while (1) 
    {
		ADDRESS = PINB;
		SendDATA[0]= PINA;
		I2C_M_transmit(ADDRESS,SendDATA,1);	
		_delay_ms(10);
		LCD1.Goto(0,0);
		LCD1.SendString("SEND: ");
		LCD1.SendInteger((int)SendDATA[0]);
		LCD1.SendString(" to ");	
		LCD1.SendInteger((int)ADDRESS);
		LCD1.SendString("          ");
		_delay_ms(10);
	
		I2C_M_receive(ADDRESS,receivedDATA,1);

		_delay_ms(10);
		LCD1.Goto(0,1);
		LCD1.SendString("READ: ");
		LCD1.SendInteger((int)receivedDATA[0]);	
		LCD1.SendString(" From ");
		LCD1.SendInteger((int)ADDRESS);
		LCD1.SendString("          ");
		_delay_ms(10);
		
		
    }
}

