const CardData = [
  {
    id: 1,
    title: "Arduino Uno R3",
    shortDescription: "The most popular Arduino board for beginners.",
    fullDescription: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, and a 16 MHz quartz crystal. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter to get started.",
    price: 25,
    images: [
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1000",
      "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=1000",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000",
      "https://images.unsplash.com/photo-1563770660941-20978e870e9b?q=80&w=1000"
    ],
    category: "Microcontrollers",
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
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000",
      "https://images.unsplash.com/photo-1581092921461-7d63503b878b?q=80&w=1000",
      "https://images.unsplash.com/photo-1581092162384-8987c1794714?q=80&w=1000",
      "https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=1000"
    ],
    category: "Sensors",
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
    images: [
      "https://images.unsplash.com/photo-1591489378810-d2a4ac9ecef7?q=80&w=1000",
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1000",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000",
      "https://images.unsplash.com/photo-1622322062602-0e42f9b87723?q=80&w=1000",
      "https://images.unsplash.com/photo-1559813624-59a1a5af7dd4?q=80&w=1000"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=1000",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000",
      "https://images.unsplash.com/photo-1563770660941-20978e870e9b?q=80&w=1000",
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
      "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=1000"
    ],
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
  {
    id: 6,
    title: "Raspberry Pi 4 Model B",
    shortDescription: "High-performance credit card sized computer.",
    fullDescription: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity.",
    price: 75,
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000",
      "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1000",
      "https://images.unsplash.com/photo-1555617981-d979fa69911e?q=80&w=1000",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      "https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=1000"
    ],
    category: "Single Board Computers",
    warranty: "6 Months Service Warranty",
    warrantyDetails: ["Covers factory hardware issues.", "No warranty for overclocking damage.", "SD card slot damage is not covered."],
    specifications: ["Broadcom BCM2711, Quad core Cortex-A72", "4GB LPDDR4-3200 SDRAM", "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless"],
    reviews: [],
  },
  {
    id: 7,
    title: "Servo Motor MG996R",
    shortDescription: "High torque metal gear servo motor.",
    fullDescription: "MG996R is essentially an upgraded version of the famous MG995 servo, and features improved shockproofing and a redesigned PCB and IC control system which makes it much more accurate.",
    price: 12,
    images: [
      "https://images.unsplash.com/photo-159742324403d-112507e82894?q=80&w=1000",
      "https://images.unsplash.com/photo-1517055727195-b451e5dc3f6e?q=80&w=1000",
      "https://images.unsplash.com/photo-1563770660244-df94c501988a?q=80&w=1000",
      "https://images.unsplash.com/photo-1596495573105-d14658c1de59?q=80&w=1000",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000"
    ],
    category: "Motors",
    warranty: "7 Days Replacement",
    warrantyDetails: ["Replacement only if the motor doesn't rotate on first test.", "Physical stress or broken gear due to heavy load is not covered."],
    specifications: ["Torque: 9.4 kg-cm (4.8V)", "Speed: 0.17 sec/60°", "Gear Type: Metal"],
    reviews: [],
  },
  {
    id: 8,
    title: "L298N Motor Driver",
    shortDescription: "Dual H-Bridge motor driver module.",
    fullDescription: "This L298N Motor Driver Module is a high power motor driver perfect for driving DC Motors and Stepper Motors. It uses the popular L298N motor driver IC.",
    price: 6,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1000",
      "https://images.unsplash.com/photo-1563770660941-20978e870e9b?q=80&w=1000",
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1000"
    ],
    category: "Motor Drivers",
    warranty: "Testing Warranty",
    warrantyDetails: ["Check within 3 days.", "Wrong polarity connection will burn the IC and void warranty."],
    specifications: ["Operating Voltage: up to 46V", "Peak Current: 2A", "Logic Voltage: 5V"],
    reviews: [],
  },
  {
    id: 9,
    title: "ESP32 WiFi + BT Module",
    shortDescription: "Powerful MCU with WiFi and Bluetooth.",
    fullDescription: "ESP32 is a single 2.4 GHz Wi-Fi-and-Bluetooth combo chip designed with the TSMC ultra-low-power 40 nm technology. It is designed to achieve the best power and RF performance.",
    price: 10,
    images: [
      "https://images.unsplash.com/photo-1555617981-d979fa69911e?q=80&w=1000",
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=1000",
      "https://images.unsplash.com/photo-1563770660941-20978e870e9b?q=80&w=1000",
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000"
    ],
    category: "Microcontrollers",
    warranty: "1 Month Service Warranty",
    warrantyDetails: ["Software troubleshooting support.", "No warranty for physical damage or burning."],
    specifications: ["Dual-core 240MHz", "520KB SRAM", "WiFi & Dual-mode Bluetooth"],
    reviews: [{ id: 107, user: "Rifat", rating: 5, comment: "Game changer for IoT projects!" }],
  },
  {
    id: 10,
    title: "16x2 LCD Display (Blue)",
    shortDescription: "Alphanumeric LCD display with backlight.",
    fullDescription: "This is a basic 16 character by 2 line display. Black text on Green background. Utilizes the extremely common HD44780 parallel interface chipset.",
    price: 7,
    images: [
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1000",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000",
      "https://images.unsplash.com/photo-1559813624-59a1a5af7dd4?q=80&w=1000",
      "https://images.unsplash.com/photo-1622322062602-0e42f9b87723?q=80&w=1000",
      "https://images.unsplash.com/photo-1591489378810-d2a4ac9ecef7?q=80&w=1000"
    ],
    category: "Displays",
    warranty: "Check Warranty",
    warrantyDetails: ["Check for dead pixels upon delivery.", "Backlight failure within 7 days is covered."],
    specifications: ["Operating Voltage: 5V", "16 Characters x 2 Lines", "I2C Interface Compatible"],
    reviews: [],
  },
  {
    id: 11,
    title: "9V Hi-Watt Battery",
    shortDescription: "Standard 9V battery for electronics.",
    fullDescription: "High-quality 9V battery, ideal for powering Arduino projects, sensors, and various electronic experiments where a compact power source is needed.",
    price: 2,
    images: [
      "https://images.unsplash.com/photo-1619641782822-751f83b24654?q=80&w=1000",
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=1000",
      "https://images.unsplash.com/photo-1548301768-9ca113962d73?q=80&w=1000",
      "https://images.unsplash.com/photo-1599321955419-780136367333?q=80&w=1000",
      "https://images.unsplash.com/photo-1536631890045-812e9e6234b3?q=80&w=1000"
    ],
    category: "Power",
    warranty: "No Warranty",
    warrantyDetails: ["Disposable product.", "No replacement after use or short circuit."],
    specifications: ["Voltage: 9V", "Chemistry: Zinc-Carbon", "Non-rechargeable"],
    reviews: [],
  },
];

export default CardData;