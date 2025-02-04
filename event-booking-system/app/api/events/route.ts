import { NextResponse } from "next/server"

// Mock database
export const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    description: "A weekend of live music performances featuring top artists from around the world.",
    date: "2023-07-15",
    location: "Conference Center, Accra",
    price: 50,
    image: "/food_promotion.png",
    availableSlots: 1000,
  },
  {
    id: 2,
    title: "Tech Conference 2023",
    description: "Learn about the latest in technology from industry leaders.",
    date: "2023-08-10",
    location: "Convention Center, Osu",
    price: 200,
    image: "/food_promotion.png",
    availableSlots: 500,
  },
  {
    id: 3,
    title: "Food and Wine Expo",
    description: "Indulge in culinary delights from top chefs and sample wines from around the world.",
    date: "2023-09-05",
    location: "SB Incubator, Accra",
    price: 75,
    image: "/food_promotion.png",
    availableSlots: 750,
  },
  {
    id: 4,
    title: "International Film Festival",
    description: "Experience a showcase of independent films from emerging directors worldwide.",
    date: "2023-10-20",
    location: "Cinema Complex, Osu",
    price: 100,
    image: "/food_promotion.png",
    availableSlots: 300,
  },
  {
    id: 5,
    title: "Marathon for Charity",
    description: "Run for a cause in this annual charity marathon.",
    date: "2023-11-12",
    location: "City Center, Labone",
    price: 30,
    image: "/food_promotion.png",
    availableSlots: 2000,
  },
  {
    id: 6,
    title: "Marathon for Charity",
    description: "Run for a cause in this annual charity marathon.",
    date: "2023-11-12",
    location: "City Center, Kumasi",
    price: 30,
    image: "/food_promotion.png",
    availableSlots: 2000,
  },
]

export async function GET() {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(events)
}

