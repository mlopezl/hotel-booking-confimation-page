import NavItem from "./NavItem";
import iconBed from '../../../public/assets/images/icon-bed.svg';
import iconHouse from '../../../public/assets/images/icon-house.svg';
import iconPin from '../../../public/assets/images/icon-pin.svg';
import iconBreakfastOutline from '../../../public/assets/images/icon-breakfast-outline.svg';
import iconMail from '../../../public/assets/images/icon-mail.svg';

const items =[
    {
        title: "Your Stay",
        icon: iconBed,
        notification: "1"
    },
    {
        title: "The House",
        icon: iconHouse,
    },
    {
        title: "Around Town",
        icon: iconPin,
    },
    {
        title: "Breakfast",
        icon: iconBreakfastOutline,
    },
    {
        title: "Messages",
        icon: iconMail,
    }
]

function NavList() {
  return (
    <ul className="w-full">
      {items.map(item =>{
        return(
          <NavItem key={item.title} itemTitle={item.title} itemIcon={item.icon} itemNotification={item.notification}/>
        )
      })}
    </ul>
  );  
}

export default NavList;
