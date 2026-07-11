function Receipt(){
    return(
        <article className="bg-Neutral-0 w-70 h-90 rounded-xl p-4 flex flex-col gap-3 -rotate-2 shadow-xl shadow-terracotta-400 lg:w-80 lg:-rotate-4">
            <header className="flex justify-between shadow-[0_2px_5px_-5px] shadow-Neutral-900 pb-2">
                <div>
                    <h2 className="text-Neutral-700 text-[9px] uppercase tracking-widest font-DM-Sans flex flex-col gap-4">Receipt</h2>
                    <p className="font-medium text-Neutral-800">Your Stay</p>
                </div>
                <div>
                    <p className="text-Neutral-700 text-[9px] uppercase tracking-widest font-DM-Sans flex flex-col gap-2">No MS-2026</p>
                    <p className="text-Neutral-700 text-[9px] uppercase tracking-widest font-DM-Sans flex flex-col gap-2">0421 - AH</p>
                </div>
            </header>
            <div className="flex justify-between pl-2 pr-2 shadow-[0_2px_5px_-5px] shadow-Neutral-900 pb-2 pt-2">
                <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-Neutral-700 text-[9px] uppercase tracking-widest font-DM-Sans flex flex-col gap-2">Check in</p>
                    <p className="font-semibold font-Fraunces text-3xl text-Neutral-800">25 Apr</p>
                    <p className="text-Neutral-700 text-[10px] tracking-widest font-DM-Sans flex flex-col gap-2">Saturday - 15:00</p>
                </div>
                 <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-Neutral-700 text-[9px] uppercase tracking-widest font-DM-Sans flex flex-col gap-2">Check out</p>
                    <p className="font-semibold font-Fraunces text-3xl text-Neutral-800">29 Apr</p>
                    <p className="text-Neutral-700 text-[10px] tracking-widest font-DM-Sans flex flex-col gap-2">Wednesday - 11:00</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b-1 border-Neutral-600 pt-2 pb-2">
                <div className="flex justify-between">
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">Room · La Garrigue x 4 nights</p>
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">€ 620.00</p>
                </div>
                <div className="flex justify-between">
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">Breakfast x 2 guests</p>
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">€ 96.00</p>
                </div>
                <div className="flex justify-between">
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">Tourist tax</p>
                    <p  className="text-Neutral-900 text-[11px] font-DM-Sans flex flex-col gap-2">€ 14.40</p>
                </div>
            </div>
            <footer className="flex flex-col justify-between gap-3">
                <div className="flex justify-between items-center">
                    <p className="uppercase tracking-widest text-Neutral-900 text-[11px] font-DM-Sans flex flex-col">Total paid</p>
                    <p className="uppercase font-semibold text-Neutral-900 text-[20px] font-DM-Sans">€ 730.40</p>
                </div>
                <div className="flex justify-between">
                    <p className="uppercase tracking-widest text-Neutral-900 text-[10px] font-DM-Sans flex flex-col">Paid · Wise · GBP</p>
                    <img className="w-18" src="../../public/assets/images/icon-barcode.svg" alt="" />
                </div>
            </footer>
        </article>
    )
}

export default Receipt;