import ToogleButton from "./ToggleButton";
import Logo from "./Logo";

function Nav(){
    return(
        <nav className="w-full h-17 flex justify-between items-center p-5 shadow-[0_2px_5px_-5px] shadow-Neutral-900 md:w-70 md:min-h-screen md:justify-start md:items-start md:col-span-5 md:row-span-4 lg:row-span-6 lg:col-span-3 xl:col-span-2">
            <Logo/>
            <ToogleButton/>
        </nav>
    )
}

export default Nav;