import ToggleButton from "./ToggleButton";
import Logo from "../header/Logo";
import MobileNav from "./MobileNav";
import { useState } from "react";


function Nav(){
    const [isOpen, setIsOpen] = useState(false);
   const toggleNav = () => {
      setIsOpen(prev => !prev);
    };
    return(
        <nav id="mobile-navigation" className="w-full h-17 flex justify-between items-center p-5 shadow-[0_2px_5px_-5px] shadow-Neutral-900 md:w-70 md:min-h-180 md:justify-start md:items-start md:col-span-5 md:row-span-4 lg:row-span-6 lg:col-span-3 xl:col-span-2">
            <Logo/>
            <ToggleButton isOpen={isOpen} onToggle={toggleNav} />
            <MobileNav isOpen={isOpen} />
        </nav>
    )
}

export default Nav;