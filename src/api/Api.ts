import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiOnlyHeader = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
