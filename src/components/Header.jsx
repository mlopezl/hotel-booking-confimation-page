import Booking from "./Booking";
import MainTitle from "./MainTitle";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    <header className="flex flex-col gap-4 p-4">
      <Booking />
      <MainTitle />
      <HeaderButtons />
    </header>
  );
}

export default Header;
