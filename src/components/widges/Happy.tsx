import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { CircleCheck } from 'lucide-react';
  

const Happy = () => {
  return (
    <div>
        <div>
          <h2 className=" text-4xl font-extrabold px-8 py-8">OUR HAPPY CUSTOMERS</h2>

         
<Carousel>
  <CarouselContent>
  <CarouselNext />
    <CarouselItem>
    <div className="flex gap-6">

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   Sarah M. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
 </CardFooter>
</Card>

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   Alex K. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">""Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
 </CardFooter>
</Card>

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   James L. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
 </CardFooter>
</Card>

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   Sarah M. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
 </CardFooter>
</Card>

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   Satoshi S. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">""As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
 </CardFooter>
</Card>

<Card>
 <CardHeader>
   <CardTitle>⭐⭐⭐⭐⭐</CardTitle>
 </CardHeader>
 <CardContent>
   <div className="text-extrabold text-lg flex">
   Sarah M. <CircleCheck className="bg-[#01AB31] rounded-full" strokeWidth={1.5} /></div>
 </CardContent>
 <CardFooter>
   <p className="text-sm">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
 </CardFooter>
</Card>

</div></CarouselItem>
    {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  
</Carousel>





          </div>

      
    </div>
  )
}

export default Happy
