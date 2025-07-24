import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';
import type { PokemonData } from '../features/pokemonListSlice';
import { getPokemonData } from '../api/PokemonApi';

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

export const useSearchPokemon = async (pokemonName: string) => {
  const homePokemonList = useSelector(
    (state: RootState) => state.pokemonList.homePokemonList
  );
  const completePokemonList = useSelector(
    (state: RootState) => state.completePokemonList
  );

  const matchedPokemon = completePokemonList.filter((pokemon) =>
    pokemon.includes(pokemonName.toLowerCase())
  );

  let pokemonRecord: Record<string, PokemonData> = {};

  for (const pokemon in matchedPokemon) {
    if (homePokemonList?.[pokemon]) {
      pokemonRecord[pokemon] = homePokemonList[pokemon];
    } else {
      const response = await getPokemonData(pokemon);
      pokemonRecord[pokemon] = response as PokemonData;
    }
  }

  return pokemonRecord;
};
