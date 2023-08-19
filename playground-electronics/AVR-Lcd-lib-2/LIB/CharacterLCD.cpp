
#include "CharacterLCD.h"
# ifdef _LCD_LIB_

const uint8_t LcdCustomChar[] PROGMEM=//define 8 custom LCD chars
{
	0x00, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00, // 0. 0/5 full progress block
	0x00, 0x1F, 0x10, 0x10, 0x10, 0x10, 0x1F, 0x00, // 1. 1/5 full progress block
	0x00, 0x1F, 0x18, 0x18, 0x18, 0x18, 0x1F, 0x00, // 2. 2/5 full progress block
	0x00, 0x1F, 0x1C, 0x1C, 0x1C, 0x1C, 0x1F, 0x00, // 3. 3/5 full progress block
	0x00, 0x1F, 0x1E, 0x1E, 0x1E, 0x1E, 0x1F, 0x00, // 4. 4/5 full progress block
	0x00, 0x1F, 0x1F, 0x1F, 0x1F, 0x1F, 0x1F, 0x00, // 5. 5/5 full progress block
	0x03, 0x07, 0x0F, 0x1F, 0x0F, 0x07, 0x03, 0x00, // 6. rewind arrow
	0x18, 0x1C, 0xFE, 0x7F, 0xFE, 0x1C, 0x18, 0x00  // 7. fast-forward arrow
};

const uint8_t LCD_Big_Number[] PROGMEM=//define 8 custom LCD chars
{
	0x1F, 0x1F, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, // 0. upper line char
	0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x1F, 0x1F, // 1. lower line char
	0x1F, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x1F, // 2. both line char
	0x00, 0x00, 0x01, 0x03, 0x03, 0x01, 0x00, 0x00, // 3. large colon left char
	0x00, 0x00, 0x10, 0x18, 0x18, 0x10, 0x00, 0x00, // 4. large colon right char
	0x1F, 0x00, 0x1F, 0x00, 0x10, 0x00, 0x1F, 0x00, // 5. up char
	0x10, 0x00, 0x1F, 0x00, 0x1F, 0x00, 0x1F, 0x00, // 6. rewind arrow
	0x1F, 0x00, 0x10, 0x00, 0x1F, 0x00, 0x1F, 0x00  // 7. fast-forward arrow
};

#define UpPerLineAddr 0
#define ULC UpPerLineAddr
#define LowerLineAddr 1
#define LLC LowerLineAddr
#define BothLineAddr 2
#define BLC BothLineAddr
#define LargeColonLeftAddr 3
#define LargeColonRightAddr 4
#define XXC 0xFF
#define SSC 0x20
#define UpCharAddr 5
#define DownCharAddr 6

const uint8_t numchar[10][6] PROGMEM =
{
	{
		XXC, ULC, XXC,
		XXC, LLC, XXC,
	},
	{
		ULC, XXC, SSC,
		LLC, XXC, LLC,
	},
	{
		ULC, BLC, XXC,
		XXC, LLC, LLC,
	},
	{
		ULC, BLC, XXC,
		LLC, LLC, XXC,
	},
	{
		XXC, LLC, XXC,
		SSC, SSC, XXC,
	},
	{
		XXC, BLC, ULC,
		LLC, LLC, XXC,
	},
	{
		XXC, BLC, ULC,
		XXC, LLC, XXC,
	},
	{
		ULC, ULC, XXC,
		SSC, SSC, XXC,
	},
	{
		XXC, BLC, XXC,
		XXC, LLC, XXC,
	},
	{
		XXC, BLC, XXC,
		LLC, LLC, XXC,
	}
};

Character_LCD :: Character_LCD ()
{
		RS_PORT = 0x1B ; RS_DDR = 0x1A ; RS_Bit = 0 ;
		RW_PORT = 0x1B ; RW_DDR = 0x1A ; RW_Bit = 1 ;
		E_PORT = 0x1B ; E_DDR = 0x1A ; E_Bit  = 2 ;

		D4_PORT = 0x1B ; D4_DDR = 0x1A ; D4_Bit = 3 ;
		D5_PORT = 0x1B ; D5_DDR = 0x1A ; D5_Bit = 4 ;
		D6_PORT = 0x1B ; D6_DDR = 0x1A ; D6_Bit = 5 ;
		D7_PORT = 0x1B ; D7_DDR = 0x1A ; D7_Bit = 6 ;
		
}

void Character_LCD :: Clr(void)				//Clears LCD
{
	SendCommand(1<<Character_LCD_CLR);
	_delay_ms(1);
}

