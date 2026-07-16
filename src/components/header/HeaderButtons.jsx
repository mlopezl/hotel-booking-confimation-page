function HeaderButtons(){
    return(
        <div className="pr-4 flex gap-4">
            <button className=" w-1/2 h-10 border-1 border-Neutral-400 rounded-2xl text-xs font-bold text-Neutral-800 md:w-30 lg:w-40 transition duration-200 hover:brightness-20 focus:outline-Neutral-50 focus:outline-3 focus:shadow-[0_0px_1px_5px] focus:shadow-Terracotta-700">Print receipt</button>
            <button className="w-1/2 h-10 border-1 border-Neutral-400 outline-1 rounded-2xl text-xs font-bold bg-Neutral-900 text-Neutral-0 md:w-30 lg:w-40 transition duration-200 hover:brightness-80 focus:outline-Neutral-50 focus:outline-3 focus:shadow-[0_0px_1px_5px] focus:shadow-Terracotta-700">Add to calendar</button>
        </div>
    )
}

export default HeaderButtons;