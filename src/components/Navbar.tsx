import React from 'react';
import { cn, type classNameProps } from '../lib/utils';

const Navigation: React.FC<classNameProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'bg-primary-300 fixed top-0 z-30 w-full cursor-pointer p-5',
        className
      )}
    >
      <div className='flex-center'>
        <div className='flex-center'>
          <img src='/Icons/Pokeball-Icon.svg' className='h-10 w-10' />
          <p className='text-2xl leading-9 font-semibold tracking-tight text-neutral-900'>
            Pokedex
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
