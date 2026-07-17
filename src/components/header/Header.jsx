import Booking from "./Booking";
import MainTitle from "./MainTitle";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    <header className="flex flex-col gap-4 p-4 lg:flex-row md:col-span-5 md:row-span-2 lg:p-10 lg:col-span-7 xl:col-span-8 lg:justify-between">
      <div>
        <Booking />
        <MainTitle name={"Lucia"} />
      </div>
      <HeaderButtons />
    </header>
  );
}

export default Header;
