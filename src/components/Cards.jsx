import WelcomeCard from "./WelcomeCard";
import Receipt from "./Receipt";

function Cards(){
    return(
        <main className="w-full flex flex-col justify-center items-center gap-2 lg:flex-row md:col-span-5 md:row-span-2 lg:col-span-7 lg:gap-0 xl:col-span-8">
        <WelcomeCard/>
        <Receipt/>
    </main>
    )
}

export default Cards;