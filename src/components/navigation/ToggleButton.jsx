import iconClose from '../../../public/assets/images/icon-close.svg';
import iconMenu from '../../../public/assets/images/icon-menu.svg';

function ToggleButton({isOpen, onToggle}) {
  
  return (
    <>
      <button
        className="w-7 h-8 border-Neutral-400 border flex justify-center items-center rounded-sm md:hidden"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
      >
        <img
          src={`${isOpen ? iconClose : iconMenu}`}
          alt="Menu button"
        />
      </button>
    </>
  );
}

export default ToggleButton;