import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, MapPinIcon, TicketIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={event.image || "/food promotion.jpg"} alt={event.title} layout="fill" objectFit="cover" />
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {event.title}
          <Badge variant="secondary">${event.price}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <TicketIcon className="w-4 h-4 mr-2" />
            <span>{event.availableSlots} slots available</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default EventCard

