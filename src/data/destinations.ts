import paris from "@/assets/paris.jpg";
import tokyo from "@/assets/tokyo.jpg";
import bali from "@/assets/bali.jpg";
import newyork from "@/assets/newyork.jpg";
import dubai from "@/assets/dubai.jpg";
import machupicchu from "@/assets/machupicchu.jpg";
import iceland from "@/assets/iceland.jpg";
import maldives from "@/assets/maldives.jpg";

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
