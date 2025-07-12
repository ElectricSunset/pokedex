import { api } from './Api';
import { getPokemonByURL } from './PokemonApi';
import { padToThreeDigits } from '../lib/utils';

export const getPokemonDesc = async (arrayID: number) => {
  const response = await api.get(`pokemon-species/${arrayID + 1}/`);
  const description = response.data.flavor_text_entries[0].flavor_text;
  const evolutionURL = response.data.evolution_chain.url;

  return [description, evolutionURL];
};

type EvolutionNode = {
  species: string;
  evolves_to?: EvolutionNode[];
};

const traverseEvolution = (node: EvolutionNode): string[] => {
  let result = [`https://pokeapi.co/api/v2/pokemon/${node.species}/`];

  if (node.evolves_to && node.evolves_to.length > 0) {
    for (const child of node.evolves_to) {
      result = result.concat(traverseEvolution(child));
    }
  }

  return result;
};

export const getPokemonEvolution = async (evolutionURL: string) => {
  const response = await api.get(`${evolutionURL}/`);
  const evolutionChainURL = traverseEvolution(response.data);

  const evolutionChainResponses = await Promise.all(
    evolutionChainURL.map((pokemonURL) => getPokemonByURL(pokemonURL))
  );

  const mapped = evolutionChainResponses.map((data) => ({
    id: padToThreeDigits(data.id),
    name: data.name,
    type1: data.types[0]?.type.name ?? null,
    type2: data.types[1]?.type.name ?? null,
  }));

  return mapped;
};
