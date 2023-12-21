import React from 'react';
import catbanner1 from '../../../assets/images/catbanner-01.jpg';
import catbanner2 from '../../../assets/images/catbanner-02.jpg';
import catbanner3 from '../../../assets/images/catbanner-03.jpg';
import catbanner4 from '../../../assets/images/catbanner-04.jpg';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4'>
            <div className="card w-auto bg-base-100">
                <div className='relative'>
                    <figure><img className='rounded-lg hover:scale-105
                    transition duration-500 ease-in-out' src={catbanner1} alt="Shoes" /></figure>
                    <div className='absolute top-16 left-12'>
                        <h4 className='text-amber font-semibold'>BEST SALE</h4>
                        <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                        <p>From $999.00 or</p>
                        <p>$41.62/mo.</p>
                    </div>
                </div>
                
            </div>

            <div className="card w-auto bg-base-100">
                <div className='relative'>
                    <figure><img className='rounded-lg hover:scale-105
                    transition duration-500 ease-in-out' src={catbanner2} alt="Shoes" /></figure>
                    <div className='absolute top-16 left-12'>
                        <h4 className='text-amber font-semibold'>BEST SALE</h4>
                        <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                        <p>From $999.00 or</p>
                        <p>$41.62/mo.</p>
                    </div>
                </div>
                
            </div>

            <div className="card w-auto bg-base-100">
                <div className='relative'>
                    <figure><img className='rounded-lg hover:scale-105
                    transition duration-500 ease-in-out' src={catbanner3} alt="Shoes" /></figure>
                    <div className='absolute top-16 left-12'>
                        <h4 className='text-amber font-semibold'>BEST SALE</h4>
                        <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                        <p>From $999.00 or</p>
                        <p>$41.62/mo.</p>
                    </div>
                </div>
                
            </div>

            <div className="card w-auto bg-base-100">
                <div className='relative'>
                    <figure><img className='rounded-lg hover:scale-105
                    transition duration-500 ease-in-out' src={catbanner4} alt="Shoes" /></figure>
                    <div className='absolute top-16 left-12'>
                        <h4 className='text-amber font-semibold'>BEST SALE</h4>
                        <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                        <p>From $999.00 or</p>
                        <p>$41.62/mo.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Cards;