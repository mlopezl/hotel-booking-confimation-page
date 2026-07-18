import WeatherCard from "./WeatherCard";
import Address from "./Address";

const weather = {
        temperature: "27°",
        condition: "Sunny",
        wind: "Light breeze"
    }

function MobileNavFooter(){
    return(
        <footer className="flex flex-col items-center gap-4 mb-5">
            <WeatherCard 
            temperature={weather.temperature}
            condition={weather.condition}
            wind={weather.wind}
            />
            <Address/>
        </footer>
    )
}

export default MobileNavFooter;