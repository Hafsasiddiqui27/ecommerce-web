import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';




const Header = () => {
  return (
    <header>
       {/* top header */}
    <div className='flex bg-black text-white text-xs sm:text-sm'>
    <div className=' p-2 font-primary  w-full text-center h-10 drop-shadow-xl'>
       Sign up and get 20% off to your first order.
       <button className="underline font-semibold mx-2 ">Sign Up Now</button>
    </div>
    <Button className='mr-8 text-[16px]'>x</Button>
    </div>

 {/* header */}
 <div className='max-w-screen-xl mx-auto px-4 p-5'>

 <div className="flex justify-between items-center">
 
   {/* logo */}
      <div className="text-black text-4xl font-heading font-extrabold drop-shadow-xl">
       <h2> SHOP.CO</h2>
      </div>


      {/* nav bar */}
      <nav className="hidden md:block">
      <ul className="flex items-center gap-x-7 ml-12 font-primary text-[16px]">
        <li className="flex gap-x-1 hover:font-semibold">Shop<ChevronDown size={16} className='mt-1' /></li>
       <li className="hover:font-semibold"><Link href='/onsale'>On Sale</Link></li>
        <li className="hover:font-semibold"><Link href='/newarrival'>New Arrivals</Link></li>
        <li className="hover:font-semibold"><Link href='/brands'>Brands</Link></li>
        </ul>
        </nav>
        {/* search bar */}
            <ul className="flex items-center gap-6 font-primary text-[16px]" >
              <div className='hidden lg:block'>
        <li  className=" flex px-3 py-3 rounded-full bg-gray-50 overflow-hidden w-[500px] ">
             <span className="mr-3 text-2xl text-gray-400"><Search /></span> 
             <input type="search" placeholder="Search for products..." className="w-full outline-none bg-gray-50 text-gray-600 text-sm " />
        </li>
        </div>
        
        <li className="text-extrabold text-2xl md:hidden">
       <Search />
        </li>

        <li className="text-extrabold text-2xl">
       <ShoppingCart />
        </li>
        <li className="text-extrabold text-2xl">
      <CircleUserRound />
        </li>
      </ul>


      <Sheet>
  <SheetTrigger className='md:hidden  bg-black text-white'><Menu /></SheetTrigger>
  <SheetContent className='bg-slate-200 w-fit'>
    <SheetHeader>
      <SheetTitle> <h2> SHOP.CO</h2></SheetTitle>
    </SheetHeader>
    
    <ul className="flex flex-col items-center gap-y-8 font-primary text-[16px] bg-black">
        <li className="flex gap-x-1 hover:font-semibold">Shop<ChevronDown size={16} className='mt-1' /></li>
       <li className="hover:font-semibold"><Link href='/onsale'>On Sale</Link></li>
        <li className="hover:font-semibold"><Link href='/newarrival'>New Arrivals</Link></li>
        <li className="hover:font-semibold"><Link href='/brands'>Brands</Link></li>
        </ul>

  </SheetContent>
</Sheet>
      </div>
      </div>
      </header>


  )
}

export default Header
 