const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Products",
    children: [
      { id: 21, title: "All Products", path: "/products" },
      { id: 22, title: "Add Product", path: "/products/add" },
    ],
  },
  {
    id: 3,
    title: "Orders",
    path: "/orders",
  },
];

export default sidebarItems;