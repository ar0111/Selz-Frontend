import React from 'react';
import { Link } from 'react-router-dom';

const EmptyProduct = () => {
    return (
        <div className='container mx-auto my-32'>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-4xl font-bold'>No Products Available Here. Go back to Home</h1>
                    <Link className='mx-auto my-10 text-xl font-semibold btn btn-info' to='/'><button>GO HOME</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default EmptyProduct;