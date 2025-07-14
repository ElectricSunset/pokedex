import { createSlice } from '@reduxjs/toolkit';

interface HomePokemon {
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
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

interface PokemonListState {
  homePokemonList: HomePokemon[];
  nextList: string | null;
}

const pokemonListInitialValue: PokemonListState = {
  homePokemonList: [],
  nextList: null,
};

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: pokemonListInitialValue,
  reducers: {
    setPokemonList: (state, action) => {
      const newList = action.payload;
      const combinedList = [...state.homePokemonList, ...newList];
      const deduplicated = Array.from(
        new Map(combinedList.map((pokemon) => [pokemon.id, pokemon])).values()
      );
      state.homePokemonList = deduplicated;
    },
    setPokemonNextList: (state, action) => {
      state.nextList = action.payload;
    },
  },
});

export const { setPokemonList, setPokemonNextList } = pokemonListSlice.actions;
export const pokemonListReducer = pokemonListSlice.reducer;

interface EvolutionChain {
  id: string;
  name: string;
  type1: string;
  type2: string | null;
}

export interface CurrentPokemonDetails extends HomePokemon {
  desc: string | null;
  evolution: EvolutionChain[] | null;
}

const pokemonDetailsInitialValue: CurrentPokemonDetails = {
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
    setPokemonDetails: (state, action) => {
      state.arrayId = action.payload;
    },
  },
});

export const { setPokemonDetails } = pokemonDetailSlice.actions;
export const pokemonDetailsReducer = pokemonDetailSlice.reducer;
