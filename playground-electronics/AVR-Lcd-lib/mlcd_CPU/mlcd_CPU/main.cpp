#include <avr/io.h>
//ATMEGA32
#define F_CPU 8000000UL
#define _CH_LCD_
#define delay 1
#include "mlcd.h"
#include "mlcd.cpp"

CH_LCD LCD1;
CH_LCD LCD2;

int main(void)
{
	//DDRC = 255;
	DDRA = 48;
	PORTA = 48;
	LCD1.SetRSPin (ADD(PORTC),ADD(DDRC),0);
	LCD1.SetRWPin (ADD(PORTC),ADD(DDRC),1);
	LCD1.SetEPin  (ADD(PORTC),ADD(DDRC),2);
	LCD1.SetD4Pin (ADD(PORTC),ADD(DDRC),3);
	LCD1.SetD5Pin (ADD(PORTC),ADD(DDRC),4);
	LCD1.SetD6Pin (ADD(PORTC),ADD(DDRC),5);
	LCD1.SetD7Pin (ADD(PORTC),ADD(DDRC),6);
	LCD1.Init(16);
	_delay_ms(1000);
	LCD2.SetRSPin (ADD(PORTC),ADD(DDRC),0);
	LCD2.SetRWPin (ADD(PORTC),ADD(DDRC),1);
	LCD2.SetEPin  (ADD(PORTC),ADD(DDRC),7);
	LCD2.SetD4Pin (ADD(PORTC),ADD(DDRC),3);
	LCD2.SetD5Pin (ADD(PORTC),ADD(DDRC),4);
	LCD2.SetD6Pin (ADD(PORTC),ADD(DDRC),5);
	LCD2.SetD7Pin (ADD(PORTC),ADD(DDRC),6);
	LCD2.Init(16);
	//LCD1.SendCommand(1,0,0B01001000);//6
	_delay_ms(delay);
	 //char* data = "Hello";
	 int data =63;
	 LCD1.SendCommand(0,0,0B10101000);
	 double myDouble = 1000000.9996;
	 int x = myDouble*100;
	while(1)
	{
		
		//LCD1.Clear();
		LCD1.Goto(0,0);
		LCD1.SendDouble(myDouble,5);//65535
		LCD1.Goto(1,1);
		LCD1.SendInteger(x);//65535
		_delay_ms(20);
		data++;
	}
	
}