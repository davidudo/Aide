// Pin for the PIR sensor
int pirPin = 37;

void setup() {
   Serial.begin(9600);
   pinMode(pirPin, INPUT);
}

void loop() {
   PIRSensor();
   delay(500);
}

void PIRSensor() {
  int pirSensorValue = digitalRead(pirPin);
  Serial.println(pirSensorValue);
}
