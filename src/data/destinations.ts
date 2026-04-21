import paris from "@/assets/paris.jpg";
import tokyo from "@/assets/tokyo.jpg";
import bali from "@/assets/bali.jpg";
import newyork from "@/assets/newyork.jpg";
import dubai from "@/assets/dubai.jpg";
import machupicchu from "@/assets/machupicchu.jpg";
import iceland from "@/assets/iceland.jpg";
import maldives from "@/assets/maldives.jpg";
import agra from "@/assets/agra.jpg";
import jaipur from "@/assets/jaipur.jpg";
import varanasi from "@/assets/varanasi.jpg";
import kerala from "@/assets/kerala.jpg";
import goa from "@/assets/goa.jpg";
import ladakh from "@/assets/ladakh.jpg";
import mumbai from "@/assets/mumbai.jpg";
import udaipur from "@/assets/udaipur.jpg";
import delhi from "@/assets/delhi.jpg";
import rishikesh from "@/assets/rishikesh.jpg";

export type Destination = {
  id: string;
  city: string;
  country: string;
  image: string;
  tagline: string;
  description: string;
  rating: number;
  bestTime: string;
  highlights: string[];
  costs: {
    flight: number; // avg round-trip USD from major hub
    hotelPerNight: number;
    foodPerDay: number;
    activitiesPerDay: number;
    transportPerDay: number;
  };
};

