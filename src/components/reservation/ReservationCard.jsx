function ReservationCard({
    type, number, title, subtitle, color, icon, children
}){
    return(
        <article className="bg-Neutral-0 w-72 h-52 rounded-xl p-4 flex flex-col gap-3">
            <header  className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className={`w-9 h-9 bg-${color} rounded-lg flex justify-center items-center`}>
                        <img src={`/assets/images/${icon}.svg`} alt="" />
                    </div>
                    <p className={`uppercase tracking-widest text-${color} text-sm font-semibold font-MD-Sans`}>{type}</p>
                </div>
                <p className={`uppercase tracking-widest text-${color} text-2xl font-semibold font-Fraunces`}>{number}</p>
            </header>
            <h2 className="text-2xl text-Neutral-900 font-Fraunces font-medium">{title}</h2>
            <p className="text-xs text-Neutral-600 font-semibold">{subtitle}</p>
           {children}
        </article>
    )
}

export default ReservationCard;