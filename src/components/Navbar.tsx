import React from 'react';
import { cn, type classNameProps } from '../lib/utils';
import { Searchbar2 } from './Searchbar';

interface navigationProps extends classNameProps {
  onClick?: any;
}

const Navigation: React.FC<navigationProps> = ({ className, onClick }) => {
  return (
    <header className={cn('fixed top-0 z-30 w-full p-5', className)}>
      <div className='flex-center'>
        <div className='flex-center cursor-pointer' onClick={onClick}>
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

export const SearchNavigation: React.FC<navigationProps> = ({
  className,
  onClick,
}) => {
  return (
    <header
      className={cn(
        'card-shadow fixed top-0 z-30 w-full border-b border-gray-100 bg-white px-4 py-2 md:px-30 md:py-5',
        className
      )}
    >
      <div className='flex-between'>
        <div className='flex-center mr-auto cursor-pointer' onClick={onClick}>
          <img
            src='/Icons/Pokeball-Icon.svg'
            className='h-7 w-7 shrink-0 md:h-10 md:w-10'
          />
          <p className='hidden text-2xl leading-9 font-semibold tracking-tight text-neutral-900 md:block'>
            Pokedex
          </p>
        </div>
        <div className='w-full'>
          <Searchbar2 />
        </div>
      </div>
    </header>
  );
};
