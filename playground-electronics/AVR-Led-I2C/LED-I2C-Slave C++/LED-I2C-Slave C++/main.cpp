/*
 * Created: 4/16/2018 10:37:25 PM
 * Author : Mohammad
 */ 
# define _CH_LCD_
#define F_CPU 8000000UL
#include <avr/io.h>
#include <util/delay.h>
#include <D:\GitHub\LED-I2C\LED-I2C Lib\I2C.c>
#include <D:\GitHub\MYLCDLIB\mlcd_CPU\mlcd_CPU\lib\mlcd.cpp>
#include <D:\GitHub\MYLCDLIB\mlcd_CPU\mlcd_CPU\lib\mlcd.h>
CH_LCD LCD1;

volatile uint8_t i2c_RX_buff, i2c_TX_buff;
volatile unsigned char RX_point=0, TX_point=0;
volatile bool i2c_packet_reveived=false;

#define I2C_ADDR 0b00010000
volatile uint8_t recDATA;
volatile uint8_t sentDATA;
unsigned int cleanTimer;
void I2C_S_received(uint8_t received_data){
	recDATA = received_data;	
	cleanTimer=0;
}
void I2C_S_requested(){
	sentDATA = PINB;
	I2C_S_transmitByte(sentDATA);
	cleanTimer=0;
}


void setup(){
	I2C_S_setCallbacks(I2C_S_received,I2C_S_requested);
	I2C_S_init(I2C_ADDR);
}

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
	LCD1.Clear();
	LCD1.Goto(0,1);
	LCD1.SendString(" SETTING UP");
	_delay_ms(1000);
	LCD1.Clear();
	DDRA =255;
	DDRB = 0;
	setup();
	unsigned int cleaner ;	
    /* Replace with your application code */
    while (1) 
    {
			LCD1.Goto(0,0);
			LCD1.SendString(" Last R:");
			LCD1.SendInteger((int)recDATA);
			LCD1.SendString("       ");		
			LCD1.Goto(0,1);
			LCD1.SendString(" Last S:");
			LCD1.SendInteger((int)sentDATA);
			LCD1.SendString("       ");	
			
			for (cleaner=0;cleaner <= 65000 ; cleaner++);
			cleanTimer++;
			if (cleanTimer>= 20)
			{
				LCD1.Clear();
				LCD1.SendString("No Incoming Data");
				_delay_ms(1000);
				cleanTimer = 0;
			}
	}
}
		
		
		
		
		


