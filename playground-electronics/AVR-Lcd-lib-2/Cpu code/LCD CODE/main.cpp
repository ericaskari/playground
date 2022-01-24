
#include <avr/io.h>
//ATMEGA32
#define F_CPU 8000000UL

#define _LCD_LIB_

#include "D:\GitHub\LCD-Lib-Cplusplus\LIB\CharacterLCD.h"
#include "D:\GitHub\LCD-Lib-Cplusplus\LIB\CharacterLCD.cpp"

Character_LCD LCD1;
Character_LCD LCD2;

int main(void)
{
		LCD1.SetRSPin (ADD(PORTA),ADD(DDRA),0);
		LCD1.SetRWPin (ADD(PORTA),ADD(DDRA),1);
		LCD1.SetEPin  (ADD(PORTA),ADD(DDRA),7);
		LCD1.SetD4Pin (ADD(PORTA),ADD(DDRA),3);
		LCD1.SetD5Pin (ADD(PORTA),ADD(DDRA),4);
		LCD1.SetD6Pin (ADD(PORTA),ADD(DDRA),5);
		LCD1.SetD7Pin (ADD(PORTA),ADD(DDRA),6);
		LCD1.Init(16,2);
		
		LCD2.SetRSPin (ADD(PORTA),ADD(DDRA),0);
		LCD2.SetRWPin (ADD(PORTA),ADD(DDRA),1);
		LCD2.SetEPin  (ADD(PORTA),ADD(DDRA),2);
		LCD2.SetD4Pin (ADD(PORTA),ADD(DDRA),3);
		LCD2.SetD5Pin (ADD(PORTA),ADD(DDRA),4);
		LCD2.SetD6Pin (ADD(PORTA),ADD(DDRA),5);
		LCD2.SetD7Pin (ADD(PORTA),ADD(DDRA),6);
		LCD2.Init(16,4);		
			
	while (1)
	{
		LCD1.Clr();
		LCD2.Clr();
		LCD1.Printf("Bache",0,0);
		LCD1.Printf("KAKAA",1,1);
		LCD1.GotoXY(8,1);
		LCD1.SendString("qqqq");
		
		LCD2.Printf("TEST",0,0);
		LCD2.Printf("TEST",1,1);
		LCD2.Printf("TEST",2,2);
		LCD2.Printf("TEST",3,3);
		_delay_ms(1000);

	};
}