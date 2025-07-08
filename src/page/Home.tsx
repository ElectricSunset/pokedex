import React from 'react';
import Navigation from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const items = Array.from({ length: 24 }, (_, i) => i + 1);

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
      <div className='flex flex-col bg-white px-30 pt-5 pb-20'>
        <h2 className='text-display-md pb-6 font-bold'>List Pokémon</h2>
        <div className='grid grid-cols-4 gap-4'>
          {items.map((item) => (
            <Cards
              key={item}
              name='Ditto'
              id='001'
              imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
              type1='grass'
              type2='Jelly'
            />
          ))}
        </div>
        <button className='mx-auto mt-6 rounded-full border border-neutral-300 px-20 py-2.75'>
          <p>Load More</p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
