import { configureStore } from '@reduxjs/toolkit';
import {
  pokemonListReducer,
  pokemonDetailsReducer,
  completePokemonListReducer,
  searchedPokemonReducer,
} from './pokemonListSlice';

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonDetailsReducer,
    completePokemonList: completePokemonListReducer,
    searchedPokemon: searchedPokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
