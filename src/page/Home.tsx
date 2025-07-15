import React, { useEffect } from 'react';
import Navigation from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import {
  getPokemonList,
  getPokemonByURL,
  getAllPokemonData,
} from '../api/PokemonApi';

import { getPokemonEvolution, getPokemonDesc } from '../api/PokemonDetails';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../features/store';
import {
  setPokemonNextList,
  setPokemonList,
  type PokemonData,
  setPokemonDetails,
} from '../features/pokemonListSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nextPokemonList = useSelector(
    (state: RootState) => state.pokemonList.nextList
  );
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );
  // const currentPokemon = useSelector((state: RootState) => state.pokemonDetail);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonListResponse = await getPokemonList(24, 0);
      dispatch(setPokemonNextList(pokemonListResponse.next));
      const mapped = await getAllPokemonData(pokemonListResponse.results);
      dispatch(setPokemonList(mapped));
    };

    fetchPokemonList();
  }, []);

  const getMorePokemon = async () => {
    if (nextPokemonList) {
      const pokemonListResponse = await getPokemonByURL(nextPokemonList);
      dispatch(setPokemonNextList(pokemonListResponse.next));
      const mapped = await getAllPokemonData(pokemonListResponse.results);
      dispatch(setPokemonList(mapped));
    }
  };

  const handleMoreDetails = async (
    _event: React.MouseEvent<HTMLElement>,
    name: string
  ) => {
    const currentPokemonData = homePokemonList[name];
    const [desc, evoURL] = await getPokemonDesc(currentPokemonData.arrayId);
    const evolution = await getPokemonEvolution(evoURL);
    const currentPokemonDetails = {
      ...currentPokemonData,
      desc,
      evolution,
    } as PokemonData;
    dispatch(setPokemonDetails(currentPokemonDetails));
    navigate('/details');
  };

  // useEffect(() => {
  //   console.log(homePokemonList);
  // }, [homePokemonList]);

  return (
    <div className='bg-primary-300'>
      <Navigation />
      <div className='flex-center pt-35 pb-7.5'>
        <div className='flex-center max-w-171.5 flex-col gap-3.75'>
          <img src='/Icons/Pokemon.svg' className='h-16 w-43.75' />
          <h1 className='text-display-2xl text-center font-bold'>
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p>Train, Battle, and Collect Your Favorites!</p>
        </div>
      </div>
      <Searchbar className='pb-20' />
      <div className='relative pt-33'>
        <img
          src='/Icons/Charizard.svg'
          className='absolute bottom-[0%] left-[6%]'
        />
        <img
          src='/Icons/Pikachu.svg'
          className='absolute right-[5.5%] bottom-[7%]'
        />
        <img
          src='/Icons/Clouds.svg'
          className='absolute bottom-[0%] z-10 w-full'
        />
      </div>
      <div className='flex flex-col bg-white px-30 pt-5 pb-20'>
        <h2 className='text-display-md pb-6 font-bold'>List Pokémon</h2>
        <div className='grid grid-cols-4 gap-4'>
          {Object.values(homePokemonList).map((item) => (
            <Cards
              key={item.id}
              name={item.name}
              id={item.id}
              imgUrl={item.artwork}
              type1={item.type1}
              type2={item.type2}
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleMoreDetails(e, item.name)
              }
            />
          ))}
        </div>
        <button
          className='mx-auto mt-6 cursor-pointer rounded-full border border-neutral-300 px-20 py-2.75'
          onClick={getMorePokemon}
        >
          <p>Load More</p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
