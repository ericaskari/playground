#include "mlcd.h"

unsigned char column;
const int line_TWO_ADDRESS = 64;
bool testing= false;
#define E_DELAY 1
# ifdef _CH_LCD_


CH_LCD :: CH_LCD ()
{

	
	RS_PORT = 0x1B ; RS_DDR = 0x1A ; RS_Bit = 0 ;
	RW_PORT = 0x1B ; RW_DDR = 0x1A ; RW_Bit = 1 ;
	E_PORT = 0x1B ; E_DDR = 0x1A ; E_Bit  = 2 ;

	D4_PORT = 0x1B ; D4_DDR = 0x1A ; D4_Bit = 3 ;
	D5_PORT = 0x1B ; D5_DDR = 0x1A ; D5_Bit = 4 ;
	D6_PORT = 0x1B ; D6_DDR = 0x1A ; D6_Bit = 5 ;
	D7_PORT = 0x1B ; D7_DDR = 0x1A ; D7_Bit = 6 ;	
}

void CH_LCD :: Init(int x)//Initializes LCD
{
	column= x;

	
	
	_delay_ms(15);

	/////////////////////////////	SETTING DDR		///////////////////////////
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ; // THESE 5 IS GOING TO TURN D4,D5,D6,D7,EN To INPUT
	_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	_SFR_IO8(E_PORT)  &= ~(1<<E_Bit);
	//D4  D5  D6  D7	SETTING DDR
	//0   0   0   0
	
	_SFR_IO8(D4_DDR)  |= 1<<D4_Bit ;
	_SFR_IO8(D5_DDR)  |= 1<<D5_Bit ;
	_SFR_IO8(D6_DDR)  |= 1<<D6_Bit ;
	_SFR_IO8(D7_DDR)  |= 1<<D7_Bit ;
	_SFR_IO8(E_DDR)   |= 1<<E_Bit  ;
	_SFR_IO8(RS_DDR)  |= 1<<RS_Bit ;
	_SFR_IO8(RW_DDR)  |= 1<<RW_Bit ;
	//D4  D5  D6  D7  E  RS  RW			SETTING DDR
	//1   1   1	  1   1  1   1
	/////////////////////////////	SETTING DDR	DONE	//


	/////////////////////////////	FIRST FUNCTION SET	//
	//_SFR_IO8(RS_PORT) |=   1<<RS_Bit ;
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	
	//_SFR_IO8(RW_PORT) |=   1<<RW_Bit ;
	_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	//_SFR_IO8(D7_PORT) |=   1<<D7_Bit ;
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);

	//_SFR_IO8(D6_PORT) |=   1<<D6_Bit ;
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);
	
	_SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	//_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit);
	
	//_SFR_IO8(D4_PORT) |=   1<<D4_Bit ;
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit);

	//SENDING
	_SFR_IO8(E_PORT)  |=   1<<E_Bit  ;
	_delay_ms(E_DELAY);
	_SFR_IO8(E_PORT)  &=~(1<<E_Bit);  // All other bits untouched and E = 0
	_delay_ms(E_DELAY);
	SendCommand(0,0,0B00101000);//3/SETTING FUNCTION SET	//
	_delay_ms(E_DELAY);
	SendCommand(0,0,0B00001100);//4 Display on/off control
	_delay_ms(E_DELAY);
	SendCommand(0,0,0B00000110);//5 Entry mode set
	_delay_ms(E_DELAY);


}

