import React from 'react';
import Navigation from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';

const Home: React.FC = () => {
  return (
    <div className='bg-primary-300'>
      <Navigation />
      <div className='flex-center pt-35 pb-7.5'>
        <div className='flex-center max-w-171.5 flex-col gap-3.75'>
          <img src='/Icons/Pokemon.svg' className='h-16 w-43.75' />
          <h1 className='text-display-2xl text-center font-bold'>
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p>Train, Battle, and Collect Your Favorites!</p>
        </div>
      </div>
      <Searchbar className='pb-20' />
      <div className='relative pt-33'>
        <img
          src='/Icons/Charizard.svg'
          className='absolute bottom-[0%] left-[6%]'
        />
        <img
          src='/Icons/Pikachu.svg'
          className='absolute right-[5.5%] bottom-[7%]'
        />
        <img
          src='/Icons/Clouds.svg'
          className='absolute bottom-[0%] z-10 w-full'
        />
      </div>
      <div className='bg-white px-30 pt-5'>
        <h2 className='text-display-md font-bold'>List Pokémon</h2>
        <div className='flex'>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default Home;
