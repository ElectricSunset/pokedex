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

interface CurrentPokemonDetails {
  arrayId: number;
}

const pokemonDetailsInitialValue: CurrentPokemonDetails = {
  arrayId: 0,
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
