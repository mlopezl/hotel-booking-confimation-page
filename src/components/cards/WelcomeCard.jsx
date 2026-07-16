function WelcomeCard({isHover}){
    return(
        <article className={`shadow-[0_0_10px] shadow-Terracotta-500 bg-gradient-to-bl from-Terracotta-400 to-Terracotta-700 w-70 h-90 rounded-xl p-4 flex flex-col gap-2 z-3 lg:order-1 lg:w-80 lg:mr-1
            transition-transform duration-300
        ${isHover ? "-rotate-12 translate-x-20" : "rotate-4" }`}>
            <p className="text-Neutral-400 text-xs brightness-75">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <header className="flex justify-between">
                <p className="text-Neutral-400 text-[9px] uppercase tracking-widest font-DM-Sans">Welcome card</p>
                <img className="w-10" src="../../public/assets/images/icon-sun.svg" alt="Sun icon" />
            </header>
            <p className="text-Sun-300 font-DM-Mono italic">A note from your host,</p>
            <h2 className="text-Neutral-0 text-4xl mb-4 font-Fraunces italic">Margaux.</h2>
            <p className="text-[13px] text-Neutral-400 font-MD-Sans">We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you</p>
            <footer className="mt-12">
                <p className="text-Neutral-400 text-[9px] uppercase tracking-widest font-DM-Sans">Room</p>
                <p className="text-Neutral-200 text-lg font-Fraunces">La Garrigue</p>
            </footer>
            

        </article>
    )
}

export default WelcomeCard;