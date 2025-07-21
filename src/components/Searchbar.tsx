import * as React from 'react';

import { cn, type classNameProps } from '../lib/utils';

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

const Searchbar: React.FC<classNameProps> = ({ className }) => {
  return (
    <div className={cn('p-4 md:px-0', className)}>
      <div className='flex-between mx-auto w-full gap-1 rounded-full bg-white px-6 py-2 md:w-130'>
        <Input placeholder='Search Pokémon' className='w-full'></Input>
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
    <div className={cn('', className)}>
      <div className='flex-between mx-auto w-130 gap-1 rounded-full bg-neutral-100 px-6 py-2'>
        <Input
          placeholder='Search Pokémon'
          className='text-md font-regular w-full'
        ></Input>
        <button className='bg-secondary-300 flex-center h-10 w-11 cursor-pointer rounded-full'>
          <img src='/Icons/Search.svg' />
        </button>
      </div>
    </div>
  );
};
