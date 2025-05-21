import { FaCut, FaPlus, FaHandsHelping, FaUserTie } from "react-icons/fa"; 
import { FaChild } from "react-icons/fa6";

export const services = [
  {
    title: "Men's Haircut",
    description:
      "Classic or modern haircut tailored to your style, includes wash and finish.",
    price: "$30",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=150&h=150",
    icon: FaCut,
  },
  {
    title: "Beard Trim & Shape",
    description:
      "Expert beard grooming, shaping, and edging for a clean, defined look.",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=50&h=50",
    icon: FaPlus,
  },
  {
    title: "Hot Towel Shave",
    description:
      "Traditional hot towel shave experience with straight razor, soothing and smooth.",
    price: "$35",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=50&h=50",
    icon: FaHandsHelping,
  },
  {
    title: "Father & Son Cut",
    description:
      "Bonding experience: haircut for father and son, special pricing.",
    price: "$50",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=50&h=50",
    icon: FaUserTie,
  },
  {
    title: "Buzz Cut",
    description:
      "Clean and precise buzz cut, perfect for a low-maintenance style.",
    price: "$25",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=150&h=150",
    icon: FaPlus,
  },
  {
    title: "Kids Haircut",
    description: "Stylish and comfortable haircuts for the younger gentlemen.",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=150&h=150",
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
