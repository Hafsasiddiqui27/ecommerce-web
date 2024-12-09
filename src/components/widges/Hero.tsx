import React from 'react'
import HeroPoster from '@/assets/images/hero-poster.png'
import Svector from '@/assets/images/vectoro.png'
import Lvector from '@/assets/images/vector.png'
import Image from 'next/image'


const Hero = () => {
  return (
    <div>
  
     <section className=' py-5  h-screen bg-[#F2F0F1]  '>
    
      <div className='max-w-screen-xl mx-auto px-4 gap-7 flex flex-col md:flex-row items-center mt-16'>

        <div className='flex-1 max-w-xl'>
          <h1 className='text-4xl md:text-6xl  font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          
          <p className='text-gray-600 mt-7 ' >Browse through our diverse range of mericulously crafted garments designd to bring out your individually and cater to your sense of style.</p>
        <button className=' mt-8 py-4 bg-black text-white rounded-full w-52 hover:scale-110 hover:bg-black'>Shop Now </button>

     <div className='flex ju items-center mt-12 gap-x-10'>
  <div>
  <h2 className='font-semibold text-5xl'>200+</h2>
  <p className='text-gray-500 mt-2'>International Brands</p>
  </div>

  <div >
    <h2 className='font-semibold text-5xl'>2,000+</h2>
    <p className='text-gray-500 mt-2'>High-Quality Products</p>
  </div>

  <div>
    <h2 className='font-semibold text-5xl'>30,000+</h2>
    <p className='text-gray-500 mt-2'>Happy Customers</p>
  </div>

  </div>     
</div>


{/* *******************Right side********************* */}
<div className='flex-1 hidden md:block'>
<Image className=" flex justify-center items-center absolute md:h-[560px] w-[600px] -mt-56 object-fill md:mx-20 " width={390}  src={HeroPoster} alt='Hero poster' />
<Image className='relative -mt-28 left-[550px] hidden md:block' width={104} height={104} src={Svector} alt='star'/>
<Image className='relative -mt-6 mx-20 hidden md:block' width={56} height={60} src={Lvector} alt='star'/>
</div>
</div>
<div>
<Image className="md:hidden flex justify-center items-center absolute h-[550px] w-[600px]  object-fill" width={390}  src={HeroPoster} alt='Hero poster' />
</div>


   </section>
   
   </div>
    
  )
}

export default Hero
