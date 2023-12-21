import React from 'react';

const CategoryCard = () => {
    return (
        <div className='pt-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4'>
                <div className="card w-auto bg-base-100">
                    <div className=''>
                        <div className=''>
                            <h4 className='text-amber font-semibold'>BEST SALE</h4>
                            <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                            <p>From $999.00 or</p>
                            <p>$41.62/mo.</p>
                        </div>
                    </div>
                    
                </div>

                <div className="card w-auto bg-base-100">
                    <div className=''>
                        <div className=''>
                            <h4 className='text-amber font-semibold'>BEST SALE</h4>
                            <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                            <p>From $999.00 or</p>
                            <p>$41.62/mo.</p>
                        </div>
                    </div>
                    
                </div>

                <div className="card w-auto bg-base-100">
                    <div className=''>
                        <div className=''>
                            <h4 className='text-amber font-semibold'>BEST SALE</h4>
                            <h1 className='py-3 text-2xl font-semibold'>Laptops Max</h1>
                            <p>From $999.00 or</p>
                            <p>$41.62/mo.</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default CategoryCard;