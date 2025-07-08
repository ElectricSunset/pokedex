import React from 'react';
import Navigation from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const Home: React.FC = () => {
  return (
    <div className='bg-primary-300'>
      <Navigation />
      <div className='flex-center pt-15 pb-7.5'>
        <div className='flex-center max-w-171.5 flex-col gap-3.75'>
          <img src='/Icons/Pokemon.svg' className='h-16 w-43.75' />
          <h1 className='text-display-2xl text-center font-bold'>
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p>Train, Battle, and Collect Your Favorites!</p>
        </div>
      </div>
      <Searchbar className='pb-20' />
      <img src='/Icons/Clouds.svg' className='w-full' />
      <div className='bg-white px-30 pt-5'>
        <h2 className='text-display-md font-bold'>List Pokémon</h2>
      </div>
    </div>
  );
};

export default Home;
