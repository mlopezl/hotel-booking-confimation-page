import NavItem from "./NavItem";
const items =[
    {
        title: "Your Stay",
        icon: "/assets/images/icon-bed.svg",
        notification: "1"
    },
    {
        title: "The House",
        icon: "/assets/images/icon-house.svg",
    },
    {
        title: "Around Town",
        icon: "/assets/images/icon-pin.svg",
    },
    {
        title: "Breakfast",
        icon: "/assets/images/icon-breakfast-outline.svg",
    },
    {
        title: "Messages",
        icon: "/assets/images/icon-mail.svg",
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
