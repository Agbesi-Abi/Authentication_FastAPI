import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            AbiEvent
          </Link>
          <div className="space-x-4">
            <Link href="#events" className="text-gray-600 hover:text-gray-800">
              Events
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
              Dashboard
            </Link>
            <Button asChild variant="outline" className="mr-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

