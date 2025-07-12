import React from 'react';
import { SearchNavigation } from '../components/Navbar';
import { PokemonTag } from '../components/Tags';
import { trimTransparentPixels } from '../lib/utils';
import { useState, useEffect } from 'react';

const Details: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [trimmedSrc, setTrimmedSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setImageUrl(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    );
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const trimmedCanvas = trimTransparentPixels(img);
      if (trimmedCanvas) {
        setTrimmedSrc(trimmedCanvas.toDataURL());
        setError(null);
      } else {
        setError('Image is fully transparent or could not be trimmed.');
        setTrimmedSrc(null);
      }
    };

    img.onerror = () => {
      setError(
        'Failed to load image. Make sure the URL is correct and allows CORS.'
      );
      setTrimmedSrc(null);
    };
  }, []);

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
          <div className='flex w-169 flex-col gap-5'>
            <div>
              <img src='/Icons/Pokeball-3d.svg' />
              <div>
                <p className='font-regular text-lg text-neutral-500'>001</p>
                <h1 className='text-display-xl font-bold'>Bulbasaur</h1>
                <p>lorem*4</p>
              </div>
            </div>
            <div className='w-full border-t border-gray-300' />
            <div>
              <div className='flex'>
                <div className='flex-[5.0] basis-80'>
                  <h2 className='text-xl font-semibold'>Type</h2>
                  <div className='flex space-x-3'>
                    <PokemonTag tag='Grass' />
                    <PokemonTag tag='Poison' />
                  </div>
                </div>
                <div className='flex-[5.0] basis-80'>
                  <h2 className='text-xl font-semibold'>Abilities</h2>
                  <div className='flex space-x-3'>
                    <PokemonTag tag='Overgrow' />
                    <PokemonTag tag='Chlorophyll' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='flex-[5.0] basis-80'>
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
              <div className='flex-[5.0] basis-80'>
                <p className='text-xl font-semibold'>Artwork</p>
                <img
                  src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                  alt='sprites'
                  className='h-20 w-20 shrink-0'
                />
              </div>
            </div>
            <div className='w-full border-t border-gray-300' />
            <div>
              <h3 className='text-xl font-semibold'>Stats</h3>
              {/* Insert Status Bar */}
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-display-md mb-8 font-bold'>Evolution Chain</h3>
          {/* smol Card */}
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
