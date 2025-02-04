'use client'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
    console.log({ searchTerm, category, location, dateRange, priceRange })
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="concert">Concert</SelectItem>
            <SelectItem value="conference">Conference</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accra">Accra</SelectItem>
            <SelectItem value="osu">Osu</SelectItem>
            <SelectItem value="Labone">Labone</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger>
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="next-month">Next Month</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50">$0 - $50</SelectItem>
            <SelectItem value="50-100">$50 - $100</SelectItem>
            <SelectItem value="100+">$100+</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

export default SearchFilters

