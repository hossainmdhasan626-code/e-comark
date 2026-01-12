const NavbarAndSidbarSmItems = [
  { id: 1, name: "HOME", path: "/" },
  {
    id: 2,
    name: "PRODUCTS",
    children: [
      { id: 21, name: "Latest Products", path: "/latest" },
      { id: 22, name: "Top Rated", path: "/top-rated" },
    ],
  },
  { id: 3, name: "DEV BOARDS", path: "/dev-boards" },
  {
    id: 4,
    name: "SENSORS",
    children: [
      { id: 41, name: "Temperature Sensors", path: "/temp" },
      { id: 42, name: "Motion Sensors", path: "/motion" },
      { id: 43, name: "Gas Sensors", path: "/gas" },
    ],
  },
  {
    id: 5,
    name: "ELECTRONICS MODULE",
    children: [
      { id: 51, name: "Bluetooth Modules", path: "/bluetooth" },
      { id: 52, name: "WiFi Modules", path: "/wifi" },
      { id: 53, name: "Power Modules", path: "/power" },
    ],
  },
  { id: 6, name: "BACK IN STOCK", path: "/back-stock" },
  { id: 7, name: "NEW PRODUCTS", path: "/new" },
  { id: 8, name: "DISCOUNT", path: "/discount" },
  {
    id: 9,
    name: "INFO",
    children: [
      { id: 91, name: "About Us", path: "/about" },
      { id: 92, name: "Shipping Policy", path: "/shipping" },
    ],
  },
  { id: 10, name: "CONTACT", path: "/contact" },
];

export default NavbarAndSidbarSmItems;
