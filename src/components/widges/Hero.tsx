import React from 'react'
import HeroPoster from '@/assets/images/hero-poster.png'
import Svector from '@/assets/images/vectoro.png'
import Lvector from '@/assets/images/vector.png'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className=' w-full h-full md:h-[500px] gap-x-28 flex flex-col md:flex-row justify-between items-center bg-[#F2F0F1]'>
    

        <div className=' mt-3 pt-8 md:w-[500px] md:mt-10 ml-10 pl-3 flex-1'>
          <h1 className='text-4xl md:text-6xl  font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          
          <p className='text-gray-600 md:mt-7 ' >Browse through our diverse range of mericulously crafted garments designd to bring out your individually and cater to your sense of style.</p>
        <button className=' mt-8 py-4 bg-black text-white rounded-full w-52 hover:scale-110 hover:bg-black'>Shop Now </button>
</div>
    


{/* *******************Right side********************* */}
<div className='relative flex-1 mx-10 mt-8'>
<Image className="w-[420px] h-[470px] mr-4" width={280} height={180}  src={HeroPoster} alt='Hero poster' />
<Image className="w-[50px] md:w-[60px] absolute top-[200px] -left-10 md:top-[250px]" width={56} height={56} src={Svector} alt='star' />
<Image className='w-[60px] md:w-[100px] absolute top-10 right-[25px] md:top-[100px] xl:right-10 md:-right-12' width={104} height={104} src={Lvector} alt='star'/>
</div>




   </section>
   
    
  )
}

export default Hero
