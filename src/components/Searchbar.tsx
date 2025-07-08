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
    <div className={cn('', className)}>
      <div className='flex-between mx-auto max-w-130 gap-1 rounded-full bg-white px-6 py-2'>
        <Input placeholder='Search Pokémon' className='w-full'></Input>
        <button className='bg-secondary-300 flex-center h-10 w-11 rounded-full'>
          <img src='/Icons/Search.svg' />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
