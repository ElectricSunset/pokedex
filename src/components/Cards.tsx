import React from 'react';
import { cn, type classNameProps } from '../lib/utils';

interface PokemonCardProps extends classNameProps {
  name: string;
  id: string;
  imgUrl: string;
  soundUrl?: string;
  type1: string;
  type2: string | null;
}

const Cards: React.FC<PokemonCardProps> = ({
  name,
  id,
  imgUrl,
  soundUrl,
  type1,
  type2,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-h-96 max-w-72 cursor-pointer rounded-4xl border border-neutral-300 p-6',
        className
      )}
    >
      <div className='flex-center relative mx-auto h-50 w-50'>
        <div className='absolute z-0 h-50 w-50 rounded-full bg-gray-100' />
        <img src={imgUrl} alt={name} className='absolute z-10 h-full w-full' />
      </div>
      <div className='pt-6'>
        <p className='text-neutral-500'>{id}</p>
        <p className='text-xl font-semibold'>{name}</p>
        <div className='flex gap-2 pt-4'>
          <PokemonTypeTag type={type1} />
          {type2 && <PokemonTypeTag type={type2} />}
        </div>
      </div>
    </div>
  );
};

interface PokemonTypeTagProps extends classNameProps {
  type: string | null;
}

const PokemonTypeTag: React.FC<PokemonTypeTagProps> = ({ className, type }) => {
  return (
    <div
      className={cn(
        'rounded-md border border-neutral-300 px-2 py-0.5',
        className
      )}
    >
      <span className='text-sm'>{type}</span>
    </div>
  );
};

export default Cards;
