import { createSlice } from '@reduxjs/toolkit';

interface HomePokemon {
  id: string;
  name: string;
  type1: string;
  type2: string | null;
  artwork: string;
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
