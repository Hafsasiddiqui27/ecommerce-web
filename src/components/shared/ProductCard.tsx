
import Image, { StaticImageData } from 'next/image'; 
import Link from 'next/link';

  export type Product = {
    title: string;
    image: string| StaticImageData;
    price: number;
    originalPrice?:number;
    discount?: number;
    rating: number;
  };



const ProductCard = ({ title, image, price, discount,rating, originalPrice }:{title: string;
     image: string | StaticImageData;
        price: number;
        originalPrice?:number;
     discount?: number;
        rating: number}) => {
  
    return (
      
      <div className=" rounded-lg items-center hover:shadow-lg transform transition-all duration-300 hover:translate-y-1">
        <Image
          className=" mt-10 rounded-lg"
          src={image} // Handles both string URLs and components
          alt={title}
          width={295} // Set width (required for optimization)
          height={298} // Set height (required for optimization)
        />
      

        <div className="p-4 ">
        <h2 className="font-bold mt- mb-2 text-lg">{title}</h2>
          
          <div className="flex mb-2">
            {/* Rating Stars */}
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
  
         
          <span className="font-bold mt-3 text-3xl">${price}</span><span className="font-bold mt-3 text-3xl text-gray-400 line-through mx-4">{originalPrice}</span>
              <span className="text-red-500 bg-slate-200 rounded-full text-xl">{discount}</span>
  
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
  
  