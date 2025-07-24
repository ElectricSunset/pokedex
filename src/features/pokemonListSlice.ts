import { createSlice } from '@reduxjs/toolkit';

interface EvolutionChain {
  id: string;
  name: string;
  artwork: string;
}

export interface PokemonData {
  id: string;
  arrayId: number;
  name: string;
  weight: number;
  height: number;
  type1: string;
  type2: string | null;
  abilities1: string;
  abilities2: string;
  artwork: string;
  sprites: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  desc: string | null;
  evolution: EvolutionChain[] | null;
}

interface PokemonListState {
  homePokemonList: Record<string, PokemonData>;
  nextList: string | null;
}

const pokemonListInitialValue: PokemonListState = {
  homePokemonList: {},
  nextList: null,
};

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: pokemonListInitialValue,
  reducers: {
    setPokemonList: (state, action) => {
      const newList: PokemonData[] = action.payload;
      newList.forEach((pokemon) => {
        state.homePokemonList[pokemon.name] = pokemon;
      });
    },
    setPokemonNextList: (state, action) => {
      state.nextList = action.payload;
    },
  },
});

export const { setPokemonList, setPokemonNextList } = pokemonListSlice.actions;
export const pokemonListReducer = pokemonListSlice.reducer;

const pokemonDetailsInitialValue: PokemonData = {
  id: '001',
  arrayId: 0,
  name: 'bulbasaur',
  weight: 6.9,
  height: 0.7,
  type1: 'grass',
  type2: 'poison',
  abilities1: 'overgrow',
  abilities2: 'chlorophyll',
  artwork:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  sprites:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  hp: 45,
  attack: 49,
  defense: 49,
  specialAttack: 65,
  specialDefense: 65,
  speed: 45,
  desc: null,
  evolution: [],
};

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState: pokemonDetailsInitialValue,
  reducers: {
    setPokemonDetails: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setPokemonDetails } = pokemonDetailSlice.actions;
export const pokemonDetailsReducer = pokemonDetailSlice.reducer;

const completePokemonListInitialValue: string[] = [];

const completePokemonListSlice = createSlice({
  name: 'completePokemonList',
  initialState: completePokemonListInitialValue,
  reducers: {
    setCompletePokemonList: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCompletePokemonList } = completePokemonListSlice.actions;
export const completePokemonListReducer = completePokemonListSlice.reducer;

const searchedPokemonSlice = createSlice({
  name: 'searchedPokemon',
  initialState: {},
  reducers: {
    setSearchedPokemon: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchedPokemon } = searchedPokemonSlice.actions;
export const searchedPokemonReducer = searchedPokemonSlice.reducer;
