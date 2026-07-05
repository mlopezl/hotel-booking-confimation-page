function NavList() {
  return (
    <ul className="w-full">
      <li className="flex w-full bg-Neutral-50 p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-bed.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            Your Stay
          </a>
        </div>
        <span className="justify-self-end w-5 h-5 rounded-full bg-Rose-500 text-Neutral-0 text-xs flex justify-center items-center">
          1
        </span>
      </li>
      <li className="flex w-full p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-house.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            The House
          </a>
        </div>
      </li>
      <li className="flex w-full p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-pin.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            Around town
          </a>
        </div>
      </li>
      <li className="flex w-full p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-breakfast-outline.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            Breakfast
          </a>
        </div>
      </li>
      <li className="flex w-full p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-pin.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            Around town
          </a>
        </div>
      </li>
      <li className="flex w-full p-2 pl-4 pr-4 justify-between rounded-lg">
        <div className="flex w-1/2 gap-4 items-center">
          <img src="/assets/images/icon-mail.svg" alt="Bed icon" />
          <a
            href="#"
            className="font-DM-Sans text-Neutral-900 text-sm font-medium"
          >
            Messages
          </a>
        </div>
      </li>
    </ul>
  );
}

export default NavList;
