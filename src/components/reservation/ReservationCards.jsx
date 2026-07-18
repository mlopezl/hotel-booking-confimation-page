import ReservationCard from "./ReservationCard";
import ReservationText from "./ReservationText";
import ReservationWifi from "./ReservationWifi";
import iconKey from '../../../public/assets/images/icon-key.svg';
import iconWifi from '../../../public/assets/images/icon-wifi.svg';
import iconBreakfast from '../../../public/assets/images/icon-breakfast.svg';

const reservation = [
    {
        type: "Arrival",
        number: "01",
        title: "Check-in from 15:00",
        subtitle: "Sat, 25 April",
        color: "Terracotta-600",
        icon: iconKey,
        text: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracota pot by the olive tree"
    },
    {
        type: "Wifi",
        number: "02",
        title: "Le solei · Guest",
        subtitle: "Password below",
        color: "Blue-500",
        icon: iconWifi
    },
    {
        type: "Breakfast",
        number: "03",
        title: "Served 8 - 10:30",
        subtitle: "On the terrace",
        color: "Rose-500",
        icon: iconBreakfast,
        text: "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before."
    }
]

function ReservationCards(){
 
    return(
        <section className="flex flex-col items-center justify-center gap-4 p-4 md:col-span-10 md:row-span-2 md:flex-row md:flex-wrap lg:col-span-7 xl:col-span-8">
            {reservation.map(res =>{
              return  <ReservationCard 
              key={res.type} 
              type={res.type} 
              number={res.number} 
              title={res.title} 
              subtitle={res.subtitle} 
              color={res.color} 
              icon={res.icon}>
                   { 
                    res.type === "Arrival" ?
                    <ReservationText text={res.text}/> : 
                    res.type === "Breakfast" ?
                    <ReservationText text={res.text}/> : 
                    res.type === "Wifi" ?
                    <ReservationWifi/> : null
                    }
                </ReservationCard>
            })}                
        </section>
    )
}

export default ReservationCards;