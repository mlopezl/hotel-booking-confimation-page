function WeatherCard({temperature, condition, wind}){
    return(
        <article className="bg-Sun-300 w-70 h-25 rounded-xl relative overflow-hidden flex flex-col gap-1 p-4 justify-self-end lg:w-60">
            <img className="absolute -top-7 -right-2" src="../../public/assets/images/icon-weather.svg" alt="Weather icon" />
             <p className="font-MD-Sans text-Neutral-600 uppercase text-[9px] font-semibold tracking-[2px]">Today in cassis</p>
             <p className="text-Neutral-900 text-3xl font-Fraunces font-semibold">{temperature}</p>
            <p className="font-MD-Sans text-Neutral-600 text-[11px] font-semibold tracking-widest">{condition} · {wind}</p>
        </article>
    )
}

export default WeatherCard;