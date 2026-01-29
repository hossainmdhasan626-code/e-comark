const CardData = [
  {
    id: 1,
    title: "Arduino Uno R3",
    description:
      "The most popular Arduino board for beginners and prototyping.",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
    category: "Microcontrollers",
    reviews: [
      {
        id: 101,
        user: "Hasan",
        rating: 5,
        comment: "Original product, works perfectly!",
      },
      {
        id: 102,
        user: "Anik",
        rating: 4,
        comment: "Good quality but shipping was slow.",
      },
      { id: 103, user: "Siam", rating: 5, comment: "Best for beginners." },
    ],
  },
  {
    id: 2,
    title: "Ultrasonic Sensor HC-SR04",
    description: "Distance measuring sensor module with 2cm to 400cm range.",
    price: 5,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [], // Empty - ekhane tumi add korte parbe
  },
  {
    id: 3,
    title: "DHT22 Temperature Sensor",
    description: "Digital temperature and humidity sensor with high accuracy.",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1591489378810-d2a4ac9ecef7?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [
      {
        id: 104,
        user: "Tanvir",
        rating: 5,
        comment: "Very accurate readings compared to DHT11.",
      },
      {
        id: 105,
        user: "Rakib",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 4,
    title: "PIR Motion Sensor",
    description: "Passive infrared sensor for motion detection projects.",
    price: 4,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [], // Empty
  },
  {
    id: 5,
    title: "Arduino Mega 2560",
    description:
      "Extended I/O board with 54 digital pins for complex projects.",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=400&h=300&fit=crop",
    category: "Microcontrollers",
    reviews: [
      {
        id: 106,
        user: "Fahim",
        rating: 5,
        comment: "Plenty of pins for my 3D printer project.",
      },
      { id: 107, user: "Sakib", rating: 5, comment: "Solid build quality." },
      {
        id: 108,
        user: "Ariful",
        rating: 4,
        comment: "Genuine board, no issues with drivers.",
      },
      {
        id: 109,
        user: "Mehedi",
        rating: 5,
        comment: "Fast delivery, highly recommended.",
      },
      { id: 110, user: "Zishan", rating: 4, comment: "Packaging was great." },
    ],
  },
  {
    id: 6,
    title: "MQ-2 Gas Sensor",
    description: "Detects LPG, smoke, alcohol, propane, hydrogen, methane.",
    price: 6,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [
      {
        id: 111,
        user: "Nayeem",
        rating: 5,
        comment: "Very sensitive to smoke.",
      },
      {
        id: 112,
        user: "Emon",
        rating: 4,
        comment: "Need to calibrate it for 24 hours first.",
      },
      {
        id: 113,
        user: "Joy",
        rating: 5,
        comment: "Working fine with my home automation system.",
      },
      {
        id: 114,
        user: "Alamin",
        rating: 3,
        comment: "Good, but takes time to stabilize.",
      },
    ],
  },
  {
    id: 7,
    title: "Soil Moisture Sensor",
    description: "Measures soil moisture level for automated watering systems.",
    price: 3,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [], // Empty
  },
  {
    id: 8,
    title: "Arduino Nano",
    description:
      "Compact board perfect for breadboard and space-limited projects.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&h=300&fit=crop",
    category: "Microcontrollers",
    reviews: [
      { id: 115, user: "Robin", rating: 5, comment: "Compact and powerful." },
      {
        id: 116,
        user: "Sumon",
        rating: 4,
        comment: "Mini USB port is a bit old-school but works.",
      },
      {
        id: 117,
        user: "Kamrul",
        rating: 5,
        comment: "Great for drone projects.",
      },
      { id: 118, user: "Sabbir", rating: 5, comment: "Cheap and reliable." },
      {
        id: 119,
        user: "Munna",
        rating: 4,
        comment: "Perfectly fits on a breadboard.",
      },
      {
        id: 120,
        user: "Tushar",
        rating: 5,
        comment: "Awesome for small gadgets.",
      },
      {
        id: 121,
        user: "Liton",
        rating: 5,
        comment: "My favorite Arduino board.",
      },
    ],
  },
  {
    id: 9,
    title: "MPU6050 Gyroscope",
    description: "6-axis accelerometer and gyroscope for motion tracking.",
    price: 7,
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
    category: "Sensors",
    reviews: [], // Empty
  },
];

export default CardData;
