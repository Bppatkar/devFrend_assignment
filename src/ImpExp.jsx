import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  User,
  Star,
  Scissors,
  CheckCircle,
  Loader2,
  Mail,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { cn } from "./lib/utils.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Classic Haircut",
    description: "Traditional haircut with clippers and scissors.",
    price: "$25",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Beard Trim",
    description: "Shaping and trimming for a well-groomed beard.",
    price: "$15",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Hot Towel Shave",
    description: "Relaxing shave with hot towels and straight razor.",
    price: "$30",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Hair Coloring",
    description: "Professional hair coloring services.",
    price: "$50+",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Kids Haircut",
    description: "Specialized haircuts for children.",
    price: "$20",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
];

const barbers = [
  {
    name: "John Smith",
    title: "Master Barber",
    description: "Expert in classic cuts and modern styles.",
    image: "https://source.unsplash.com/random/150x150/?barber,1", // Replace with actual image URLs
  },
  {
    name: "Jane Doe",
    title: "Senior Stylist",
    description: "Specializes in women's cuts and coloring.",
    image: "https://source.unsplash.com/random/150x150/?barber,2", // Replace
  },
  {
    name: "Mike Johnson",
    title: "Beard Specialist",
    description: "Passionate about beard grooming and styling.",
    image: "https://source.unsplash.com/random/150x150/?barber,3", // Replace
  },
];

const reviews = [
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Best barber shop in town! Great service and atmosphere.",
    avatar: "https://source.unsplash.com/random/50x50/?person,1", // Replace
  },
  {
    name: "Sarah Williams",
    rating: 4,
    comment: "Good experience, but a bit pricey.",
    avatar: "https://source.unsplash.com/random/50x50/?person,2", // Replace
  },
  {
    name: "David Lee",
    rating: 5,
    comment: "Excellent service and attention to detail.",
    avatar: "https://source.unsplash.com/random/50x50/?person,3", // Replace
  },
];

const faqData = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website or by calling us at +1 940-808-1569.",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "A typical haircut takes about 30-45 minutes, but it may vary depending on the style.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and debit cards.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes, we offer a loyalty program for our regular customers. Ask our staff for details.",
  },
  {
    question: "What hair products do you use?",
    answer:
      "We use a variety of high-quality hair products.  Ask your barber for recommendations.",
  },
];

const galleryImages = [
  "https://source.unsplash.com/random/400x300/?haircut,1", // Replace
  "https://source.unsplash.com/random/400x300/?barbershop,2", // Replace
  "https://source.unsplash.com/random/400x300/?haircut,3", // Replace
  "https://source.unsplash.com/random/400x300/?barbershop,4", // Replace
  "https://source.unsplash.com/random/400x300/?haircut,5", // Replace
  "https://source.unsplash.com/random/400x300/?barbershop,6", // Replace
];

const footerLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Gallery", href: "#gallery" },
  { text: "Contact", href: "#contact" },
];

export {
  motion,
  AnimatePresence,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  User,
  Star,
  Scissors,
  CheckCircle,
  Loader2,
  Mail,
  Calendar,
  ChevronDown,
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  cn,
  gsap,
  ScrollTrigger,
  services,
  barbers,
  reviews,
  faqData,
  galleryImages,
  footerLinks,
};

export { RiFacebookFill, RiInstagramFill, RiTwitterFill };