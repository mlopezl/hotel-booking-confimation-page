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
          src={`/assets/images/${isOpen ? "icon-close" : "icon-menu"}.svg`}
          alt="Menu button"
        />
      </button>
    </>
  );
}

export default ToggleButton;