void CH_LCD :: SendCommand(uint8_t rs_Bit,uint8_t rw_Bit,uint8_t command)	//Sends Command to LCD
{	
	uint8_t lcd_D0 = command >> 0;
	uint8_t lcd_D1 = command >> 1;
	uint8_t lcd_D2 = command >> 2;
	uint8_t lcd_D3 = command >> 3;
	uint8_t lcd_D4 = command >> 4;
	uint8_t lcd_D5 = command >> 5;
	uint8_t lcd_D6 = command >> 6;
	uint8_t lcd_D7 = command >> 7;
	
// MSB BITS READY
	if (rs_Bit & 1)  _SFR_IO8(RS_PORT) |=   1<<RS_Bit ;
	else			 _SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	
	if (rw_Bit & 1)  _SFR_IO8(RW_PORT) |=   1<<RW_Bit ;
	else			 _SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	if (lcd_D7 & 1)  _SFR_IO8(D7_PORT) |=   1<<D7_Bit ;	
	else			 _SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);	

	if (lcd_D6 & 1)  _SFR_IO8(D6_PORT) |=   1<<D6_Bit ;
	else			 _SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);
	
	if (lcd_D5 & 1)  _SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	else			 _SFR_IO8(D5_PORT) &= ~(1<<D5_Bit);
	
	if (lcd_D4 & 1)  _SFR_IO8(D4_PORT) |=   1<<D4_Bit ;
	else			 _SFR_IO8(D4_PORT) &= ~(1<<D4_Bit);

	/*SENDING*/
	_SFR_IO8(E_PORT)  |=   1<<E_Bit  ;
	_delay_ms(E_DELAY);
	_SFR_IO8(E_PORT)  &=~(1<<E_Bit);  // All other bits untouched and E = 0
	_delay_ms(E_DELAY);
	/* SENDING Finished */

	
	// LSB BITS READY
	if (lcd_D3 & 1)  _SFR_IO8(D7_PORT) |=   1<<D7_Bit ;
	else			 _SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);

	if (lcd_D2 & 1)  _SFR_IO8(D6_PORT) |=   1<<D6_Bit ;
	else			 _SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);

	if (lcd_D1 & 1)  _SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	else			 _SFR_IO8(D5_PORT) &= ~(1<<D5_Bit);
	
	if (lcd_D0 & 1)  _SFR_IO8(D4_PORT) |=   1<<D4_Bit ;
	else			 _SFR_IO8(D4_PORT) &= ~(1<<D4_Bit);

	/*SENDING proses*/
	_SFR_IO8(E_PORT)  |=   1<<E_Bit  ;
	_delay_ms(E_DELAY);
	_SFR_IO8(E_PORT)  &=~(1<<E_Bit);  // All other bits untouched and E = 0
	_delay_ms(E_DELAY);
	
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);
	_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit);
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit);
	/* SENDING Finished */
}

void CH_LCD :: SendChar(uint8_t sending_Char)		//Sends Char to LCD
{
	SendCommand(1,0,sending_Char);
}

void CH_LCD :: SendString(char *String )
{
	while(*String)
	{
		SendChar(*String++ );
	}
}

void CH_LCD :: CursorMode(int mode )
{
	if (mode == 0)
	{
	SendCommand(0,0,0b00001100);	
	} 
	else if(mode == 1)
	{
	SendCommand(0,0,0b00001101);		
	}
	else if(mode == 2)
	{
	SendCommand(0,0,0b00001110);		
	}
	else if(mode == 3)
	{
	SendCommand(0,0,0b00001111);
	}
}

void CH_LCD :: SendInteger(unsigned int intengerNum )//65535
{
	unsigned int cacheInteger = intengerNum;
	
	unsigned int num5 = cacheInteger /10000;//6
	cacheInteger -= num5*10000;		//5535
	unsigned int num4 = cacheInteger /1000;	//5
	cacheInteger -= num4*1000;		//535
	unsigned int num3 = cacheInteger /100;	//5
	cacheInteger -= num3*100;		//35
	unsigned int num2 = cacheInteger /10;	//3
	cacheInteger -= num2*10;		//5
	unsigned int num1 = cacheInteger /1;		//5
	cacheInteger -= num1;			//0	
	if (num5 == 0)
	{
		if (num4 == 0)
		{
			if (num3 == 0)
			{
				if (num2 == 0)
				{
					if (num1 == 0)
					{
						SendChar(0+48);
					}
				}
			}
		}
	}
	
	if (num5 == 0)
	{
		if (num4 == 0)
		{
			if (num3 == 0)
			{
				if (num2 == 0)
				{	
					if (num1 != 0)
					{
						SendChar(num1+48);
					}

				}
			}
		}
	}	
	
	if (num5 == 0)
	{
			if (num4 == 0)
			{
				if (num3 == 0)
				{
					if (num2 != 0)
					{
						SendChar(num2+48);
						SendChar(num1+48);
					}
				}
			}
	}	
	
	if (num5 == 0)
	{
			if (num4 == 0)
			{
				if (num3 != 0)
				{
					SendChar(num3+48);
					SendChar(num2+48);
					SendChar(num1+48);
				}
			}
	}	
	
	if (num5 == 0)
	{
			if (num4 != 0)
			{
				SendChar(num4+48);
				SendChar(num3+48);
				SendChar(num2+48);
				SendChar(num1+48);
			}
	}
	
	if (num5 != 0)
	{
		SendChar(num5+48);
		SendChar(num4+48);
		SendChar(num3+48);
		SendChar(num2+48);
		SendChar(num1+48);
	}
}

