"use client"
import { Menu } from 'lucide-react';
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet  key={side}>
          <SheetTrigger asChild  > 
                 <Menu className="text-black" />
               
          </SheetTrigger>
          <SheetContent className="bg-white w-auto" side={side}>
            <SheetHeader>
              <SheetTitle>SHOP CO.</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col justify-center gap-y-2 font-primary text-[16px]">
        <li className="flex mt-4 hover:font-semibold">Shop</li>
       <li className="hover:font-semibold"><Link href='/onsale'>On Sale</Link></li>
        <li className="hover:font-semibold"><Link href='/newarrival'>New Arrivals</Link></li>
        <li className="hover:font-semibold"><Link href='/brands'>Brands</Link></li>
        </ul>
            
            <SheetFooter>
              <SheetClose asChild>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
