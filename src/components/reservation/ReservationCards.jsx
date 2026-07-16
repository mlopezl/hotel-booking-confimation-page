import ReservationCard from "./ReservationCard";

function ReservationCards(){
 
    return(
        <section className="flex flex-col items-center justify-center gap-4 p-4 md:col-span-10 md:row-span-2 md:flex-row md:flex-wrap lg:col-span-7 xl:col-span-8">
            <ReservationCard type={"Arrival"} number={"01"} title={"Check-in from 15:00"} subtitle={"Sat, 25 April"} color={"Terracotta-600"} icon={"icon-key"}>
                 <p className="text-xs font-semibold text-Neutral-600">Ring the brass bell by the blue door. If we're at the market, the key is in the terracota pot by the olive tree</p>
            </ReservationCard>
             <ReservationCard type={"Wifi"} number={"02"} title={"Le Solei · Guest"} subtitle={"Password below"} color={"Blue-500"} icon={"icon-wifi"}>
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
            </ReservationCard>
            <ReservationCard type={"Breakfast"} number={"03"} title={"Served 8 - 10:30"} subtitle={"On the terrace"} color={"Rose-500"} icon={"icon-breakfast"}>
                 <p className="text-xs font-semibold text-Neutral-600">Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
            </ReservationCard>
        </section>
    )
}

export default ReservationCards;