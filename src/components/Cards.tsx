import React from 'react';
import { cn, type classNameProps } from '../lib/utils';

interface PokemonCardProps extends classNameProps {
  name: string;
  imgUrl: string;
  soundUrl?: string;
  type1: string;
  type2: string;
}

const Cards: React.FC = () => {
  return (
    <div className='h-96 w-72 rounded-4xl border border-neutral-300 p-6'>
      <div className='flex-center relative mx-auto h-50 w-50'>
        <div className='absolute z-0 h-50 w-50 rounded-full bg-gray-100' />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg`}
          alt='ditto'
          className='absolute z-10 h-full w-full'
        />
      </div>
      <div className='pt-6'>
        <p className='text-neutral-500'>001</p>
        <p className='text-xl font-semibold'>Ditto</p>
        <div className='flex gap-2 pt-4'>
          <PokemonTypeTag type='Grass' />
          <PokemonTypeTag type='Jelly' />
        </div>
      </div>
    </div>
  );
};

interface PokemonTypeTagProps extends classNameProps {
  type: string;
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
