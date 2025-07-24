import React, { useEffect } from 'react';
import { SearchNavigation } from '../components/Navbar';
import { PokemonTag } from '../components/Tags';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../features/store';
import StatusBar from '../components/ProgressBar';
import { SmallCards } from '../components/Cards';
import { getPokemonByURL, getPokemonDesc, mapPokemon } from '../api/PokemonApi';
import { getPokemonEvolution } from '../api/PokemonDetails';
import {
  type PokemonData,
  setPokemonDetails,
  setPokemonList,
} from '../features/pokemonListSlice';
import Footer from '../components/Footer';

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPokemon = useSelector((state: RootState) => state.pokemonDetail);
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );

  const handleGetEvolution = async (
    _event: React.MouseEvent<HTMLElement>,
    name: string
  ) => {
    let currentPokemonData = homePokemonList[name];
    if (!homePokemonList?.[name]) {
      const pokemon = await getPokemonByURL(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      const mapped = mapPokemon(pokemon);
      dispatch(setPokemonList(mapped));
      currentPokemonData = mapped[0];
    }
    const [desc, evoURL] = await getPokemonDesc(currentPokemonData.arrayId);
    const evolution = await getPokemonEvolution(evoURL);
    const currentPokemonDetails = {
      ...currentPokemonData,
      desc,
      evolution,
    } as PokemonData;
    dispatch(setPokemonDetails(currentPokemonDetails));
    console.log(currentPokemon);
  };

  useEffect(() => {
    navigate('/details', { replace: true });
  }, [currentPokemon]);

  return (
    <div>
      <SearchNavigation onClick={navigate('/')} />
      <div className='flex-center px-4 lg:px-15 xl:px-30'>
        <div className='w-full pt-35'>
          <button
            className='flex-center cursor-pointer gap-2'
            onClick={() => {
              navigate('/');
            }}
          >
            <img src='/Icons/Arrow-Left.svg' alt='back arrow' />
            <p className='pt-0.4'>Back</p>
          </button>
          <div className='0 flex flex-col items-center md:space-x-12.5 lg:flex-row'>
            <img
              src={currentPokemon.artwork}
              alt={currentPokemon.name}
              className='h-80 w-80 md:h-120 md:w-120'
            />
            <div className='flex w-full flex-col gap-4 md:w-169 md:gap-5'>
              <div>
                <img
                  src='/Icons/Pokeball-3d.svg'
                  className='h-8 w-8 md:h-10 md:w-10'
                />
                <div>
                  <p className='font-regular text-md text-neutral-500 md:text-lg'>
                    {currentPokemon.id}
                  </p>
                  <h1 className='text-display-xs md:text-display-xl font-bold'>
                    {currentPokemon.name}
                  </h1>
                  <p className='md:text-md text-sm'>{currentPokemon.desc}</p>
                </div>
              </div>
              <div className='w-full border-t border-gray-300' />
              <div className='flex flex-col space-y-4 md:flex-row md:space-y-0'>
                <div className='md:flex-[5.0] md:basis-80'>
                  <h2 className='text-lg font-semibold md:text-xl'>Type</h2>
                  <div className='flex space-x-3'>
                    <PokemonTag tag={currentPokemon.type1} />
                    {currentPokemon.type2 && (
                      <PokemonTag tag={currentPokemon.type2} />
                    )}
                  </div>
                </div>
                <div className='md:flex-[5.0] md:basis-80'>
                  <h2 className='text-lg font-semibold md:text-xl'>
                    Abilities
                  </h2>
                  <div className='flex space-x-3'>
                    <PokemonTag tag={currentPokemon.abilities1} />
                    {currentPokemon.abilities2 && (
                      <PokemonTag tag={currentPokemon.abilities2} />
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-col space-y-4 md:flex-row md:space-y-0'>
                <div className='md:flex-[5.0] md:basis-80'>
                  <div>
                    <h2 className='text-lg font-semibold md:text-xl'>Size</h2>
                  </div>
                  <div className='flex space-x-12'>
                    <div className='flex flex-col items-start'>
                      <div className='flex-center gap-1'>
                        <img src='/Icons/weight.svg' className='pb-0.5' />
                        <p className='md:text-md text-sm text-neutral-700'>
                          Weight
                        </p>
                      </div>
                      <div className='flex-center gap-1'>
                        <span className='text-display-xs md:text-display-md font-bold'>
                          {currentPokemon.weight}
                        </span>
                        <span className='md:text-md text-sm'>kg</span>
                      </div>
                    </div>
                    <div className='flex flex-col items-start'>
                      <div className='flex-center gap-1'>
                        <img src='/Icons/Ruler.svg' className='pb-0.5' />
                        <p className='md:text-md text-sm text-neutral-700'>
                          Height
                        </p>
                      </div>
                      <div className='flex-center gap-1'>
                        <span className='text-display-xs md:text-display-md font-bold'>
                          {currentPokemon.height}
                        </span>
                        <span className='md:text-md text-sm'>m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:flex-[5.0] md:basis-80'>
                  <p className='text-lg font-semibold md:text-xl'>Artwork</p>
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
          <div className='mt-6 md:mt-12'>
            <h3 className='text-display-xs md:text-display-md mb-4 font-bold md:mb-8'>
              Evolution Chain
            </h3>
            <div className='flex flex-col items-center gap-5 md:flex-row'>
              {currentPokemon.evolution?.map((evo) => (
                <SmallCards
                  key={evo.name}
                  name={evo.name}
                  id={evo.id}
                  imgUrl={evo.artwork}
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleGetEvolution(e, evo.name)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer className='mt-10 md:mt-20' />
    </div>
  );
};

export default Details;
