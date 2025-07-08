import { createSlice } from '@reduxjs/toolkit';

const pokemonListInitialValue = {
  value: null,
};

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: pokemonListInitialValue,
  reducers: {
    setPokemonList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonListSlice.actions;
export const pokemonListReducer = pokemonListSlice.reducer;
