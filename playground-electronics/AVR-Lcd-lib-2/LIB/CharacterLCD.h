//*****************************************************************************
//
// Project Or Library Name 
//
//						Development Library LCD Character 
//
//
// Title		: 4 bit LCd interface
// Author		: Hamid Davoodi Shandiz - Copyright (C) 2017
// Created		: 2007-03-29
// Revised		: 2018-01-27
// Version		: 4.6.2.0
// Target MCU	: Atmel AVR series
//
// Updates 
// 4.6.2.0		: Add New Functions ( Setpin ) 
//				  Update & Add Functions ( Init )
//				  Update Function ( BigNumber )
//				  Change Name Functions ( VariableHex_Length ) to ( VariableHex )
//				  Add New Function ( Number )
//				  Add New Function ( FloatNumber )
//				  Add New Function ( Printf )
//				  
// This code is distributed under the GNU Public License
//		which can be found at AtmelStudio.com
//
// Email : info@atmelstudio.com
//
//*****************************************************************************

# ifndef _LCD_LIB_
#  warning "Not define _LCD_LIB_ . Please define ! "
# define _LCD_LIB_
# endif

#ifndef CHARACTER_LCD_LIB_CPP
#define CHARACTER_LCD_LIB_CPP

#define Version_CHARACTER_LCD_LIB 04060200

#ifndef F_CPU
/* prevent compiler error by supplying a default */
# warning "F_CPU not defined for <util/delay.h>"
# define F_CPU 16000000UL
#endif

#include <util/delay.h>
#include <inttypes.h>
#include <avr/pgmspace.h>
#include <stdio.h>
#include <stdarg.h>

#define Character_LCD_CLR				0	//DB0: clear display
#define Character_LCD_HOME				1	//DB1: return to home position
#define Character_LCD_ENTRY_MODE		2	//DB2: set entry mode
#define Character_LCD_ENTRY_INC			1	//DB1: increment
#define Character_LCD_ENTRY_SHIFT		0	//DB2: shift
#define Character_LCD_ON_CTRL			3	//DB3: turn lcd/cursor on
#define Character_LCD_ON_DISPLAY		2	//DB2: turn display on
#define Character_LCD_ON_CURSOR			1	//DB1: turn cursor on
#define Character_LCD_ON_BLINK			0	//DB0: blinking cursor
#define Character_LCD_MOVE				4	//DB4: move cursor/display
#define Character_LCD_MOVE_DISP			3	//DB3: move display (0-> move cursor)
#define Character_LCD_MOVE_RIGHT		2	//DB2: move right (0-> left)
#define Character_LCD_FUNCTION			5	//DB5: function set
#define Character_LCD_FUNCTION_8BIT		4	//DB4: set 8BIT mode (0->4BIT mode)
#define Character_LCD_FUNCTION_2LINES	3	//DB3: two lines (0->one line)
#define Character_LCD_FUNCTION_10DOTS	2	//DB2: 5x10 font (0->5x7 font)
#define Character_LCD_CGRAM				6	//DB6: set CG RAM address
#define Character_LCD_DDRAM				7	//DB7: set DD RAM address
// reading:
#define Character_LCD_BUSY				7	//DB7: LCD is busy
#define Character_LCD_LINES				2	//visible lines
#define Character_LCD_LINE_LENGTH		16	//line length (in characters)
// cursor position to DDRAM mapping
#define Character_LCD_LINE0_DDRAMADDR		0x00
#define Character_LCD_LINE1_DDRAMADDR		0x40
#define Character_LCD_LINE2_DDRAMADDR		0x14
#define Character_LCD_LINE3_DDRAMADDR		0x54
// progress bar defines
#define PROGRESSPIXELS_PER_CHAR			6

#define _AS_Dec2Ascii(Dec)	 ((Dec)+0x30)
#define _AS_Ascii2Dec(Asc)	 ((Asc)-0x30)
#define _AS_Hex2Ascii(Hex)  (((Hex)>0x09) ? ((Hex) + 0x37): ((Hex) + 0x30))
#define _AS_Ascii2Hex(Asc)  (((Asc)>0x39) ? ((Asc) - 0x37): ((Asc) - 0x30))
#define  _AS_GetBitMask(bit)          (1<<(bit))
#define  _AS_GetBitStatus(x,bit)      (((x)&(_AS_GetBitMask(bit)))!=0u)
#define _AS_GetMod32(dividend,divisor) (uint32_t)(dividend - (divisor * (uint32_t)(dividend/divisor)))

// ===  User Defined Character  ===

#if Version_CHARACTER_LCD_LIB >= 04060200

	enum Mode_Character_LCD {None_Mode};

#else

	#define None_Mode						0


#endif


#define ADD(X) _SFR_IO_ADDR(X)

