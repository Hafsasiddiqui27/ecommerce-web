import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Button } from '../ui/button';
import Payment from "@/assets/images/payment.png"
import Image from 'next/image';





const Footer = () => {
  return (
    <footer className='mt-10'>
    <div className="flex bg-black p-2 ">
        <div>
          <h2 className=" text-white text-4xl font-xbold px-8 py-11">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          </div>

       <div className="mt-7">
        <input type="text" placeholder="Enter your Email Address" className="p-2 rounded-full w-96" />
         <p className="text-black bg-gray-100 p-2 rounded-full mt-4 font-semibold text-center">Subscribe to Newsletter</p> 
        </div>
 </div>
 <section className= 'flex p-3 bg-[#F0F0F0] border-b-2'>
  <div className='flex-1 mr-24 max-w-screen-xl mx-auto px-4'>
    <h2 className='font-extrabold text-3xl lg:text-4xl mb-6'>Shop.Co</h2>
    <p className='text-sm mb-9  text-black/60'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
  <div className='flex items-center gap-3'>
  <Button variant="outline" size="icon" className='rounded-full hover:bg-black  hover:text-white'><Twitter size={28} strokeWidth={1.5}  /></Button>
  <Button variant="outline" size="icon" className='rounded-full hover:bg-black hover:text-white'><Facebook size={28} strokeWidth={1.5}  /></Button>
  <Button variant="outline" size="icon" className='rounded-full hover:bg-black  hover:text-white' ><Instagram size={28} strokeWidth={1.5}  /></Button>
  <Button variant="outline" size="icon" className='rounded-full hover:bg-black  hover:text-white'><Github size={28} strokeWidth={1.5}  /></Button>
  </div>
  </div>
  

  <div className='flex-1'>
    <h2 className='text-lg lg:text-3xl mb-6'>COMPANY</h2>
    <ul className='text-[16px] text-black/60  leading-normal md:leading-loose'>
      <li>About</li>
      <li>Features</li>
      <li>Work</li>
      <li>Career</li>
    </ul>
  </div>

  <div className='flex-1'>
    <h2 className='text-lg lg:text-3xl mb-6'>HELP</h2>
    <ul className='text-[16px] text-black/60  leading-normal md:leading-loose'>
      <li> Support</li>
      <li> Details</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
 
 
 
  <div className='flex-1' >
    <h2 className=' text-lg lg:text-3xl mb-6'>FAQ</h2>
    <ul className='text-[16px] text-black/60  leading-normal md:leading-loose'>
      <li>Account</li>
      <li>Manage Deliveries</li>
      <li>Order</li>
      <li>Payments</li>
    </ul>
  </div>

  <div>
    <h2 className=' text-lg lg:text-3xl mb-6'>SERVICES</h2>
    <ul className='text-[16px] text-black/60  leading-normal md:leading-loose'>
      <li>Free eBooks</li>
      <li>Development Tutorials</li>
      <li>How to- Blog</li>
      <li>Youtube Playlist</li>
    </ul>
  </div>

 
</section>
<div className='text-sm  text-black/60 flex justify-between items-center bg-[#F0F0F0]'>
<p>Shop.co © 2000-2023, All Rights Reserved</p>
<Image src={Payment} alt='payment methods' width={280}/>
</div>
    </footer>
  )
}

export default Footer
