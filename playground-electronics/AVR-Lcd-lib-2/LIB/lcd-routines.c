// Control of a HD44780 compatible LCD in 4-bit interface 
mode // http://www.mikrocontroller.net/articles/HD44780 
// http://www.mikrocontroller.net/articles/AVR-GCC-Tutorial/LCD- Control 
// 
// The pin assignment can be set via defines in lcd-routines.h
 
#include  <avr / io.h>
#include  "lcd-routines.h"
#include  <util / delay.h>
 
////////////////////////////////////////////////// ////////////////////////////// 
// Creates an enable pulse 
static  void  lcd_enable (  void  ) 
{ 
    LCD_PORT  | =  ( 1 < < LCD_EN );      // set Enable to 1 
    _delay_us (  LCD_ENABLE_US  );   // short break 
    LCD_PORT  & =  ~ ( 1 << LCD_EN );     // set Enable to 0 
}
 
////////////////////////////////////////////////// ////// 
// Sends a 4-bit output to the LCD 
static  void  lcd_out (  uint8_t  data  ) 
{ 
    data  & =  0xF0 ;                        // Mask upper 4 bits
 
    LCD_PORT  & =  ~ ( 0xF0 >> ( 4 - LCD_DB ));     // delete mask 
    LCD_PORT  | =  ( data >> ( 4 - LCD_DB ));      // set bits 
    lcd_enable (); 
}
 
////////////////////////////////////////////////// ////////////////////////////// 
// initialization: must be called at the very beginning of the program. 
void  lcd_init (  void  ) 
{ 
    // switch used pins to output 
    uint8_t  pins  =  ( 0x0F  <<  LCD_DB )  |            // 4 data lines 
                   ( 1 << LCD_RS )  |                 // R / S line 
                   ( 1 << LCD_EN );                  // Enable line 
    LCD_DDR  | =  pins ;
 
    // initial all outputs to zero 
    LCD_PORT  & =  ~ pins ;
 
    // wait for the readiness of the LCD 
    _delay_ms (  LCD_BOOTUP_MS  );
    
    // soft reset must be sent 3 times in a row to initialize 
    lcd_out (  LCD_SOFT_RESET  ); 
    _delay_ms (  LCD_SOFT_RESET_MS1  );
 
    lcd_enable (); 
    _delay_ms (  LCD_SOFT_RESET_MS2  );
 
    lcd_enable (); 
    _delay_ms (  LCD_SOFT_RESET_MS3  );
 
    // activate 4-bit mode 
    lcd_out (  LCD_SET_FUNCTION  | 
             LCD_FUNCTION_4BIT  ); 
    _delay_ms (  LCD_SET_4BITMODE_MS  );
 
    // 4-bit mode / 2 lines / 5x7 
    lcd_command (  LCD_SET_FUNCTION  | 
                 LCD_FUNCTION_4BIT  | 
                 LCD_FUNCTION_2LINE  | 
                 LCD_FUNCTION_5X7  );
 
    // display on / cursor / blink of 
    lcd_command (  LCD_SET_DISPLAY  | 
                 LCD_DISPLAY_ON  | 
                 LCD_CURSOR_OFF  | 
                 LCD_BLINKING_OFF ); 
 
    // cursor increment / no scroll 
    lcd_command (  LCD_SET_ENTRY  | 
                 LCD_ENTRY_INCREASE  | 
                 LCD_ENTRY_NOSHIFT  );
 
    lcd_clear (); 
}
  
////////////////////////////////////////////////// /////// 
// sends a data byte to the LCD 
void  lcd_data (  uint8_t  data  ) 
{ 
    LCD_PORT  | =  ( 1 << LCD_RS );     // set RS to 1
 
    lcd_out (  data  );             // first the top, 
    lcd_out (  data << 4  );          // then send the lower 4 bits
 
    _delay_us (  LCD_WRITEDATA_US  ); 
}
 
////////////////////////////////////////////////// ////// 
// sends a command to the LCD 
void  lcd_command (  uint8_t  data  ) 
{ 
    LCD_PORT  & =  ~ ( 1 << LCD_RS );     // set RS to 0
 
    lcd_out (  data  );              // first the top, 
    lcd_out (  data << 4  );            // then send the lower 4 bits
 
    _delay_us (  LCD_COMMAND_US  ); 
}
 
////////////////////////////////////////////////// ////////////////////////////// 
// sends the command to erase the display 
void  lcd_clear (  void  ) 
{ 
    lcd_command (  LCD_CLEAR_DISPLAY  ); 
    _delay_ms (  LCD_CLEAR_DISPLAY_MS  ); 
}
 
////////////////////////////////////////////////// ////////////////////////////// 
// Send the command: cursor home 
void  lcd_home (  void  ) 
{ 
    lcd_command (  LCD_CURSOR_HOME  ); 
    _delay_ms (  LCD_CURSOR_HOME_MS  ); 
}
 
////////////////////////////////////////////////// ////// 
// sets the cursor in column x (0..15) row y (1 .. 4)
 
void  lcd_setcursor (  uint8_t  x ,  uint8_t  y  ) 
{ 
    uint8_t  data ;
 
    switch  ( y ) 
    { 
        case  1 :     // 1st line 
            data  =  LCD_SET_DDADR  +  LCD_DDADR_LINE1  +  x ; 
            break ;
 
        case  2 :     // 2nd line 
            data  =  LCD_SET_DDADR  +  LCD_DDADR_LINE2  +  x ; 
            break ;
 
        case  3 :     // 3rd line 
            data  =  LCD_SET_DDADR  +  LCD_DDADR_LINE3  +  x ; 
            break ;
 
        case  4 :     // 4th line 
            data  =  LCD_SET_DDADR  +  LCD_DDADR_LINE4  +  x ; 
            break ;
 
        default : 
            return ;                                    // in the case of a wrong line 
    }
 
    lcd_command (  data  ); 
}
 
////////////////////////////////////////////////// //////// 
// Write a string on the LCD
 
void  lcd_string (  const  char  * data  ) 
{ 
    while (  * data  ! =  '\ 0'  ) 
        lcd_data (  * data ++  ); 
}
 
////////////////////////////////////////////////// ////// 
// Write a character in the Character Generator RAM
 
void  lcd_generatechar (  uint8_t  start address ,  const  uint8_t  * data  ) 
{ 
    // Set the start position of the character 
    lcd_command (  LCD_SET_CGADR  |  ( start address << 3 )  );  // start addresses: 0; 1; 2; 3; 4; 5; 6; 7
 
    // transfer bit pattern 
    for  (  uint8_t  i = 0 ;  i < 8 ;  i ++  ) 
    { 
        lcd_data (  data [ i ]  ); 
    } 
    lcd_command ( LCD_SET_DDADR );  // set DRAM to 0 
}