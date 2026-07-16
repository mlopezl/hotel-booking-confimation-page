function NavItem({itemTitle, itemIcon, itemNotification}){
    return(
         <li className={`flex w-full p-2 pl-4 pr-4 justify-between rounded-lg hover:bg-Neutral-50 has-[:focus]:outline-Neutral-50 has-[:focus]:outline-3 has-[:focus]:shadow-[0_0px_1px_5px] has-[:focus]:shadow-Terracotta-700
         ${itemNotification ? "bg-Neutral-50" : "bg-transparent"}
         `}>
        <div className="flex w-full w-1/2 gap-4 items-center">
          <img src={itemIcon} alt="" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium focus:outline-none"
          >
            {itemTitle}
          </a>
        </div>
        {itemNotification && (<span className="justify-self-end w-5 h-5 rounded-full bg-Rose-500 text-Neutral-0 text-xs flex justify-center items-center">
        {itemNotification}
        </span>)}
      </li>
    )
}

export default NavItem;