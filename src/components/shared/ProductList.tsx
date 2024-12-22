import React from 'react'
import ProductCard from '@/components/shared/ProductCard'
import First from "@/assets/products/first.png"
import Second from  "@/assets/products/second.png";
import Third from "@/assets/products/third.png";
import Forth from "@/assets/products/forth.png";
import one from "@/assets/products/one.png";
import two from "@/assets/products/two.png";
import Three from "@/assets/products/three.png";
import Four from "@/assets/products/four.png";
import Link from 'next/link';


export const products1 = [
  {
    id: 1,
    slug: 't-shirt-with-tape-details',
    title: 'T-shirt With Tape Details',
    image: First,  // Use static assets in /public
    price: 120,
    rating: 4,
  },
  {
    id: 2,
    slug: 'skinny-fit-jeans',
    title: 'Skinny Fit Jeans',
    image: Second,
    price: 240,
    rating: 3,
    discount: -20,
    originalPrice: 260,
  },
  {
    id: 3,
    slug: 'checkered-shirt',
    title: 'Checkered Shirt',
    image: Third,
    price: 180,
    rating: 4,
    discount:-10,
    originalPrice: 200,
  },
  {
    id: 4,
    slug: 'sleeve-striped-t-shirt',
    title: 'Sleeve Striped T-shirt',
    image: Forth,
    price: 130,
    rating: 5,
    discount: -30,
    originalPrice: 160,
  },
];

export const products2 = [
  {
    id: 5,
    slug: 'vertical-strip',
    title: 'Vertical Striped Shirt',
    image: one,  // Use static assets in /public
    price: 186,
    originalPrice:232,
    rating: 4,
    discount:-20,
  },
  {
    id: 6,
    slug: 'courage-graphic',
    title: 'Courage Graphic T-shirt',
    image: two,  // Use static assets in /public
    price: 145,
    rating: 4,
  },
  {
    id: 7,
    slug: 'loose-fit',
    title: 'Loose Fit Bermuda Short',
    image: Three,  // Use static assets in /public
    price: 80,
    rating: 3,
  },
  {
    id: 8,
    slug: 'faded-skiny',
    title: 'Faded Skinny Jeans',
    image: Four,  // Use static assets in /public
    price: 210,
    rating: 4,
  },
  ]
const ProductList = () => {
  return (
    <div>
     
     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center p-10">
  {products1.map((product) => (
    <Link href={`/products/${product.id}`} key={product.id}>
      <ProductCard
        title={product.title}
        image={product.image}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
        discount={product.discount}
      />
    </Link>
  ))}
</div>


    <h2 className=" text-extrabold text-4xl text-center  "> TOP SELLING
    </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 p-6" >

{products2.map((product) => (
  <Link href={`/products/${product.id}`} key={product.id}>
  <ProductCard
    key={product.id}
    title={product.title}
    image={product.image}
    price={product.price}
    originalPrice={product.originalPrice}
    rating={product.rating}
    discount={product.discount}
  />
  </Link>
))}
</div>
</div>
  );
};

export default ProductList;  