'use client'
import { Product } from "@/components/shared/ProductCard";
import ProductList, { products1, products2 } from "@/components/shared/ProductList";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from 'react'
import shirt from "@/assets/productdetail/shirt.png"
import shirt4 from "@/assets/productdetail/shirt4.png"
import shirt2 from "@/assets/productdetail/shirt2.png"
import shirt3 from "@/assets/productdetail/shirt3.png"
import { Check, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const params= useParams();
  const id= params.id;
  const items= products1.find((item:Product)=> item.id === id) || products2.find((item:Product)=> item.id === id);
  if(!items){
    return <h1>Product not found</h1>
  }

  return (
  <div>
    <div className="flex flex-col md:flex-row mt-10 ">
       
          {/* Additional thumbnails */}
          <div className="flex md:flex-col md:space-y-3 space-x-3 mt-4 order-2 md:order-1 mx-3 w-44">
            <Image
              src={shirt2}
              alt="Thumbnail"
              width={130} height={106}
              className="  object-cover  border rounded-2xl cursor-pointer  hover:border-black  w-28 h-28 md:h-44"
            />
            <Image
              src={shirt3}
              alt="Thumbnail"
              width={130} height={106}
              className=" object-cover  border rounded-2xl cursor-pointer  hover:border-black  w-28 h-28 md:h-44"
            />
            <Image
              src={shirt4}
              alt="Thumbnail"
              width={130} height={106}
              className=" object-cover  border rounded-2xl cursor-pointer  hover:border-black w-28 h-28 md:h-44"
            />
          </div>

           {/* Image Gallery */}
        <div className="  rounded-lg p-4 order-1 md:order-2">
          <Image
            src={shirt}
            alt="Product Name"
            className=" border rounded-2xl cursor-pointer  hover:border-black md:w-[444px] md:h-[550px] object-cover"
            width={370} height={290}
          />
           </div>
         
          
       

        {/* Product Details */}
        <div className="p-6 max-w-screen-sm order-3">
          <h1 className="text-4xl font-bold">{items.title}</h1>
          <div className="ml-4 text-yellow-500">{items.rating}</div>
    
        
          <span className="font-bold mt-3 text-3xl">${items.originalPrice}</span><span className="font-bold mt-3 text-3xl text-gray-400 line-through mx-4">${items.price}</span>
          <span className="text-red-500 p-2 w-16 bg-red-200 rounded-2xl items-center">{items.discount}</span>
     
          <p className="mt-4  text-black/60 border-b pb-4">
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          {/* color */}
          <div className="mt-6">
            <p className="text-[16px]  text-black/60">Select Colors</p>
            <div className="flex space-x-4 mt-4 border-b pb-4">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="sr-only">Red</span>
                <span className="w-9 h-9  bg-red-500 rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-70"/></span>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="sr-only">Blue</span>
                <span className="w-9 h-9 bg-blue-500 rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-70"/></span>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="sr-only">Green</span>
                <span className="w-9 h-9 bg-green-500 rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-70"/></span>
              </button>
              </div>

          </div>

          {/* sizes */}
          <div className="mt-6 space-y-4  ">
            <p>Choose Size</p>
            <div className="flex space-x-4 border-b pb-4">
              <button className="p-3 w-24 rounded-full bg-[#F0F0F0]  hover:bg-black hover:text-white border border-gray-200 flex items-center justify-center">
                Small
              </button>
              <button className="p-3 w-24 rounded-full  bg-[#F0F0F0]  hover:bg-black hover:text-white border border-gray-200 flex items-center justify-center">
                Medium
              </button>
              <button className="p-3 w-24 rounded-full  bg-[#F0F0F0]  hover:bg-black hover:text-white  border border-gray-200 flex items-center justify-center">
                Large
              </button>
              <button className="p-3 w-24 rounded-full  bg-[#F0F0F0]  hover:bg-black hover:text-white border border-gray-200 flex items-center justify-center">
                X-Large
              </button>
              </div>
            </div>

            <div className="flex gap-x-7 mt-8"> 
            <button className="p-4 rounded-full flex justify-between  bg-[#F0F0F0] h-14 w-44 border"> <Minus/>1<Plus />
           </button>
            <button className=" bg-[#F0F0F0] h-14 w-[400px] px-4 py-2 shadow rounded-full hover:bg-black hover:text-white">
              Add to Cart
            </button>
            </div>
          </div>

          </div>

        
           
           
          
      
    

      Related Products
      <section className="container mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="/path-to-image.jpg"
              alt="Related Product"
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 text-gray-700 font-semibold">Product Name</h3>
            <p className="text-green-600">$29.99</p>
          </div>
          {/* Add more related products */}
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;


