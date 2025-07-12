import { configureStore } from '@reduxjs/toolkit';
import { pokemonListReducer, pokemonDetailsReducer } from './pokemonListSlice';

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