void Character_LCD :: Home(void)			//LCD cursor home
{
	SendCommand(1<<Character_LCD_HOME);
	_delay_ms(1);
}

void Character_LCD :: SendString_V(uint8_t* data, uint8_t nBytes)	//Outputs string to LCD
{
	register uint8_t i;
	if (!data) return;
	for(i=0; i<nBytes; i++)
	{
		SendChar(data[i]);
	}
	_delay_ms(1);
}

void Character_LCD :: SendString(char *_String , uint8_t PositionX , uint8_t PositionY)
{
	GotoXY(PositionX,PositionY);
	while(*_String)
	{
		SendChar(*_String++ );	
	}
}

void Character_LCD :: SendString(char *_String )
{
	while(*_String)
	{
		SendChar(*_String++ );
	}
}

void Character_LCD :: GotoXY(uint8_t x, uint8_t y)	//Cursor to X Y position
{
	register uint8_t DDRAMAddr;
	switch(y)
	{
		case 0: DDRAMAddr = Character_LCD_LINE0_DDRAMADDR+x; break;
		case 1: DDRAMAddr = Character_LCD_LINE1_DDRAMADDR+x; break;
		case 2: DDRAMAddr = Character_LCD_LINE2_DDRAMADDR+x; break;
		case 3: DDRAMAddr = Character_LCD_LINE3_DDRAMADDR+x; break;
		default: DDRAMAddr = Character_LCD_LINE0_DDRAMADDR+x;
	}
	SendCommand(1<<Character_LCD_DDRAM | DDRAMAddr);
	_delay_ms(1);
	
}


void Character_LCD :: ShiftLeft(uint8_t n)	//Scrol n of characters Right
{
	for (uint8_t i=0;i<n;i++)
	{
		SendCommand(0x1E);
	}
	_delay_ms(1);
}

void Character_LCD :: ShiftRight(uint8_t n)	//Scrol n of characters Left
{
	for (uint8_t i=0;i<n;i++)
	{
		SendCommand(0x18);
	}
	_delay_ms(1);
}

void Character_LCD :: CursorOn(void) //displays LCD cursor
{
	SendCommand(0x0E);
	_delay_ms(1);
}

void Character_LCD :: CursorOnBlink(void)	//displays LCD blinking cursor
{
	SendCommand(0x0F);
	_delay_ms(1);
}

void Character_LCD :: CursorOFF(void)	//turns OFF cursor
{
	SendCommand(0x0C);
	_delay_ms(1);
}

void Character_LCD :: Blank(void)		//blanks LCD
{
	SendCommand(0x08);
	_delay_ms(1);
}

void Character_LCD :: Visible(void)		//Shows LCD
{
	SendCommand(0x0C);
	_delay_ms(1);
}

void Character_LCD :: CursorLeft(uint8_t n)	//Moves cursor by n poisitions left
{
	for (uint8_t i=0;i<n;i++)
	{
		SendCommand(0x10);
	}
	_delay_ms(1);
}

void Character_LCD :: CursorRight(uint8_t n)	//Moves cursor by n poisitions left
{
	for (uint8_t i=0;i<n;i++)
	{
		SendCommand(0x14);
	}
	_delay_ms(1);
}

void Character_LCD :: SendChar(uint8_t ch)		//Sends Char to LCD
{
	if ((ch&0b00010000)==0)
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;
	else
	_SFR_IO8(D4_PORT) |= 1<<D4_Bit ;
	if ((ch&0b00100000)==0)
	_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;
	else
	_SFR_IO8(D5_PORT) |= 1<<D5_Bit ;
	if ((ch&0b01000000)==0)
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;
	else
	_SFR_IO8(D6_PORT) |= 1<<D6_Bit ;
	if ((ch&0b10000000)==0)
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	else
	_SFR_IO8(D7_PORT) |= 1<<D7_Bit ;
	
	_SFR_IO8(RS_PORT)|=1<<RS_Bit;
	_SFR_IO8(E_PORT) |= 1<<E_Bit;
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	_SFR_IO8(RS_PORT)&=~(1<<RS_Bit);
	_delay_ms(1);
	
	if ((ch&0b00000001)==0)
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;
	else
	_SFR_IO8(D4_PORT) |= 1<<D4_Bit ;
	if ((ch&0b00000010)==0)
	_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;
	else
	_SFR_IO8(D5_PORT) |= 1<<D5_Bit ;
	if ((ch&0b00000100)==0)
	_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;
	else
	_SFR_IO8(D6_PORT) |= 1<<D6_Bit ;
	if ((ch&0b00001000)==0)
	_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	else
	_SFR_IO8(D7_PORT) |= 1<<D7_Bit ;
	
	_SFR_IO8(RS_PORT)|=1<<RS_Bit;
	_SFR_IO8(E_PORT)|=1<<E_Bit;
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	_SFR_IO8(RS_PORT)&=~(1<<RS_Bit);
	_delay_ms(1);
}

