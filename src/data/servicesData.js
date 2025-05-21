import { FaCut, FaPlus, FaHandsHelping, FaUserTie } from "react-icons/fa"; 
import { FaChild } from "react-icons/fa6";

export const services = [
  {
    title: "Men's Haircut",
    description:
      "Classic or modern haircut tailored to your style, includes wash and finish.",
    price: "$30",
    imageUrl: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaCut,
  },
  {
    title: "Beard Trim & Shape",
    description:
      "Expert beard grooming, shaping, and edging for a clean, defined look.",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    icon: FaPlus,
  },
  {
    title: "Hot Towel Shave",
    description:
      "Traditional hot towel shave experience with straight razor, soothing and smooth.",
    price: "$35",
    imageUrl: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaHandsHelping,
  },
  {
    title: "Father & Son Cut",
    description:
      "Bonding experience: haircut for father and son, special pricing.",
    price: "$50",
    imageUrl:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaUserTie,
  },
  {
    title: "Buzz Cut",
    description:
      "Clean and precise buzz cut, perfect for a low-maintenance style.",
    price: "$25",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661542936512-8fd551bc61d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaPlus,
  },
  {
    title: "Kids Haircut",
    description: "Stylish and comfortable haircuts for the younger gentlemen.",
    price: "$20",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677444398697-d565239637f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaChild, // This icon is now correctly imported from fa6
  },
];

export const servicePrices = [
  {
    category: "Classic Services",
    items: [
      { name: "Haircut", price: "$25" },
      { name: "Beard Trim", price: "$15" },
      { name: "Shave", price: "$30" },
    ],
  },
  {
    category: "Premium Services",
    items: [
      { name: "Premium Haircut", price: "$40" },
      { name: "Deluxe Beard Trim", price: "$25" },
      { name: "Hot Towel Shave", price: "$35" },
    ],
  },
  {
    category: "Packages",
    items: [
      { name: "Haircut & Beard", price: "$35" },
      { name: "Haircut & Shave", price: "$50" },
    ],
  },
];
