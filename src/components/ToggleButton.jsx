import { useState } from "react";

function ToogleButton(){
    const [icon, setIcon] = useState('icon-menu');

    return(
        <button 
        className='w-7 h-8 border-Neutral-400 border-1 flex justify-center items-center rounded-sm'
        onClick={() => setIcon(icon === 'icon-menu' ? 'icon-close' : 'icon-menu')}
        >
            <img src={`../../public/assets/images/${icon}.svg`} alt="Icon menu button" />
        </button>
    )
}

export default ToogleButton;