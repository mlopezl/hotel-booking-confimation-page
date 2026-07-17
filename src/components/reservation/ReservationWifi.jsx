function ReservationWifi(){
    return(
        <div className="flex flex-col gap-1 text-xs font-DM-Sans">
                    <div className="flex justify-between rounded-lg bg-Neutral-200 p-1 px-3">
                        <p className="uppercase tracking-widest text-[10px] font-semibold text-Neutral-600">Network</p>
                        <p className="text-Neutral-600">Le solei · Guest</p>
                    </div>
                    <div className="flex justify-between rounded-lg bg-Neutral-200 p-1 px-3">
                        <p className="uppercase tracking-widest text-[10px] font-semibold text-Neutral-600">Password</p>
                        <div className="flex gap-2">
                            <p className="text-Neutral-600">Le solei · Guest</p>
                            <button className="bg-Neutral-50 px-1 text-Neutral-600 border-1 border-Neutral-400 outline-1 rounded-xl uppercase text-[9px] transition duration-400 hover:brightness-80 focus:outline-Neutral-50 focus:outline-3 focus:shadow-[0_0px_1px_5px] focus:shadow-Terracotta-700">Copy</button>
                        </div>
                    </div>
                 </div>
    )
}

export default ReservationWifi;