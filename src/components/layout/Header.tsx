
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { SheetSide } from '@/components/layout/sheet';





const Header = () => {
  return (
    <header className="overflow-x-hidden">
    {/* Top Header */}
    
      <div className="p-2  bg-black text-white text-xs sm:text-sm font-primary w-full text-center h-10 drop-shadow-xl">
        Sign up and get 20% off your first order.
        <button className="underline font-semibold mx-2">Sign Up Now</button>
      </div>
    
  
    {/* Main Header */}
    <div className="max-w-screen-xl mx-auto px-4 py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-3xl sm:text-4xl font-heading font-extrabold flex items-center gap-3 drop-shadow-xl">
          <div className="md:hidden">
            <SheetSide />
          </div>
          <h2>SHOP.CO</h2>
        </div>
  
        {/* Navigation Bar */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-5 lg:gap-x-7 ml-4 font-primary text-sm lg:text-[16px]">
            <li className="flex gap-x-1 hover:font-semibold">
              Shop
              <ChevronDown size={16} className="mt-1" />
            </li>
            <li className="hover:font-semibold">
              <Link href="/onsale">On Sale</Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/newarrival">New Arrivals</Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </nav>
  
        {/* Search Bar and Icons */}
        <ul className="flex items-center gap-4 sm:gap-6 font-primary text-sm lg:text-[16px]">
          {/* Search Bar */}
          <div className="hidden lg:block">
            <li className="flex px-3 py-2 rounded-full bg-gray-50 overflow-hidden w-full max-w-[500px]">
              <span className="mr-3 text-lg text-gray-400">
                <Search />
              </span>
              <input
                type="search"
                placeholder="Search for products..."
                className="w-96 outline-none bg-gray-50 text-gray-600 text-sm"
              />
            </li>
          </div>
  
          {/* Mobile Search Icon */}
          <li className="text-2xl md:hidden">
            <Search />
          </li>
  
          {/* Shopping Cart Icon */}
          <li className="text-2xl">
            <ShoppingCart />
          </li>
  
          {/* User Profile Icon */}
          <li className="text-2xl">
            <CircleUserRound />
          </li>
        </ul>
      </div>
    </div>
  </header>
  



  )
}

export default Header
 