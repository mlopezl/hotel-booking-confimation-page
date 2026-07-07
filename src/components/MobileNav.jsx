import NavList from "./NavList";
import MobileNavFooter from "./MobileNavFooter";

function MobileNav({ isOpen }) {
  return (
    <nav
      className={`
        ${isOpen ? "block" : "hidden"}
        absolute top-18 left-0 z-2
        bg-Neutral-200 w-full min-h-180 p-2
        flex flex-col items-center justify-between
    `}
    >
      <NavList />
      <MobileNavFooter/>
    </nav>
  );
}

export default MobileNav;
