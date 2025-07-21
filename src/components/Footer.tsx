import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col items-center space-y-4 border border-neutral-300 bg-white px-4 py-10.5 md:flex-row md:gap-2 md:space-y-0 md:px-47'>
      <div className='flex items-center gap-2'>
        <img
          src='/Icons/Pokeball-Icon.svg'
          className='h-7 w-7 md:h-10 md:w-10'
        />
        <p className='text-md leading-9 font-semibold tracking-tight text-neutral-900 md:text-2xl'>
          Pokedex
        </p>
      </div>
      <p className='md:text-md text-xs text-neutral-600'>
        Copyright Shendy ©2025 Pokedex
      </p>
    </div>
  );
};

export default Footer;
