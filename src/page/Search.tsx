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

const Search: React.FC = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const currentPokemon = useSelector((state: RootState) => state.pokemonDetail);
  // const homePokemonList = useSelector(
  //   (state: RootState) => state.pokemonList.homePokemonList
  // );

  // const handleGetEvolution = async (
  //   _event: React.MouseEvent<HTMLElement>,
  //   name: string
  // ) => {
  //   let currentPokemonData = homePokemonList[name];
  //   if (!homePokemonList?.[name]) {
  //     const pokemon = await getPokemonByURL(
  //       `https://pokeapi.co/api/v2/pokemon/${name}`
  //     );

  //     const mapped = mapPokemon(pokemon);
  //     dispatch(setPokemonList(mapped));
  //     currentPokemonData = mapped[0];
  //   }
  //   const [desc, evoURL] = await getPokemonDesc(currentPokemonData.arrayId);
  //   const evolution = await getPokemonEvolution(evoURL);
  //   const currentPokemonDetails = {
  //     ...currentPokemonData,
  //     desc,
  //     evolution,
  //   } as PokemonData;
  //   dispatch(setPokemonDetails(currentPokemonDetails));
  //   console.log(currentPokemon);
  // };

  // useEffect(() => {
  //   navigate('/details', { replace: true });
  // }, [currentPokemon]);

  return (
    <div>
      <SearchNavigation onClick={navigate('/')} />
      <div></div>
      <Footer className='mt-10 md:mt-20' />
    </div>
  );
};

export default Search;