export const destinations: Destination[] = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    image: paris,
    tagline: "The City of Light",
    description: "Romance, art, and timeless elegance along the Seine.",
    rating: 4.8,
    bestTime: "Apr – Jun",
    highlights: ["Eiffel Tower", "Louvre Museum", "Montmartre", "Notre-Dame"],
    costs: { flight: 750, hotelPerNight: 180, foodPerDay: 70, activitiesPerDay: 50, transportPerDay: 15 },
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    image: tokyo,
    tagline: "Where Tradition Meets Tomorrow",
    description: "Neon-lit streets, ancient temples, unforgettable cuisine.",
    rating: 4.9,
    bestTime: "Mar – May",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mt. Fuji", "Akihabara"],
    costs: { flight: 1100, hotelPerNight: 160, foodPerDay: 55, activitiesPerDay: 45, transportPerDay: 20 },
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    image: bali,
    tagline: "Island of the Gods",
    description: "Tropical paradise of rice terraces, beaches, and temples.",
    rating: 4.7,
    bestTime: "Apr – Oct",
    highlights: ["Ubud Rice Terraces", "Tanah Lot", "Uluwatu", "Nusa Penida"],
    costs: { flight: 950, hotelPerNight: 60, foodPerDay: 25, activitiesPerDay: 30, transportPerDay: 10 },
  },
  {
    id: "newyork",
    city: "New York",
    country: "USA",
    image: newyork,
    tagline: "The City That Never Sleeps",
    description: "Iconic skyline, Broadway lights, and endless energy.",
    rating: 4.7,
    bestTime: "Sep – Nov",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Brooklyn Bridge"],
    costs: { flight: 600, hotelPerNight: 250, foodPerDay: 80, activitiesPerDay: 60, transportPerDay: 18 },
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    image: dubai,
    tagline: "Jewel of the Desert",
    description: "Futuristic skyline, luxury, and golden desert dunes.",
    rating: 4.6,
    bestTime: "Nov – Mar",
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari", "Dubai Mall"],
    costs: { flight: 850, hotelPerNight: 200, foodPerDay: 60, activitiesPerDay: 70, transportPerDay: 20 },
  },
  {
    id: "machupicchu",
    city: "Cusco",
    country: "Peru",
    image: machupicchu,
    tagline: "Lost City of the Incas",
    description: "Mystical ruins high above the clouds in the Andes.",
    rating: 4.9,
    bestTime: "May – Sep",
    highlights: ["Machu Picchu", "Sacred Valley", "Rainbow Mountain", "Cusco Old Town"],
    costs: { flight: 900, hotelPerNight: 90, foodPerDay: 35, activitiesPerDay: 80, transportPerDay: 15 },
  },
  {
    id: "iceland",
    city: "Reykjavik",
    country: "Iceland",
    image: iceland,
    tagline: "Land of Fire and Ice",
    description: "Northern lights, glaciers, and otherworldly landscapes.",
    rating: 4.8,
    bestTime: "Sep – Mar",
    highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle", "Glacier Hike"],
    costs: { flight: 700, hotelPerNight: 220, foodPerDay: 90, activitiesPerDay: 100, transportPerDay: 40 },
  },
  {
    id: "maldives",
    city: "Malé",
    country: "Maldives",
    image: maldives,
    tagline: "Heaven on Earth",
    description: "Overwater villas, turquoise lagoons, pure paradise.",
    rating: 4.9,
    bestTime: "Nov – Apr",
    highlights: ["Overwater Villas", "Snorkeling", "Sunset Cruise", "Vaadhoo Island"],
    costs: { flight: 1200, hotelPerNight: 500, foodPerDay: 100, activitiesPerDay: 80, transportPerDay: 25 },
  },
  {
    id: "agra",
    city: "Agra",
    country: "India",
    image: agra,
    tagline: "Home of the Taj Mahal",
    description: "Marvel at the eternal symbol of love and Mughal grandeur.",
    rating: 4.8,
    bestTime: "Oct – Mar",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    costs: { flight: 850, hotelPerNight: 70, foodPerDay: 20, activitiesPerDay: 25, transportPerDay: 10 },
  },
  {
    id: "jaipur",
    city: "Jaipur",
    country: "India",
    image: jaipur,
    tagline: "The Pink City",
    description: "Royal palaces, vibrant bazaars, and Rajputana heritage.",
    rating: 4.7,
    bestTime: "Oct – Mar",
    highlights: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    costs: { flight: 850, hotelPerNight: 65, foodPerDay: 20, activitiesPerDay: 25, transportPerDay: 10 },
  },
  {
    id: "varanasi",
    city: "Varanasi",
    country: "India",
    image: varanasi,
    tagline: "Spiritual Heart of India",
    description: "Ancient ghats, sacred Ganges, and timeless rituals.",
    rating: 4.7,
    bestTime: "Nov – Feb",
    highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath", "Sarnath", "Ganga Aarti"],
    costs: { flight: 880, hotelPerNight: 50, foodPerDay: 15, activitiesPerDay: 20, transportPerDay: 8 },
  },
  {
    id: "kerala",
    city: "Alleppey",
    country: "India",
    image: kerala,
    tagline: "God's Own Country",
    description: "Tranquil backwaters, houseboats, and palm-fringed lagoons.",
    rating: 4.8,
    bestTime: "Sep – Mar",
    highlights: ["Backwater Cruise", "Munnar Tea Hills", "Kovalam Beach", "Periyar Wildlife"],
    costs: { flight: 920, hotelPerNight: 110, foodPerDay: 25, activitiesPerDay: 35, transportPerDay: 15 },
  },
  {
    id: "goa",
    city: "Goa",
    country: "India",
    image: goa,
    tagline: "Pearl of the Orient",
    description: "Sun-soaked beaches, Portuguese charm, and vibrant nightlife.",
    rating: 4.6,
    bestTime: "Nov – Feb",
    highlights: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls", "Anjuna Market"],
    costs: { flight: 900, hotelPerNight: 80, foodPerDay: 25, activitiesPerDay: 30, transportPerDay: 12 },
  },
  {
    id: "ladakh",
    city: "Leh",
    country: "India",
    image: ladakh,
    tagline: "Land of High Passes",
    description: "Surreal Himalayan landscapes, monasteries, and turquoise lakes.",
    rating: 4.9,
    bestTime: "Jun – Sep",
    highlights: ["Pangong Lake", "Nubra Valley", "Thiksey Monastery", "Khardung La"],
    costs: { flight: 950, hotelPerNight: 75, foodPerDay: 22, activitiesPerDay: 50, transportPerDay: 25 },
  },
  {
    id: "mumbai",
    city: "Mumbai",
    country: "India",
    image: mumbai,
    tagline: "City of Dreams",
    description: "Bollywood glamour, colonial architecture, and ocean promenades.",
    rating: 4.5,
    bestTime: "Nov – Feb",
    highlights: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Colaba"],
    costs: { flight: 880, hotelPerNight: 130, foodPerDay: 30, activitiesPerDay: 30, transportPerDay: 12 },
  },
  {
    id: "udaipur",
    city: "Udaipur",
    country: "India",
    image: udaipur,
    tagline: "Venice of the East",
    description: "Romantic lake palaces and royal Rajasthani heritage.",
    rating: 4.8,
    bestTime: "Sep – Mar",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Sajjangarh Fort"],
    costs: { flight: 880, hotelPerNight: 90, foodPerDay: 22, activitiesPerDay: 30, transportPerDay: 10 },
  },
  {
    id: "delhi",
    city: "Delhi",
    country: "India",
    image: delhi,
    tagline: "Capital of Contrasts",
    description: "Mughal monuments, bustling bazaars, and modern marvels.",
    rating: 4.5,
    bestTime: "Oct – Mar",
    highlights: ["Red Fort", "India Gate", "Qutub Minar", "Humayun's Tomb"],
    costs: { flight: 850, hotelPerNight: 85, foodPerDay: 22, activitiesPerDay: 25, transportPerDay: 10 },
  },
  {
    id: "rishikesh",
    city: "Rishikesh",
    country: "India",
    image: rishikesh,
    tagline: "Yoga Capital of the World",
    description: "Sacred Ganges, Himalayan vibes, and adventure rafting.",
    rating: 4.7,
    bestTime: "Sep – Apr",
    highlights: ["Lakshman Jhula", "Triveni Ghat", "River Rafting", "Beatles Ashram"],
    costs: { flight: 870, hotelPerNight: 55, foodPerDay: 18, activitiesPerDay: 35, transportPerDay: 10 },
  },
];

export function calculateTripCost(d: Destination, days: number, travelers: number) {
  const perPersonDaily =
    d.costs.hotelPerNight / 2 + // assume sharing
    d.costs.foodPerDay +
    d.costs.activitiesPerDay +
    d.costs.transportPerDay;
  const perPerson = d.costs.flight + perPersonDaily * days;
  return Math.round(perPerson * travelers);
}
