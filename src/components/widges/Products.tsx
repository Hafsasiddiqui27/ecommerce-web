import React from "react";
import Image from "next/image";
import Formal from "@/assets/style/formal.png"
import Casual from "@/assets/style/casual.png"
import Gym from "@/assets/style/gym.png"
import Party from "@/assets/style/party.png"



const Products = () => {
  return (
  <section className="max-w-screen-xl mx-auto px-8 p-12 mt-8">
    
      

       
        <div className="bg-[#F2F0F1] h-[866px] border rounded-3xl mt-4">
            <h2 className="font-extrabold text-4xl text-center p-12">BROWSE BY DRESS STYLE
            </h2>
            <div className="flex space-x-5 space-y-5 justify-center items-center">
              <Image src={Casual} className="object-fill h-72" alt="casual" width={289} />
              <Image src={Formal} className="object-fill h-72"  alt="formal" width={684} /></div>
              <div className="flex space-x-3 space-y-3 mt-5 justify-center items-center">

              <Image src={Party} className="object-fill h-72 w-[684px]"  alt="party" width={784} />
              <Image src={Gym} className="object-fill h-72  w-[289px]"  alt="gym" width={250}  />
            </div>

           </div>
 
     
      </section>
    
  );
};
export default Products;
