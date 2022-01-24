void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
int x;
x =Serial.read();
if(x != -1){
  
  if (x>47 && x<58){
    x=x-48;
    if(x>5){
      Serial.print("Luettu iso kirjain >5: ");
      Serial.println(x);
    }
    else{
    Serial.print("Luettu pieni kirjain <5: ");
    Serial.println(x);
    }
  }
  else{
    Serial.println("Just Numbers ");
  }
}
//delay(10);
}

