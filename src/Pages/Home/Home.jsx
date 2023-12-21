import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='container mx-auto py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Banner></Banner>
                <Cards></Cards>
            </div>
            <Categories></Categories>
        </div>
    );
};

export default Home;