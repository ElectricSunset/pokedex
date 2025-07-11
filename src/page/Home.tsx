import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getPokemonList, getPokemonByURL } from '../api/PokemonApi';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../features/store';
import {
  setPokemonNextList,
  setPokemonList,
} from '../features/pokemonListSlice';
import { padToThreeDigits } from '../lib/utils';

interface PokemonResponseProps {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const nextPokemonList = useSelector(
    (state: RootState) => state.pokemonList.nextList
  );
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );
  // Make State to save current pokemon details
  const fetchAllPokemonData = async (pokemonArray: PokemonResponseProps[]) => {
    try {
      const responses = await Promise.all(
        pokemonArray.map((pokemon) => getPokemonByURL(pokemon.url))
      );

      const mapped = responses.map((data) => ({
        id: padToThreeDigits(data.id),
        arrayId: data.id - 1,
        name: data.name,
        weight: data.weight / 10,
        height: data.height / 10,
        type1: data.types[0]?.type.name ?? null,
        type2: data.types[1]?.type.name ?? null,
        abilities1: data.abilities[0]?.ability.name ?? null,
        abilities2: data.abilities[1]?.ability.name ?? null,
        artwork: data.sprites.other['official-artwork'].front_default,
        sprites: data.sprites['front_default'],
        hp: data.stats[0]['base_stat'],
        attack: data.stats[1]['base_stat'],
        defense: data.stats[2]['base_stat'],
        specialAttack: data.stats[3]['base_stat'],
        specialDefense: data.stats[4]['base_stat'],
        speed: data.stats[5]['base_stat'],
      }));

      dispatch(setPokemonList(mapped));
      console.log(responses.length, ' Pokemon Data inserted to Pokedex');
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonListResponse = await getPokemonList(24, 0);
      dispatch(setPokemonNextList(pokemonListResponse.next));
      fetchAllPokemonData(pokemonListResponse.results);
    };

    fetchPokemonList();
  }, []);

  const getMorePokemon = async () => {
    if (nextPokemonList) {
      const pokemonListResponse = await getPokemonByURL(nextPokemonList);
      dispatch(setPokemonNextList(pokemonListResponse.next));
      fetchAllPokemonData(pokemonListResponse.results);
    }
  };

  useEffect(() => {
    if (homePokemonList) {
      // Run logic when nextList changes
      console.log('nextList changed:', homePokemonList);
      // Fetch new Pokémon or do something else
    }
  }, [homePokemonList]);

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
          {homePokemonList.map((item) => (
            <Cards
              key={item.id}
              name={item.name}
              id={item.id}
              imgUrl={item.artwork}
              type1={item.type1}
              type2={item.type2}
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
