import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';

interface pokemonListResponseProps {
  name: string;
  url: string;
}

export const handleAllPokemonList = (
  pokemonList: pokemonListResponseProps[]
): string[] => {
  const allPokemonList: string[] = [];
  pokemonList.map((val) => {
    allPokemonList.push(val?.name);
  });
  return allPokemonList;
};

export const useSearchPokemon = (pokemonName: string) => {
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );

  const key = pokemonName.toLowerCase();

  if (homePokemonList?.[key]) {
  }

  return homePokemonList?.[key] ?? null;
};
