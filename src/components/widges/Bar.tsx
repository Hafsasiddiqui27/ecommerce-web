import Image from "next/image"
import Versace from "@/assets/images/versace.png"
import Calvin from "@/assets/images/calvin.png"
import Prada from "@/assets/images/prada.png"
import Zara from "@/assets/images/zara.png"
import Gucci from "@/assets/images/gucci.png"


const Bar = () => {
  return (
    <div>
      <div className='bg-black my-96 md:my-0 '>
   <div className= 'flex gap-28 self-start max-w-screen-xl mx-auto px-4 py-6'>
    <Image src={Versace} alt='versace' width={166} height={33}></Image>
    <Image src={Zara} alt='zara' width={91} height={38}></Image>
    <Image src={Gucci} alt='gucci' width={156} height={33}></Image>
    <Image src={Prada} alt='prda' width={195} height={32}></Image>
    <Image src={Calvin} alt='calvin' width={206} height={33}></Image>

   </div>
   </div>
    </div>
  )
}

export default Bar