void CH_LCD :: SendDouble(double doubleNum, int mantissaNum )//65535/ /// 985.999
{
	double model1 = doubleNum*10;
	//model1 -= 
	unsigned long int cacheDouble = doubleNum;
	
	
	int divideNum;
	unsigned long int tenNumber;
	unsigned long int integerModel = doubleNum;
	
	if (doubleNum >= 100000000)
	{
		divideNum = 9;
		tenNumber = 100000000;
	}else if (doubleNum >= 10000000)
	{
		divideNum = 8;
		tenNumber = 10000000;
	}else if (doubleNum >= 1000000)
	{
		divideNum = 7;
		tenNumber = 1000000;
	}else if (doubleNum >= 100000)
	{
		divideNum = 6;
		tenNumber = 100000;
	}else if (doubleNum >= 10000)
	{
		divideNum = 5;
		tenNumber = 10000;
	}else if (doubleNum >= 1000)
	{
		divideNum = 4;
		tenNumber = 1000;
	}else if (doubleNum >= 100)
	{
		divideNum = 3;
		tenNumber = 100;
	}else if (doubleNum >= 10)
	{
		divideNum = 2;
		tenNumber = 10;
	}else if (doubleNum >= 1)
	{
		divideNum = 1;
		tenNumber = 1;
	}else
	{
		divideNum = 0;
		tenNumber = 0;
	}
	/*
	Clear();
	SendString("tenNum:");
	Goto(0,1);
	SendInteger(tenNumber);
	_delay_ms(2000);
	Clear();
	SendString("divideNum");
	Goto(0,1);
	SendInteger(divideNum);
	_delay_ms(2000);
	Clear();
	*/
	
	
	/* REMOVING . By INFORMATION*/
	if (mantissaNum == 0)
	{
		cacheDouble = doubleNum * 1;
		
	}else if (mantissaNum == 1)
	{
		cacheDouble = doubleNum * 10;
		
	}else if (mantissaNum == 2)
	{
		cacheDouble = doubleNum * 100;
		
	}else if (mantissaNum == 3)
	{
		cacheDouble = doubleNum * 1000;
		
	}else if (mantissaNum == 4)
	{
		cacheDouble = doubleNum * 10000;
		
	}else if (mantissaNum == 5)
	{
		cacheDouble = doubleNum * 100000;
		
	}else if (mantissaNum == 6)
	{
		cacheDouble = doubleNum * 1000000;
		
	}else
	{
		cacheDouble = doubleNum * 1;
	}

	/*   Time To find out how many number it has been built = divideNum       for example 34343 is 5          */

	

	
	
	unsigned int data[10];
	for (int i = 0; i <= divideNum ; i++)
	{
		data[i] = cacheDouble / tenNumber;
		cacheDouble -= data[i]*tenNumber;
		tenNumber /= 10;
		
		if (data[i] >= 10)
		{
			data[i] = 0;
		}
	}
	
	
	
	for (int i = 0 ; i < divideNum ; i++)
	{
		if (i == (divideNum-mantissaNum))
		{
			SendString(".");
		}
		if (data[i]<10)
		{
			SendInteger(data[i]);
		}
		
	}
}

void CH_LCD :: Home()
{
	SendCommand(0,0,0b00000010);	
}

void CH_LCD :: Clear()
{
	SendCommand(0,0,0b00000001);
}

void CH_LCD :: Goto(int x, int y)
{
	if (y== 1)
	{
		x += line_TWO_ADDRESS; 
	}
	
	SendCommand(0,0, 0b10000000 | x);
	_delay_ms(1);
}

# endif

/*
	_SFR_IO8(D4_PORT) |=   1<<D4_Bit ;
	_SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	_SFR_IO8(E_PORT)  |=   1<<E_Bit  ;
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	//D4  D5  D6  D7  E  RS  RW
	//1   1   0	  0   1  0   0
	
	_delay_ms(1);
	_SFR_IO8(E_PORT)  &= ~(1<<E_Bit) ; // All other bits untouched and E = 0
	_delay_ms(1);
	
	_SFR_IO8(D4_PORT) |=   1<<D4_Bit ;
	_SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit); // All other bits untouched and D6 = 0
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);
	_SFR_IO8(E_PORT)  |=  (1<<E_Bit) ;
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	//D4  D5  D6  D7  E  RS  RW
	//1   1   0	  0   1  0   0
	_delay_ms(1);
	_SFR_IO8(E_PORT)  &= ~(1<<E_Bit) ; // All other bits untouched and E = 0
	_delay_ms(1);
	
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit);
	_SFR_IO8(D5_PORT) |=   1<<D5_Bit ;
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit);
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit);
	_SFR_IO8(E_PORT)  |=   1<<E_Bit  ;
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);
	_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	//D4  D5  D6  D7  E  RS  RW
	//0   1   0	  0   1  1   1
	_delay_ms(1);
	_SFR_IO8(E_PORT)  &=~(1<<E_Bit);  // All other bits untouched and E = 0
	_delay_ms(1);
	*/
	//SendCommand(40);
	//SendCommand(12);
	//Clr();