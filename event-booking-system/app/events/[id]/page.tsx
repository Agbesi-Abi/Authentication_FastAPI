"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

type Event = {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  availableSlots: number;
  price: number;
};

const [event, setEvent] = useState<Event | null>(null)

export default function EventDetail() {
  const { id } = useParams()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch event details")
        }
        const data = await response.json()
        setEvent(data)
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

    fetchEvent()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-96 w-full mb-4" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Not Found</AlertTitle>
          <AlertDescription>Event not found</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-96">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} layout="fill" objectFit="cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>{event.availableSlots} slots available</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-2xl font-bold">${event.price}</span>
          <Button size="lg">Book Now</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

