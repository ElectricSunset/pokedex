import React from 'react';
import { SearchNavigation } from '../components/Navbar';
import { PokemonTag } from '../components/Tags';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../features/store';
import StatusBar from '../components/ProgressBar';
import { SmallCards } from '../components/Cards';

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPokemon = useSelector((state: RootState) => state.pokemonDetail);
  // console.log(currentPokemon);
  return (
    <div>
      <SearchNavigation />
      <div className='flex-center'>
        <div className='px-30 pt-35'>
          <button
            className='flex-center cursor-pointer gap-2'
            onClick={() => {
              navigate('/');
            }}
          >
            <img src='/Icons/Arrow-Left.svg' alt='back arrow' />
            <p className='pt-0.4'>Back</p>
          </button>
          <div className='flex space-x-12.5'>
            <img
              src={currentPokemon.artwork}
              alt={currentPokemon.name}
              className='h-120 w-120'
            />
            <div className='flex w-169 flex-col gap-5'>
              <div>
                <img src='/Icons/Pokeball-3d.svg' />
                <div>
                  <p className='font-regular text-lg text-neutral-500'>
                    {currentPokemon.id}
                  </p>
                  <h1 className='text-display-xl font-bold'>
                    {currentPokemon.name}
                  </h1>
                  <p>{currentPokemon.desc}</p>
                </div>
              </div>
              <div className='w-full border-t border-gray-300' />
              <div>
                <div className='flex'>
                  <div className='flex-[5.0] basis-80'>
                    <h2 className='text-xl font-semibold'>Type</h2>
                    <div className='flex space-x-3'>
                      <PokemonTag tag={currentPokemon.type1} />
                      {currentPokemon.type2 && (
                        <PokemonTag tag={currentPokemon.type2} />
                      )}
                    </div>
                  </div>
                  <div className='flex-[5.0] basis-80'>
                    <h2 className='text-xl font-semibold'>Abilities</h2>
                    <div className='flex space-x-3'>
                      <PokemonTag tag={currentPokemon.abilities1} />
                      {currentPokemon.abilities2 && (
                        <PokemonTag tag={currentPokemon.abilities2} />
                      )}
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
                        <span className='text-display-md font-bold'>
                          {currentPokemon.weight}
                        </span>
                        <span>kg</span>
                      </div>
                    </div>
                    <div className='flex flex-col items-start'>
                      <div className='flex-center gap-1'>
                        <img src='/Icons/Ruler.svg' className='pb-0.5' />
                        <p className='text-neutral-700'>Height</p>
                      </div>
                      <div className='flex-center gap-1'>
                        <span className='text-display-md font-bold'>
                          {currentPokemon.height}
                        </span>
                        <span>m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-[5.0] basis-80'>
                  <p className='text-xl font-semibold'>Artwork</p>
                  <img
                    src={currentPokemon.sprites}
                    alt={`${currentPokemon.name} sprites`}
                    className='h-20 w-20 shrink-0'
                  />
                </div>
              </div>
              <div className='w-full border-t border-gray-300' />
              <div>
                <h3 className='text-xl font-semibold'>Stats</h3>
                <StatusBar
                  hp={currentPokemon.hp}
                  attack={currentPokemon.attack}
                  defense={currentPokemon.defense}
                  specialAttack={currentPokemon.specialAttack}
                  specialDefense={currentPokemon.specialDefense}
                  speed={currentPokemon.speed}
                />
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <h3 className='text-display-md mb-8 font-bold'>Evolution Chain</h3>
            <div className='flex gap-5'>
              {currentPokemon.evolution?.map((evo) => (
                <SmallCards
                  key={evo.name}
                  name={evo.name}
                  id={evo.id}
                  imgUrl={evo.artwork}
                  type1={evo.type1}
                  type2={evo.type2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
