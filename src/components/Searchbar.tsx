import * as React from 'react';

import { cn, type classNameProps } from '../lib/utils';

interface searchBarProps extends classNameProps {
  onSubmit?: any;
}

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn('', className)}
      {...props}
    />
  );
}

const Searchbar: React.FC<searchBarProps> = ({ className, onSubmit }) => {
  return (
    <div className={cn('p-4 md:px-0', className)}>
      <div className='flex-between mx-auto w-full gap-1 rounded-full bg-white px-6 py-2 md:w-130'>
        <Input
          placeholder='Search Pokémon'
          className='w-full'
          onSubmit={() => {
            onSubmit;
          }}
        ></Input>
        <button className='bg-secondary-300 flex-center h-10 w-11 rounded-full'>
          <img src='/Icons/Search.svg' />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;

export const Searchbar2: React.FC<classNameProps> = ({ className }) => {
  return (
    <div className={cn('px-2.5', className)}>
      <div className='flex-between mx-auto w-full max-w-130 gap-1 rounded-full bg-neutral-100 px-6 py-2'>
        <Input
          placeholder='Search Pokémon'
          className='md:text-md font-regular w-full text-sm'
        ></Input>
        <button className='bg-secondary-300 flex-center h-7 w-8 cursor-pointer rounded-full md:h-10 md:w-11'>
          <img src='/Icons/Search.svg' className='h-3 w-3 md:h-4.5 md:w-4.5' />
        </button>
      </div>
    </div>
  );
};
