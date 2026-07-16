import WelcomeCard from "./WelcomeCard";
import Receipt from "./Receipt";
import { useState } from "react";

function Cards(){
   const [isHover, setIsHover] = useState(false);
    return(
        <main className="w-full flex flex-col justify-center items-center gap-2 lg:flex-row md:col-span-5 md:row-span-2 lg:col-span-7 lg:gap-0 xl:col-span-8 relative pb-10">
        <WelcomeCard isHover={isHover}/>
        <Receipt isHover={isHover}/>
        <img className="absolute bottom-10 z-1" src="../../public/assets/images/illustration-sun.svg" alt="" />
         <div
         onMouseEnter={() => {
            setIsHover(true)
            console.log(isHover)
         }} 
         
         onMouseLeave={() => {
            setIsHover(false)
            console.log(isHover);
        }
         }
         className="flex gap-4 absolute hidden bottom-0 lg:flex ">
            <img src="../../public/assets/images/icon-sparkle.svg" alt="Sparkle icon" />
            <p className="uppercase text-[11px] text-Neutral-600 tracking-widest font-semibold font-MD-Mono">Hover to fan</p>
            <img src="../../public/assets/images/icon-sparkle.svg" alt="Sparkle icon" />
        </div>
    </main>
    )
}

export default Cards;