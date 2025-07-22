import React from 'react';
import { cn, type classNameProps } from '../lib/utils';
import { PokemonTag } from './Tags';

export interface PokemonCardProps extends classNameProps {
  name: string;
  id: string;
  imgUrl: string;
  soundUrl?: string;
  type1: string;
  type2: string | null;
  onClick?: any;
}

const Cards: React.FC<PokemonCardProps> = ({
  name,
  id,
  imgUrl,
  soundUrl,
  type1,
  type2,
  className,
  onClick = () => {},
}) => {
  return (
    <div
      className={cn(
        'h-82.5 w-full cursor-pointer rounded-2xl border border-neutral-300 p-3 md:h-98 md:w-72 md:rounded-4xl md:p-6',
        className
      )}
      onClick={onClick}
    >
      <div className='flex-center relative mx-auto h-50 w-50'>
        <div className='absolute z-0 h-50 w-50 rounded-full bg-gray-100' />
        <img src={imgUrl} alt={name} className='absolute z-10 h-full w-full' />
      </div>
      <div className='md:pt-6'>
        <p className='md:text-md text-sm text-neutral-500'>{id}</p>
        <p className='text-md font-semibold md:text-xl'>{name}</p>
        <div className='flex gap-2 pt-3 md:pt-4'>
          <PokemonTag tag={type1} />
          {type2 && <PokemonTag tag={type2} />}
        </div>
      </div>
    </div>
  );
};

export default Cards;

type SmallPokemonCardProps = Omit<PokemonCardProps, 'type1' | 'type2'>;

export const SmallCards: React.FC<SmallPokemonCardProps> = ({
  name,
  id,
  imgUrl,
  soundUrl,
  className,
  onClick = () => {},
}) => {
  return (
    <div
      className={cn(
        'w-90.5 cursor-pointer rounded-4xl border border-neutral-300 p-4 md:w-48',
        className
      )}
      onClick={onClick}
    >
      <div className='flex-center relative mx-auto h-40 w-40'>
        <div className='absolute z-0 h-40 w-40 rounded-full bg-gray-100' />
        <img src={imgUrl} alt={name} className='absolute z-10 h-full w-full' />
      </div>
      <div className='pt-6'>
        <p className='text-neutral-500'>{id}</p>
        <p className='text-xl font-semibold'>{name}</p>
      </div>
    </div>
  );
};
