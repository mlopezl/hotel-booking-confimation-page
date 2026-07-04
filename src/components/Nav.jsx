import ToogleButton from "./ToggleButton";
import Logo from "./Logo";

function Nav(){
    return(
        <nav className="w-full h-17 flex justify-between items-center p-5 shadow-[0_2px_5px_-5px] shadow-Neutral-900">
            <Logo/>
            <ToogleButton/>
        </nav>
    )
}

export default Nav;