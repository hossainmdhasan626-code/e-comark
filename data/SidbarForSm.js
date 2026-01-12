const SidbarForSm = [
  {
    id: 101,
    name: "Development Boards",
    children: [
      { id: 1011, name: "Arduino", path: "/arduino" },
      { id: 1012, name: "ESP32", path: "/esp32" },
      { id: 1013, name: "STM32", path: "/stm32" },
    ],
  },
  { id: 102, name: "Raspberry Pi", path: "/raspberry-pi" },
  { id: 103, name: "Mini Computer / PC", path: "/mini-pc" },
  { id: 104, name: "3D Printer", path: "/3d-printer" },
  {
    id: 105,
    name: "Sensors",
    children: [
      { id: 1051, name: "Ultrasonic", path: "/ultrasonic" },
      { id: 1052, name: "Infrared", path: "/ir" },
    ],
  },
  { id: 106, name: "Internet of things (IoT)", path: "/iot" },
  { id: 107, name: "Home Automation", path: "/home-automation" },
  { id: 108, name: "Learning Kit", path: "/learning-kit" },
  { id: 109, name: "Electronics Module", path: "/electronics-module" },
  { id: 110, name: "Arduino Shield", path: "/arduino-shield" },
  { id: 111, name: "Soldering Accessories", path: "/soldering" },
  {
    id: 112,
    name: "Robotics Parts",
    children: [
      { id: 1121, name: "Motors", path: "/motors" },
      { id: 1122, name: "Wheels", path: "/wheels" },
      { id: 1123, name: "Chassis", path: "/chassis" },
    ],
  },
  { id: 113, name: "Quadcopter", path: "/quadcopter" },
  { id: 114, name: "Artificial intelligence (AI)", path: "/ai" },
  { id: 115, name: "Robots", path: "/robots" },
  { id: 116, name: "Display", path: "/display" },
  { id: 117, name: "PLC", path: "/plc" },
  { id: 118, name: "Industrial Component", path: "/industrial" },
];

export default SidbarForSm;
