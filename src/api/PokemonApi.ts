import { api, apiOnlyHeader } from './Api';
import { padToThreeDigits } from '../lib/utils';
import type { PokemonData } from '../features/pokemonListSlice';

export const getPokemonList = async (limit: number = 0, offset: number = 0) => {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getPokemonByURL = async (url: string) => {
  const response = await apiOnlyHeader.get(url);
  return response.data;
};

export const getPokemonDesc = async (arrayID: number) => {
  const response = await api.get(`pokemon-species/${arrayID + 1}/`);
  const description = response.data.flavor_text_entries[0].flavor_text;
  const evolutionURL = response.data.evolution_chain.url;

  return [description, evolutionURL];
};

export interface PokemonResponseProps {
  name: string;
  url: string;
}

export const getAllPokemonData = async (
  pokemonArray: PokemonResponseProps[]
) => {
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

    console.log(responses.length, ' Pokemon Data inserted to Pokedex');
    return mapped;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};

export const getPokemonData = async (pokemonName: string) => {
  try {
    const responses = await getPokemonByURL(`pokemon/${pokemonName}`);
    const result = {
      id: padToThreeDigits(responses.id),
      arrayId: responses.id - 1,
      name: responses.name,
      weight: responses.weight / 10,
      height: responses.height / 10,
      type1: responses.types[0]?.type.name ?? null,
      type2: responses.types[1]?.type.name ?? null,
      abilities1: responses.abilities[0]?.ability.name ?? null,
      abilities2: responses.abilities[1]?.ability.name ?? null,
      artwork: responses.sprites.other['official-artwork'].front_default,
      sprites: responses.sprites['front_default'],
      hp: responses.stats[0]['base_stat'],
      attack: responses.stats[1]['base_stat'],
      defense: responses.stats[2]['base_stat'],
      specialAttack: responses.stats[3]['base_stat'],
      specialDefense: responses.stats[4]['base_stat'],
      speed: responses.stats[5]['base_stat'],
    };

    return result;
  } catch (error) {
    console.error('Error fetching Indiviual Pokémon data:', error);
  }
};

export const mapPokemon = (data: any) => {
  const mapped = {
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
  };
  return [mapped] as PokemonData[];
};
