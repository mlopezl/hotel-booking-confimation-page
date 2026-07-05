import { useState } from "react";
import MobileNav from "./MobileNav";

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prev => !prev);x
  };

  return (
    <>
      <button
        className="w-7 h-8 border-Neutral-400 border flex justify-center items-center rounded-sm"
        onClick={toggleNav}
      >
        <img
          src={`/assets/images/${isOpen ? "icon-close" : "icon-menu"}.svg`}
          alt="Menu button"
        />
      </button>

      <MobileNav isOpen={isOpen} />
    </>
  );
}

export default ToggleButton;