void Character_LCD :: SendCommand(uint8_t cmd)	//Sends Command to LCD
{
	if ((cmd&0b00010000)==0)_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;
	else _SFR_IO8(D4_PORT) |= 1<<D4_Bit ;
	if ((cmd&0b00100000)==0)_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;
	else _SFR_IO8(D5_PORT) |= 1<<D5_Bit ;
	if ((cmd&0b01000000)==0)_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;
	else _SFR_IO8(D6_PORT) |= 1<<D6_Bit ;
	if ((cmd&0b10000000)==0)_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	else _SFR_IO8(D7_PORT) |= 1<<D7_Bit ;
	
	_SFR_IO8(E_PORT)|=1<<E_Bit;
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	_delay_ms(1);

	if ((cmd&0b00000001)==0)_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;
	else _SFR_IO8(D4_PORT) |= 1<<D4_Bit ;
	if ((cmd&0b00000010)==0)_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;
	else _SFR_IO8(D5_PORT) |= 1<<D5_Bit ;
	if ((cmd&0b00000100)==0)_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;
	else _SFR_IO8(D6_PORT) |= 1<<D6_Bit ;
	if ((cmd&0b00001000)==0)_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	else _SFR_IO8(D7_PORT) |= 1<<D7_Bit ;
	
	_SFR_IO8(E_PORT)|=1<<E_Bit;
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	_delay_ms(1);
}

void Character_LCD :: Definechar(const uint8_t *pc,uint8_t char_code){
	uint8_t a = 0 , pcc = 0 ;
	uint16_t i;
	//a=(char_code<<3)|0x40;
	a=64+(char_code*8);
	for (i=0; i<9; i++){
		pcc=pgm_read_byte(&pc[i]);
		
		SendCommand(a);a++;
		SendChar(pcc);
	}
	_delay_ms(1);
}

void Character_LCD :: Init(uint8_t x, uint8_t y)//Initializes LCD
{
	_delay_ms(15);

	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;_SFR_IO8(D5_PORT) &= ~(1<<D5_Bit) ;_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	_SFR_IO8(E_PORT) &= ~(1<<E_Bit);
	_SFR_IO8(D4_DDR) |= 1<<D4_Bit ;_SFR_IO8(D5_DDR) |= 1<<D5_Bit ;_SFR_IO8(D6_DDR) |= 1<<D6_Bit ;_SFR_IO8(D7_DDR) |= 1<<D7_Bit ;
	_SFR_IO8(E_DDR)|=(1<<E_Bit);
	_SFR_IO8(RS_DDR)|=(1<<RS_Bit);_SFR_IO8(RW_DDR)|=(1<<RW_Bit);
	_SFR_IO8(D4_PORT) |= 1<<D4_Bit ;_SFR_IO8(D5_PORT) |= 1<<D5_Bit ;_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	_SFR_IO8(E_PORT)|=(1<<E_Bit);
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	
	_delay_ms(1);
	_SFR_IO8(D4_PORT) |= 1<<D4_Bit ;_SFR_IO8(D5_PORT) |= 1<<D5_Bit ;_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	_SFR_IO8(E_PORT)|=(1<<E_Bit);
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);
	
	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	
	_delay_ms(1);
	_SFR_IO8(D4_PORT) &= ~(1<<D4_Bit) ;_SFR_IO8(D5_PORT) |= 1<<D5_Bit ;_SFR_IO8(D6_PORT) &= ~(1<<D6_Bit) ;_SFR_IO8(D7_PORT) &= ~(1<<D7_Bit) ;
	
	_SFR_IO8(E_PORT)|=(1<<E_Bit);
	_SFR_IO8(RS_PORT) &= ~(1<<RS_Bit);_SFR_IO8(RW_PORT) &= ~(1<<RW_Bit);


	_delay_ms(1);
	_SFR_IO8(E_PORT)&=~(1<<E_Bit);
	_delay_ms(1);
	SendCommand(40);
	SendCommand(12);
	Clr();
}

void Character_LCD :: CopyString(const uint8_t *FlashLoc, uint8_t x, uint8_t y)
{
	uint8_t i;
	GotoXY(x,y);
	for(i=0;(uint8_t)pgm_read_byte(&FlashLoc[i]);i++)
	{
		SendChar((uint8_t)pgm_read_byte(&FlashLoc[i]));
	}
	_delay_ms(1);
}

