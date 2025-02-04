import EventList from "../components/EventList"
import SearchFilters from "../components/SearchFilters"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-yellow-950 via-gray-900 to-indigo-600 text-white py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Events</h1>
          <p className="text-xl mb-8">Find and book the best events in your area</p>
          <Button size="lg" asChild>
            <a href="#events">Explore Events</a>
          </Button>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <SearchFilters />
        <h2 className="text-2xl font-bold mb-6" id="events">
          Upcoming Events
        </h2>
        <EventList />
      </div>
    </div>
  )
}

