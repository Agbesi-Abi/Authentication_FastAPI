'use client'
import { useState, useEffect } from "react"
import EventCard from "./EventCard"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const EventList = () => {
  interface Event {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
    date: string;
    location: string;
    availableSlots: number;
  }

  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        const eventsWithSlots = data.map((event: Event) => ({
          ...event,
          availableSlots: event.availableSlots ?? 0 // Default to 0 if not provided
        }))
        setEvents(eventsWithSlots)
        setEvents(data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="h-[400px] w-full" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList

