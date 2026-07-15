import NavList from "./NavList";
import MobileNavFooter from "./MobileNavFooter";

function MobileNav({ isOpen }) {
  return (
    <nav
      className={`
        ${isOpen ? "flex" : "hidden"}
        absolute top-18 left-0 z-4
        bg-Neutral-200 w-full min-h-180 p-2
        flex flex-col items-center justify-between
        md:flex md:w-80  md:pt-4
        md:shadow-[0_-2px_5px_-5px] md:shadow-Neutral-900
        lg:w-70
    `}
    >
      <NavList />
      <MobileNavFooter/>
    </nav>
  );
}

export default MobileNav;
