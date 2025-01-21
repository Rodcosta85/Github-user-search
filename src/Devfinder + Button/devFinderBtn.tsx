import React from 'react'

import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

interface ButtonThemeProps {
  button: boolean,
  handleTheme: () => void;
}


const devFinderBtn: React.FC<ButtonThemeProps> = ({ button, handleTheme }) => {

  const header = 'text-[26px] font-bold';
  const themeSwitcher = 'flex flex-row justify-center items-center gap-4 desktop:text-[20px] tablet:text-[18px]';

  
  return (
    <div className='flex flex-row justify-between items-center gap-4 w-[327px] h-[28px] mb-10
    tablet:w-[573px] tablet:h-[38px] desktop:w-[730px] desktop:h-[38px]
    '>
      <h1 className={button ? `${header} text-text-black` : `${header} text-white`}>devfinder</h1>
      <button
        onClick={handleTheme}
        className={button ? `${themeSwitcher} text-middle-gray hover:text-almost-black hover:font-semibold` : `${themeSwitcher} text-white hover:text-middle-gray`}
      >
        {button ? 'Dark' : 'Light'}
        <img
          src={button ? Moon : Sun }
          alt={button ? 'the symbol of the moon sun' : 'the symbol of the sun moon'}
          className='w-5 h-5'
        />
      </button>
    </div>
  )
}

export default devFinderBtn