class Character_LCD
{
	uint8_t RS_PORT , RS_DDR , RS_Bit ;
	uint8_t RW_PORT , RW_DDR , RW_Bit ;
	uint8_t E_PORT  , E_DDR  , E_Bit  ;

	uint8_t D4_PORT , D4_DDR , D4_Bit ;
	uint8_t D5_PORT , D5_DDR , D5_Bit ;
	uint8_t D6_PORT , D6_DDR , D6_Bit ;
	uint8_t D7_PORT , D7_DDR , D7_Bit ;
	uint8_t User_Defined_Character ;



	public:
	Character_LCD ();
	
	void SetRSPin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { RS_PORT = ADD_PORT ; RS_DDR = ADD_DDR ; RS_Bit = Bit ; }
	void SetRWPin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { RW_PORT = ADD_PORT ; RW_DDR = ADD_DDR ; RW_Bit = Bit ; }
	void SetEPin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { E_PORT = ADD_PORT ; E_DDR = ADD_DDR ; E_Bit = Bit ; }
	void SetD4Pin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { D4_PORT = ADD_PORT ; D4_DDR = ADD_DDR ; D4_Bit = Bit ; }
	void SetD5Pin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { D5_PORT = ADD_PORT ; D5_DDR = ADD_DDR ; D5_Bit = Bit ; }
	void SetD6Pin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { D6_PORT = ADD_PORT ; D6_DDR = ADD_DDR ; D6_Bit = Bit ; }
	void SetD7Pin(uint8_t ADD_PORT , uint8_t ADD_DDR , uint8_t Bit) { D7_PORT = ADD_PORT ; D7_DDR = ADD_DDR ; D7_Bit = Bit ; }

	void SetRSPin(uint8_t ADD_PORT , uint8_t Bit) { RS_PORT = ADD_PORT ; RS_DDR = ADD_PORT-1 ; RS_Bit = Bit ; }
	void SetRWPin(uint8_t ADD_PORT , uint8_t Bit) { RW_PORT = ADD_PORT ; RW_DDR = ADD_PORT-1 ; RW_Bit = Bit ; }
	void SetEPin(uint8_t ADD_PORT , uint8_t Bit) { E_PORT = ADD_PORT ; E_DDR = ADD_PORT-1 ; E_Bit = Bit ; }
	void SetD4Pin(uint8_t ADD_PORT , uint8_t Bit) { D4_PORT = ADD_PORT ; D4_DDR = ADD_PORT-1 ; D4_Bit = Bit ; }
	void SetD5Pin(uint8_t ADD_PORT , uint8_t Bit) { D5_PORT = ADD_PORT ; D5_DDR = ADD_PORT-1 ; D5_Bit = Bit ; }
	void SetD6Pin(uint8_t ADD_PORT , uint8_t Bit) { D6_PORT = ADD_PORT ; D6_DDR = ADD_PORT-1 ; D6_Bit = Bit ; }
	void SetD7Pin(uint8_t ADD_PORT , uint8_t Bit) { D7_PORT = ADD_PORT ; D7_DDR = ADD_PORT-1 ; D7_Bit = Bit ; }
			
	void SendChar(uint8_t);										//forms data ready to send to 74HC164
	void SendCommand(uint8_t);									//forms data ready to send to 74HC164
	void Definechar(const uint8_t *,uint8_t);					//write char to LCD CGRAM
	
	
	void Init(uint8_t x, uint8_t y);							//Initializes LCD
	void Clr(void);												//Clears LCD
	void Home(void);											//LCD cursor home
	void GotoXY(uint8_t, uint8_t);								//Cursor to X Y position
	
	void SendString_V(uint8_t*, uint8_t);						//Outputs string to LCD
	void SendString(char *_String , uint8_t PositionX , uint8_t PositionY);
	void SendString(char *_String);
	void CopyString(const uint8_t*, uint8_t, uint8_t);			//copies flash string to LCD at x,y
	void Printf(const char *argList , uint8_t x, uint8_t y , ... );
	
	
	
	void ShiftRight(uint8_t);									//shift by n characters Right
	void ShiftLeft(uint8_t);									//shift by n characters Left
	
	void CursorOn(void);										//Underline cursor ON
	void CursorOnBlink(void);									//Underline blinking cursor ON
	void CursorOFF(void);										//Cursor OFF
	
	void Blank(void);											//LCD blank but not cleared
	void Visible(void);											//LCD visible
	
	void CursorLeft(uint8_t);									//Shift cursor left by n
	void CursorRight(uint8_t);									//shift cursor right by n
	
	void Number(uint8_t v_numericSystem_u8, uint32_t v_number_u32, uint8_t v_numOfDigits);
	void FloatNumber(float v_floatNumber_f32);
	void INTNumber(float v_floatNumber_f32);
	
	private:
	
};

#endif

