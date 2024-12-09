import Hero from "@/components/widges/Hero";
import Products from "@/components/widges/Products";
import Bar from "@/components/widges/Bar";
import Happy from "@/components/widges/Happy";
import ProductCard from "@/components/shared/ProductCard";
import ProductList from "@/components/shared/ProductList";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div>
    <Hero />
    <Bar />
    <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className=" text-extrabold text-4xl text-center ">
            NEW ARRIVALS</h2>
          <ProductList />
          <div className="text-center mt-8">
        <Button>View All</Button>
        </div>
        </div>
      </main>


    <Products />
    <Happy />





      
    </div>
  );
};


  