// Control of a HD44780 compatible LCD in 4-bit interface 
mode // http://www.mikrocontroller.net/articles/AVR-GCC-Tutorial/LCD-Control 
//
 
#ifndef LCD_ROUTINES_H 
#define LCD_ROUTINES_H
 
////////////////////////////////////////////////// ////////////////////////////// 
// here Enter the clock frequency used in Hz, important!
 
#ifndef F_CPU 
#define F_CPU 8000000 
#endif
 
////////////////////////////////////////////////// ////////////////////////////// 
adapt // pinout for the LCD on pins used 
// All LCD pins have at one port be connected and the 4 
// data lines must be on consecutive pins
 
// LCD DB4-DB7 <-> PORTD bit PD0-PD3 
#define LCD_PORT PORTD 
#define LCD_DDR DDRD 
#define LCD_DB PD0
 
// LCD RS <-> PORTD bit PD4 (RS: 1 = Data, 0 = Command) 
#define LCD_RS PD4
 
// LCD EN <-> PORTD Bit PD5 (EN: 1-pulse for data) 
#define LCD_EN PD5
 
////////////////////////////////////////////////// ////////////////////////////// 
// LCD execution times (MS = milliseconds US = microseconds)
 
#define LCD_BOOTUP_MS 15 
#define LCD_ENABLE_US 20 
#define LCD_WRITEDATA_US 46 
#define LCD_COMMAND_US 42
 
#define LCD_SOFT_RESET_MS1 5 
#define LCD_SOFT_RESET_MS2 1 
#define LCD_SOFT_RESET_MS3 1 
#define LCD_SET_4BITMODE_MS 5
 
#define LCD_CLEAR_DISPLAY_MS 2 
#define LCD_CURSOR_HOME_MS 2
 
////////////////////////////////////////////////// ////////////////////////////// 
// line definitions of the LCD used 
// the entries here should look for a LCD with a line length of 16 Fit characters 
// For other line lengths, these entries must be adjusted
 
#define LCD_DDADR_LINE1 0x00 
#define LCD_DDADR_LINE2 0x40 
#define LCD_DDADR_LINE3 0x10 
#define LCD_DDADR_LINE4 0x50
 
////////////////////////////////////////////////// ////////////////////////////// 
// initialization: must be called at the very beginning of the program. 
void  lcd_init (  void  );
 
////////////////////////////////////////////////// ////////////////////////////// 
Clear LCD // 
void  lcd_clear (  void  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// cursor in the 1st line, 0th column 
void  lcd_home (  void  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// cursor to an arbitrary position 
void  lcd_setcursor (  uint8_t  column ,  uint8_t  line  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// output of a single character at the current cursor position 
void  lcd_data (  uint8_t  data  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// output a string at the current cursor position 
void  lcd_string (  const  char  * data  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// definition of a user-defined special character. 
// data must point to an array [8] with the line codes of the character to be defined 
//. Later these can be called with lcd_data (0-7) 
void  lcd_generatechar (  uint8_t  start address ,  const  uint8_t  * data  );
 
////////////////////////////////////////////////// ////////////////////////////// 
// output of a command to the LCD. 
void  lcd_command (  uint8_t  data  );
 
 
////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////// 
LCD commands and arguments. 
// for use in lcd_command
 
// Clear Display -------------- 0b00000001 
#define LCD_CLEAR_DISPLAY 0x01
 
// Cursor Home ---------------- 0b0000001x 
#define LCD_CURSOR_HOME 0x02
 
// Set Entry Mode ------------- 0b000001xx 
#define LCD_SET_ENTRY 0x04
 
#define LCD_ENTRY_DECREASE 0x00 
#define LCD_ENTRY_INCREASE 0x02 
#define LCD_ENTRY_NOSHIFT 0x00 
#define LCD_ENTRY_SHIFT 0x01
 
// Set Display ---------------- 0b00001xxx 
#define LCD_SET_DISPLAY 0x08
 
#define LCD_DISPLAY_OFF 0x00 
#define LCD_DISPLAY_ON 0x04 
#define LCD_CURSOR_OFF 0x00 
#define LCD_CURSOR_ON 0x02 
#define LCD_BLINKING_OFF 0x00 
#define LCD_BLINKING_ON 0x01
 
// Set Shift ------------------ 0b0001xxxx 
#define LCD_SET_SHIFT 0x10
 
#define LCD_CURSOR_MOVE 0x00 
#define LCD_DISPLAY_SHIFT 0x08 
#define LCD_SHIFT_LEFT 0x00 
#define LCD_SHIFT_RIGHT 0x04
 
// Set Function --------------- 0b001xxxxx 
#define LCD_SET_FUNCTION 0x20
 
#define LCD_FUNCTION_4BIT 0x00 
#define LCD_FUNCTION_8BIT 0x10 
#define LCD_FUNCTION_1LINE 0x00 
#define LCD_FUNCTION_2LINE 0x08 
#define LCD_FUNCTION_5X7 0x00 
#define LCD_FUNCTION_5X10 0x04
 
#define LCD_SOFT_RESET 0x30
 
// Set CG RAM Address --------- 0b01xxxxxx (Character Generator RAM) 
#define LCD_SET_CGADR 0x40
 
#define LCD_GC_CHAR0 0 
#define LCD_GC_CHAR1 1 
#define LCD_GC_CHAR2 2 
#define LCD_GC_CHAR3 3 
#define LCD_GC_CHAR4 4 
#define LCD_GC_CHAR5 5 
#define LCD_GC_CHAR6 6 
#define LCD_GC_CHAR7 7
 
// Set DD RAM Address --------- 0b1xxxxxxx (Display Data RAM) 
#define LCD_SET_DDADR 0x80
 
#endif