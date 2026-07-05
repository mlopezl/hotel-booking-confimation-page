import WheatherCard from "./WeatherCard";
import Address from "./Address";

function MobileNavFooter(){
    return(
        <footer className="flex flex-col items-center gap-4 mb-5">
            <WheatherCard/>
            <Address/>
        </footer>
    )
}

export default MobileNavFooter;