import { api, apiOnlyHeader } from './Api';

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