void Character_LCD :: Number(uint8_t v_numericSystem_u8, uint32_t v_number_u32, uint8_t v_numOfDigits)
{
    uint8_t i=0,a[10];

    if(2u == v_numericSystem_u8)
    {
        while(v_numOfDigits!=0)
        {
            /* Start Extracting the bits from the specified bit positions.
             Get the Acsii values of the bits and transmit */
            i = _AS_GetBitStatus(v_number_u32,(v_numOfDigits-1));
            SendChar(_AS_Dec2Ascii(i));
            v_numOfDigits--;
        }    
    }     
    else if(v_number_u32==0)
    {
        /* If the number is zero then update the array with the same for transmitting */
        for(i=0;((i<v_numOfDigits) && (i<10u)) ;i++)
            SendChar('0');
    }
    else
    {
        for(i=0;i<v_numOfDigits;i++)
        {
            /* Continue extracting the digits from right side
               till the Specified v_numOfDigitsToTransmit_u8 */
            if(v_number_u32!=0)
            {
                /* Extract the digits from the number till it becomes zero.
                First get the remainder and divide the number by 10 each time.

                example for Decimal number:
                If v_number_u32 = 123 then extracted remainder will be 3 and number will be 12.
                The process continues till it becomes zero or max digits reached*/
                a[i]=_AS_GetMod32(v_number_u32,v_numericSystem_u8);
                v_number_u32=v_number_u32/v_numericSystem_u8;
            }
            else if( (v_numOfDigits == 0xffu) ||
                    (v_numOfDigits > 10u))
            {
                /* Stop the iteration if the Max number of digits are reached or
                 the user expects exact(Default) digits in the number to be transmitted */ 
                break;
            }
            else
            {
                /*In case user expects more digits to be transmitted than the actual digits in number,
                  then update the remaining digits with zero.
                Ex: v_number_u32 is 123 and user wants five digits then 00123 has to be transmitted */
                a[i]=0;
            }
        }

        while(i)
        { 
            /* Finally get the ascii values of the digits and transmit*/
            SendChar(_AS_Hex2Ascii(a[i-1]));
            i--;
        }
    }


}

void Character_LCD :: FloatNumber(float v_floatNumber_f32)
{
	uint32_t v_tempNumber_u32;
	/* Dirty hack to support the floating point by extracting the integer and fractional part.
      1.Type cast the number to int to get the integer part.
	  2.transmit the extracted integer part followed by a decimal point(.).
	  3.Later the integer part is made zero by subtracting with the extracted integer value.
	  4.Finally the fractional part is multiplied by 100000 to support 6-digit precision */

	v_tempNumber_u32 = (uint32_t) v_floatNumber_f32;
	Number(10u,v_tempNumber_u32,0xffu);

	SendChar('.');

	v_floatNumber_f32 = v_floatNumber_f32 - v_tempNumber_u32;
	v_tempNumber_u32 = v_floatNumber_f32 * 1000000;
	Number(10u,v_tempNumber_u32,0xffu);
}

void Character_LCD :: INTNumber(float v_floatNumber_f32)
{
	uint32_t v_tempNumber_u32;
	/* Dirty hack to support the floating point by extracting the integer and fractional part.
      1.Type cast the number to int to get the integer part.
	  2.transmit the extracted integer part followed by a decimal point(.).
	  3.Later the integer part is made zero by subtracting with the extracted integer value.
	  4.Finally the fractional part is multiplied by 100000 to support 6-digit precision */

	v_tempNumber_u32 = (uint32_t) v_floatNumber_f32;
	Number(10u,v_tempNumber_u32,0xffu);
}




