import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';
import ProductCards from './ProductCards/ProductCards';
import Brands from './Brands/Brands';
import NewsBlogs from './NewsBlogs/NewsBlogs';
import SubBanner from './SubBanner/SubBanner';

const Home = () => {
    return (
        <div className='container mx-auto py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Banner></Banner>
                <Cards></Cards>
            </div>
            <Categories></Categories>
            {/* <ProductCards></ProductCards> */}
            <SubBanner></SubBanner>
            <Brands></Brands>
            <NewsBlogs></NewsBlogs>
        </div>
    );
};

export default Home;