import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Button } from '../ui/button';
import Payment from "@/assets/images/payment.png"
import Image from 'next/image';





const Footer = () => {
  return (
   
   
    <footer className="mt-6 overflow-x-hidden">
    {/* Top Section */}
    <div className="w-full gap-x-20 grid grid-cols-1 md:grid-cols-2 py-9 px-6 md:py-4 md:px-16 mx-auto bg-black rounded-[20px] overflow-hidden">
      <div>
        <h2 className="text-white text-2xl md:text-4xl font-bold px-8 py-11 text-center md:text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex flex-col w-full max-w-[349px] mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="p-3 rounded-full w-96 bg-gray-100 mb-4 text-sm outline-none"
          />
          <Button className="text-black hover:bg-slate-100 bg-gray-100 h-11 p-3 rounded-full font-semibold w-96 text-center">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  
    {/* Main Section with Links */}
    <section className="bg-[#F0F0F0] border-b-2 px-6 py-6 lg:px-16">
      <div className="flex flex-wrap gap-6 lg:flex-nowrap">
        {/* Shop.Co Info */}
        <div className="flex-1 mr-32 mb-6 lg:mb-0">
          <h2 className="font-extrabold text-3xl lg:text-4xl mb-4">Shop.Co</h2>
          <p className="text-sm mb-6 text-black/60">
            We have clothes that suit your style and which you are proud to wear. From women to men.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Twitter size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Facebook size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Instagram size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Github size={28} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
  {/* Links Sections */}
{[
  { title: "COMPANY", items: ["About", "Features", "Work", "Career"] },
  { title: "HELP", items: ["Support", "Details", "Terms", "Privacy"] },
  { title: "FAQ", items: ["Account", "Deliveries", "Order", "Payments"] },
  { title: "SERVICES", items: ["eBooks", "Tutorials", "Blog", "Playlist"] },
].map(({ title, items }, index) => (
  <div key={index} className="flex-1 mb-6">
    <h2 className="text-lg lg:text-3xl mb-4">{title}</h2>
    <ul className="text-[16px] text-black/60 leading-normal md:leading-loose">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
))}

      </div>
    </section>
  
    {/* Footer Bottom Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#F0F0F0] px-6 py-4 text-sm text-black/60">
      <p className="mb-4 sm:mb-0">Shop.Co © 2000-2023, All Rights Reserved</p>
      <div className="w-full sm:w-auto">
        <Image src={Payment} alt="Payment Methods" width={280} className="mx-auto sm:mx-0" />
      </div>
    </div>
  </footer>
  
  
  )
}

export default Footer
