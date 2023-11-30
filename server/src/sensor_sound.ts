import * as five from 'johnny-five';

// Initialize the board
const board = new five.Board();

// Define pin constants
const soundSensorPin = 'A0';
const ledPins = [13, 10, 9];

// Wait for the board to be ready
board.on('ready', () => {
  // Initialize components
  const lcd = new five.LCD({ pins: [12, 11, 5, 4, 3, 2] });
  const soundSensor = new five.Sensor(soundSensorPin);
  
  // Create an array to store Led instances
  const leds: five.Led[] = [];

  // Initialize LEDs
  ledPins.forEach(pin => {
    leds.push(new five.Led(pin));
  });

  // Event handler for sensor readings
  soundSensor.on('change', () => {
    const sensorValue = soundSensor.value;

    if (sensorValue >= 0 && sensorValue < 35) {
      // Very Low
      updateDisplayAndSerial('Very Low', leds, lcd);
    } else if (sensorValue >= 35 && sensorValue < 40) {
      // Low
      updateDisplayAndSerial('Low', leds, lcd, 0);
    } else if (sensorValue >= 40 && sensorValue < 45) {
      // Intermediate
      updateDisplayAndSerial('Intermediate', leds, lcd, 1);
    } else if (sensorValue >= 45 && sensorValue < 50) {
      // High
      updateDisplayAndSerial('High', leds, lcd, 2);
    } else if (sensorValue >= 50) {
      // Very High
      updateDisplayAndSerial('Very High', leds, lcd);
    }
  });
});

// Function to update display and serial output
function updateDisplayAndSerial(message: string, leds: five.Led[], lcd: five.LCD, ledIndex?: number) {
  leds.forEach(led => led.off()); // Turn off all LEDs

  if (ledIndex !== undefined) {
    leds[ledIndex].on(); // Turn on the specified LED
  }

  lcd.clear();
  lcd.cursor(0, 0).print(message);
  console.log(message);
}
