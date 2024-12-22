import Image from "next/image"
import Versace from "@/assets/images/versace.png"
import Calvin from "@/assets/images/calvin.png"
import Prada from "@/assets/images/prada.png"
import Zara from "@/assets/images/zara.png"
import Gucci from "@/assets/images/gucci.png"

 
const Bar = () => {
  return (
    <div>
      <div className='bg-black h-[122px] w-full  flex justify-center space-x-4 md:justify-between items-center px-6 flex-wrap'>
  
    <Image src={Versace} alt='versace' width={100} height={38}></Image>
    <Image src={Zara} alt='zara' width={70} height={33} className="h-[25px]"></Image>
    <Image src={Gucci} alt='gucci' width={100} height={33}></Image>
    <Image src={Prada} alt='prda' width={100} height={32}></Image>
    <Image src={Calvin} alt='calvin' width={100} height={33}></Image>

  
   </div>
    </div>
  )
}

export default Bar
