import { api, apiOnlyHeader } from './Api';

export const getPokemonList = async (limit: number = 0, offset: number = 0) => {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getPokemonByURL = async (url: string) => {
  const response = await apiOnlyHeader.get(url);
  return response.data;
};
