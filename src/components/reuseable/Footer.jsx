/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className=''>
      <footer className="bg-[#03045e] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ShopMate</h3>
            <p className="text-white">
              Your one-stop shop for the best products. Quality guaranteed!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="text-white space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Categories</h4>
            <ul className="text-white space-y-2">
              <li><a href="/electronics" className="hover:text-white">Electronics</a></li>
              <li><a href="/fashion" className="hover:text-white">Fashion</a></li>
              <li><a href="/home-appliances" className="hover:text-white">Home Appliances</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-white mb-3">Subscribe for the latest updates and offers.</p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 rounded-l bg-gray-700 text-white border-0 focus:outline-none focus:ring"
              />
              <button 
                type="submit" 
                className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-white">
          <p>&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer