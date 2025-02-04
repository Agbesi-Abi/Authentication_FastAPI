import { NextResponse } from "next/server"

// Import the events array from the main events route file
import { events } from "../route"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = Number.parseInt(params.id)
  const event = events.find((e) => e.id === id)

  if (event) {
    return NextResponse.json(event)
  } else {
    return NextResponse.json({ error: "Event not found" }, { status: 404 })
  }
}

