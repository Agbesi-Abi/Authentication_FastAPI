"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
  }

  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // For demonstration, we're using the same API as the home page
        // In a real app, you'd have a separate endpoint for user's events
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        setEvents(data)
        setLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return <div className="text-center">Loading dashboard...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="mr-2">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Button>Create New Event</Button>
    </div>
  )
}

