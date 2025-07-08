import React from 'react';

const Navigation: React.FC = () => {
  return (
    <div className='flex-center p-5'>
      <div className='fixed top-0'>
        <div className='flex-center'>
          <img src='/Icons/Pokeball-Icon.svg' className='h-10 w-10' />
          <p className='text-2xl leading-9 font-semibold tracking-tight text-neutral-900'>
            Pokedex
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
