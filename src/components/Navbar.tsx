import React from 'react';
import { cn, type classNameProps } from '../lib/utils';
import { Searchbar2 } from './Searchbar';
const Navigation: React.FC<classNameProps> = ({ className }) => {
  return (
    <header
      className={cn('bg-primary-300 fixed top-0 z-30 w-full p-5', className)}
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

export const SearchNavigation: React.FC<classNameProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'card-shadow fixed top-0 z-30 w-full border-b border-gray-100 bg-white px-30 py-5',
        className
      )}
    >
      <div className='flex-between'>
        <div className='flex-center mr-auto'>
          <img src='/Icons/Pokeball-Icon.svg' className='h-10 w-10' />
          <p className='text-2xl leading-9 font-semibold tracking-tight text-neutral-900'>
            Pokedex
          </p>
        </div>
        <Searchbar2 />
      </div>
    </header>
  );
};
