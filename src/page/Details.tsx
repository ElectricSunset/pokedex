import React from 'react';
import { SearchNavigation } from '../components/Navbar';
import { PokemonTag } from '../components/Tags';

const Details: React.FC = () => {
  return (
    <div>
      <SearchNavigation />
      <div className='px-30 pt-35'>
        <button className='flex-center gap-2'>
          <img src='/Icons/Arrow-Left.svg' alt='back arrow' />
          <p className='pt-0.4'>Back</p>
        </button>
        <div className='flex space-x-12.5'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
            alt='bulbasaur'
            className='h-120 w-120'
          />
          <div>
            <img src='/Icons/Pokeball-3d.svg' />
            <div>
              <p className='font-regular text-lg text-neutral-500'>001</p>
              <h1 className='text-display-xl font-bold'>Bulbasaur</h1>
              <p>lorem*4</p>
            </div>
            <div className='flex-between'>
              <div>
                <h2 className='text-xl font-semibold'>Type</h2>
                <div className='flex space-x-3'>
                  <PokemonTag tag='Grass' />
                  <PokemonTag tag='Poison' />
                </div>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Abilities</h2>
                <div className='flex space-x-3'>
                  <PokemonTag tag='Overgrow' />
                  <PokemonTag tag='Chlorophyll' />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2 className='text-xl font-semibold'>Size</h2>
                </div>
                <div className='flex space-x-12'>
                  <div className='flex flex-col items-start'>
                    <div className='flex-center gap-1'>
                      <img src='/Icons/weight.svg' className='pb-0.5' />
                      <p className='text-neutral-700'>Weight</p>
                    </div>
                    <div className='flex-center gap-1'>
                      <span className='text-display-md font-bold'>6.9</span>
                      <span>kg</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <div className='flex-center gap-1'>
                      <img src='/Icons/Ruler.svg' className='pb-0.5' />
                      <p className='text-neutral-700'>Height</p>
                    </div>
                    <div className='flex-center gap-1'>
                      <span className='text-display-md font-bold'>0.7</span>
                      <span>m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>Artwork</p>
                <img
                  src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                  alt='sprites'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // API : pokemon-species/1/
    // flavor_text_entries
    // evolution_schain

    // API : evolution-chain/1/
  );
};

export default Details;
