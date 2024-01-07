import React from 'react';
import { Link } from 'react-router-dom';

const EmptyOrder = () => {
    return (
        <div className='flex justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold uppercase'>You do not place any order</h1>
                <Link to='/' className='btn btn-info uppercase my-6'>Go home</Link>
            </div>
            
        </div>
    );
};

export default EmptyOrder;