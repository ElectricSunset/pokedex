import React, { useEffect, useState } from 'react';
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
  setCompletePokemonList,
  type PokemonData,
  setPokemonDetails,
} from '../features/pokemonListSlice';
import { handleAllPokemonList } from '../hooks/SearchPokemon';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const nextPokemonList = useSelector(
    (state: RootState) => state.pokemonList.nextList
  );
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );
  // const currentPokemon = useSelector((state: RootState) => state.pokemonDetail);

  // Handle Navigation Color Change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch Pokemon
  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonListResponse = await getPokemonList(24, 0);
      dispatch(setPokemonNextList(pokemonListResponse.next));
      const mapped = await getAllPokemonData(pokemonListResponse.results);
      dispatch(setPokemonList(mapped));
    };

    fetchPokemonList();
  }, []);

  //
  useEffect(() => {
    const fetchCompletePokemonList = async () => {
      const completePokemonListResponse = await getPokemonList(100000, 0);
      const completePokemonList = handleAllPokemonList(
        completePokemonListResponse.results
      );
      dispatch(setCompletePokemonList(completePokemonList));
    };
  }, []);

  // To change cloud background
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
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

  return (
    <div className='bg-primary-300'>
      <Navigation
        className={scrolled ? 'bg-white' : 'bg-primary-300'}
        onClick={navigate('/')}
      />
      <div className='flex-center px-4 pt-35 pb-7.5'>
        <div className='flex-center max-w-171.5 flex-col gap-3.75'>
          <img
            src='/Icons/Pokemon.svg'
            className='h-12.6 w-26 md:h-16 md:w-43.75'
          />
          <h1 className='text-display-sm md:text-display-2xl text-center font-bold'>
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p className='md:text-md text-sm'>
            Train, Battle, and Collect Your Favorites!
          </p>
        </div>
      </div>
      <Searchbar className='pb-20' />
      <div className='relative pt-33'>
        <img
          src='/Icons/Charizard.svg'
          className='absolute bottom-[-10%] left-[6%]'
          style={{
            width: 'clamp(10.06rem,22.78vw,20.5rem)',
            height: 'clamp(10.06rem,22.78vw,20.5rem)',
          }}
        />
        <img
          src='/Icons/Pikachu.svg'
          className='absolute right-[5.5%] bottom-[-5%]'
          style={{
            width: 'clamp(10.06rem,22.78vw,20.5rem)',
            height: 'clamp(10.06rem,22.78vw,20.5rem)',
          }}
        />
        <img
          src={isMobile ? '/Icons/Cloud.svg' : '/Icons/Clouds.svg'}
          className='absolute bottom-[0%] z-10 w-full'
        />
      </div>
      <div className='flex flex-col bg-white px-4 pt-5 pb-10 md:px-15 md:pb-20 lg:px-30'>
        <h2 className='text-display-xs md:text-display-md pb-6 font-bold'>
          List Pokémon
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-4'>
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
          className='mx-auto mt-6 cursor-pointer rounded-full border border-neutral-300 px-13.25 py-2 md:px-20 md:py-2.75'
          onClick={getMorePokemon}
        >
          <p className='md:text-md text-sm'>Load More</p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
