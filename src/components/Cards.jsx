import WelcomeCard from "./WelcomeCard";
import Receipt from "./Receipt";

function Cards(){
    return(
        <main className="flex flex-col justify-center items-center gap-2">
        <WelcomeCard/>
        <Receipt/>
    </main>
    )
}

export default Cards;