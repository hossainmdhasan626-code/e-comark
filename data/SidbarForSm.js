const SidbarForSm = [
  {
    id: 101,
    name: "Development Boards",
    type: "CATEGORY",
    children: [
      { id: 1011, name: "Arduino", path: "/arduino", type: "CATEGORY" },
      { id: 1012, name: "ESP32", path: "/esp32", type: "CATEGORY" },
      { id: 1013, name: "STM32", path: "/stm32", type: "CATEGORY" },
    ],
  },
  { id: 102, name: "Raspberry Pi", path: "/raspberry-pi", type: "CATEGORY" },
  { id: 103, name: "Mini Computer / PC", path: "/mini-pc", type: "CATEGORY" },
  { id: 104, name: "3D Printer", path: "/3d-printer", type: "CATEGORY" },
  {
    id: 105,
    name: "Sensors",
    type: "CATEGORY",
    children: [
      { id: 1051, name: "Ultrasonic", path: "/ultrasonic", type: "CATEGORY" },
      { id: 1052, name: "Infrared", path: "/ir", type: "CATEGORY" },
    ],
  },
  { id: 106, name: "Internet of things (IoT)", path: "/iot", type: "CATEGORY" },
  {
    id: 107,
    name: "Home Automation",
    path: "/home-automation",
    type: "CATEGORY",
  },
  { id: 108, name: "Learning Kit", path: "/learning-kit", type: "CATEGORY" },
  {
    id: 109,
    name: "Electronics Module",
    path: "/electronics-module",
    type: "CATEGORY",
  },
  {
    id: 110,
    name: "Arduino Shield",
    path: "/arduino-shield",
    type: "CATEGORY",
  },
  {
    id: 111,
    name: "Soldering Accessories",
    path: "/soldering",
    type: "CATEGORY",
  },
  {
    id: 112,
    name: "Robotics Parts",
    type: "CATEGORY",
    children: [
      { id: 1121, name: "Motors", path: "/motors", type: "CATEGORY" },
      { id: 1122, name: "Wheels", path: "/wheels", type: "CATEGORY" },
      { id: 1123, name: "Chassis", path: "/chassis", type: "CATEGORY" },
    ],
  },
  { id: 113, name: "Quadcopter", path: "/quadcopter", type: "CATEGORY" },
  {
    id: 114,
    name: "Artificial intelligence (AI)",
    path: "/ai",
    type: "CATEGORY",
  },
  { id: 115, name: "Robots", path: "/robots", type: "CATEGORY" },
  { id: 116, name: "Display", path: "/display", type: "CATEGORY" },
  { id: 117, name: "PLC", path: "/plc", type: "CATEGORY" },
  {
    id: 118,
    name: "Industrial Component",
    path: "/industrial",
    type: "CATEGORY",
  },
];

export default SidbarForSm;
