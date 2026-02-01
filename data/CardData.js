const CardData = [
  {
    id: 1,
    title: "Arduino Uno R3",
    shortDescription: "The most popular Arduino board for beginners.",
    fullDescription: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, and a 16 MHz quartz crystal. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter to get started.",
    price: 25,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
    category: "Microcontrollers",
    // Bistarito Warranty
    warranty: "6 Months Service Warranty",
    warrantyDetails: [
      "Replacement available for manufacturing defects within 7 days.",
      "6 months of free technical service for firmware or driver issues.",
      "Does not cover burnt or physical damage due to wrong voltage input.",
      "Customer must provide the original box for warranty claims."
    ],
    specifications: ["Microcontroller: ATmega328P", "Operating Voltage: 5V", "Digital I/O Pins: 14", "Flash Memory: 32 KB"],
    reviews: [
      { id: 101, user: "Hasan", rating: 5, comment: "Original product, works perfectly!" },
      { id: 102, user: "Anik", rating: 4, comment: "Good quality but shipping was slow." },
      { id: 103, user: "Siam", rating: 5, comment: "Best for beginners." },
    ],
  },
  {
    id: 2,
    title: "Ultrasonic Sensor HC-SR04",
    shortDescription: "Distance measuring sensor module.",
    fullDescription: "HC-SR04 Ultrasonic distance sensor provides 2cm - 400cm non-contact measurement function, the ranging accuracy can reach to 3mm. The modules includes ultrasonic transmitters, receiver and control circuit.",
    price: 5,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    category: "Sensors",
    // Bistarito Warranty
    warranty: "No Warranty (Testing Policy Only)",
    warrantyDetails: [
      "3-day check-in period for checking performance.",
      "If the sensor fails to detect distance on first arrival, it will be replaced.",
      "No warranty covers sensors damaged by water, high voltage, or heat.",
      "Technical support available for wiring instructions."
    ],
    specifications: ["Power Supply: 5V DC", "Quiescent Current: <2mA", "Effectual Angle: <15°", "Ranging Distance: 2cm – 400 cm"],
    reviews: [],
  },
  {
    id: 3,
    title: "DHT22 Temperature Sensor",
    shortDescription: "High accuracy digital temp and humidity sensor.",
    fullDescription: "The DHT22 is a basic, low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin (no analog input pins needed).",
    price: 8,
    image: "https://images.unsplash.com/photo-1591489378810-d2a4ac9ecef7?w=400&h=300&fit=crop",
    category: "Sensors",
    warranty: "3 Months Limited Warranty",
    warrantyDetails: [
      "3 months limited warranty on internal chip failure.",
      "Replacement within 15 days if the reading error is beyond ±5%.",
      "Corrosion or exposure to high chemical concentration voids the warranty.",
      "Must be used with a 4.7K or 10K resistor for stable reading."
    ],
    specifications: ["Humidity: 0-100% accuracy", "Temperature: -40 to 80°C", "Sampling rate: 0.5Hz"],
    reviews: [
      { id: 104, user: "Tanvir", rating: 5, comment: "Very accurate readings compared to DHT11." },
    ],
  },
  {
    id: 5,
    title: "Arduino Mega 2560",
    shortDescription: "Extended I/O board for complex projects.",
    fullDescription: "The Arduino Mega 2560 is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 15 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports).",
    price: 45,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=400&h=300&fit=crop",
    category: "Microcontrollers",
    warranty: "1 Year Official Brand Warranty",
    warrantyDetails: [
      "12 months full parts and service warranty.",
      "Covers any manufacturing defects or hardware malfunctions.",
      "Replacement provided for DOA (Dead on Arrival) cases.",
      "Does not cover short-circuits caused by improper external wiring."
    ],
    specifications: ["Microcontroller: ATmega2560", "Digital Pins: 54", "Analog Pins: 16", "Flash Memory: 256 KB"],
    reviews: [
      { id: 106, user: "Fahim", rating: 5, comment: "Plenty of pins for my 3D printer project." },
    ],
  },
  // Onno product guli eivabe update kora jabe...
];

export default CardData;