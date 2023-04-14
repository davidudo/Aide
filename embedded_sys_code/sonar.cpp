#include <AFMotor.h>

AF_DCMotor rightMotor(1);
AF_DCMotor leftMotor(2);

const float SPEED_OF_SOUND = 0.034; // cm/us
const int DELAY_BETWEEN_READINGS = 500; // ms

const int TRIG_PINS[] = {49, 53, 48, 52};
const int ECHO_PINS[] = {47, 51, 46, 50};

void setup() {
  Serial.begin(9600);
  for (int i = 0; i < 4; i++) {
    pinMode(TRIG_PINS[i], OUTPUT);
    pinMode(ECHO_PINS[i], INPUT);
  }

  //Set initial speed of the motor & stop
	rightMotor.setSpeed(200);
	rightMotor.run(RELEASE);
	leftMotor.setSpeed(200);
	leftMotor.run(RELEASE);
}

void loop() {
  for (int i = 0; i < 4; i++) {
    float distance = readDistance(TRIG_PINS[i], ECHO_PINS[i]);
    Serial.print("Sensor ");
    Serial.print(i + 1);
    Serial.print(": ");
    Serial.print(distance);
    Serial.println(" cm");

    if (distance <= 6)
    {
      //Set initial speed of the motor & stop
      rightMotor.setSpeed(200);
      rightMotor.run(RELEASE);
      leftMotor.setSpeed(200);
      leftMotor.run(RELEASE);
    }
    else
    {
      rightMotor.run(FORWARD);	
      rightMotor.setSpeed(255);
      leftMotor.run(FORWARD);	
      leftMotor.setSpeed(255);
    }
  }
  delay(DELAY_BETWEEN_READINGS);
}

float readDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH, 10000); // Timeout after 10ms
  float distance = duration * SPEED_OF_SOUND / 2;
  return distance;
}
