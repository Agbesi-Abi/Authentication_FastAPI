const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">EventBooker</h3>
            <p className="text-sm">Book and manage events easily.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 EventBooker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

