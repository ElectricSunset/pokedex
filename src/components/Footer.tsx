import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='flex items-center gap-2 border border-neutral-300 bg-white px-47 py-10.5'>
      <img src='/Icons/Pokeball-Icon.svg' className='h-10 w-10' />
      <p className='text-2xl leading-9 font-semibold tracking-tight text-neutral-900'>
        Pokedex
      </p>
      <p className='text-md text-neutral-600'>Copyright ©2025 Pokedex</p>
    </div>
  );
};

export default Footer;