/***************************************************************************************************
            void Printf(const char *argList, ...)
 ***************************************************************************************************
 * Function name:  Printf()
 * I/P Arguments: variable length arguments similar to printf

 * Return value	: none

 * description  :This function is similar to printf function in C.
				 It takes the arguments with specified format and prints accordingly
				 The supported format specifiers are as below.
				 1. %c: character
				 2. %d: signed 16-bit number
				 3. %D: signed 32-bit number
				 4. %u: unsigned 16-bit number
				 5. %U: unsigned 32-bit number
				 6. %b: 16-bit binary number
				 7. %B: 32-bit binary number
				 8. %f: Float number
				 9. %x: 16-bit hexadecimal number
				 10. %X: 32-bit hexadecimal number
				 11. %s: String

Note :
  Extra feature is available to specify the number of digits to be transmitted using printf.
	 ex: %4d: will transmit the lower four digits of the decimal number.
	     %12b: will transmit the 12-LSB of the number
		 %d: Will transmit the exact digits of the number
		 
#####: In case of printing the variables(8-bit) its recommended to type cast and promote them to uint16_t.
        uint8_t v_Num_u8;
		LCD1.Printf("num1:%u",(uint16_t)v_Num_u8); 		 
***************************************************************************************************/
void Character_LCD :: Printf(const char *argList , uint8_t x, uint8_t y , ... )
{
	GotoXY(x,y);
	const char *ptr;
	va_list argp;
	signed int v_num_s16;
	signed long int v_num_s32;
	uint16_t v_num_u16;
	uint32_t v_num_u32;
	char *str;
	char  ch;
	uint8_t v_numOfDigits;

	double v_floatNum_f32;
	


	va_start(argp, argList);
	// Loop through the list to extract all the input arguments 
	for(ptr = argList; *ptr != '\0'; ptr++)
	{

		ch= *ptr;
		if(ch == '%')         //Check for '%' as there will be format specifier after it 
		{
		    ptr++;
		    ch = *ptr;
		   if((ch>=0x30) && (ch<=0x39))
			{
			   v_numOfDigits = 0;
			   while((ch>=0x30) && (ch<=0x39))
			    {
				   v_numOfDigits = (v_numOfDigits * 10) + (ch-0x30);
				   ptr++;
				   ch = *ptr;
				}
			}
			else
			{
			  v_numOfDigits = 0xffu;
			}				


			switch(ch)       // Decode the type of the argument 
			{
			case 'C':
			case 'c':     // Argument type is of char, hence read char data from the argp 
				ch = va_arg(argp, int);
				SendChar(ch);
				break;

			case 'd':    // Argument type is of signed integer, hence read 16bit data from the argp 
				v_num_s16 = va_arg(argp, signed int);
				if(v_num_s16<0)
				 { // If the number is -ve then display the 2's complement along with '-' sign  
				   v_num_s16 = -v_num_s16;
				   SendChar('-');
				 }
				Number(10u,v_num_s16,v_numOfDigits);
				break;
				
			case 'D':    // Argument type is of integer, hence read 16bit data from the argp 
				v_num_s32 = va_arg(argp, signed long int);				
				if(v_num_s32<0)
				 { // If the number is -ve then display the 2's complement along with '-' sign 
				   v_num_s32 = -v_num_s32;
				   SendChar('-');
				 }
				Number(10u,v_num_s32,v_numOfDigits);			
				break;	

			case 'u':    // Argument type is of unsigned integer, hence read 16bit unsigned data 
				v_num_u16 = va_arg(argp, uint16_t);			
				Number(10u,v_num_u16,v_numOfDigits);				
				break;
			
			case 'U':    // Argument type is of integer, hence read 32bit unsigend data 
				v_num_u32 = va_arg(argp, uint32_t);			
				Number(10u,v_num_u32,v_numOfDigits);				
				break;			

			case 'x':  // Argument type is of hex, hence hexadecimal data from the argp 
				v_num_u16 = va_arg(argp, uint16_t);				
				Number(16u,v_num_u16,v_numOfDigits);			
				break;

			case 'X':  // Argument type is of hex, hence hexadecimal data from the argp 
				v_num_u32 = va_arg(argp, uint32_t);						
				Number(16u,v_num_u32,v_numOfDigits);				
				break;

			
			case 'b':  // Argument type is of binary,Read int and convert to binary 
				v_num_u16 = va_arg(argp, uint16_t);		
				
				if(v_numOfDigits >= 8)
				   v_numOfDigits = 8;
               
				Number(2u,v_num_u16,v_numOfDigits);			
				break;

			case 'B':  // Argument type is of binary,Read int and convert to binary 
				v_num_u32 = va_arg(argp, uint32_t);			
                
				if(v_numOfDigits == 0xffu)
				   v_numOfDigits = 32;		
               
				Number(2u,v_num_u32,v_numOfDigits);				
				break;


			case 'F':
			case 'f': // Argument type is of float, hence read double data from the argp 
			
				v_floatNum_f32 = va_arg(argp, double);				
				FloatNumber(v_floatNum_f32);
            
				break;                


			case 'S':
			case 's': // Argument type is of string, hence get the pointer to sting passed 
				str = va_arg(argp, char *);
				SendString(str);			
				break;

			case '%':
				SendChar('%');
				break;
			}
		}
		else
		{
			// As '%' is not detected transmit the char passed 
			SendChar(ch);
		}
	}

	va_end(argp);
}


# endif





