import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <h1 className='text-3xl mb-4'>No Product Added to Compare</h1>
                    <Link to='/'><button className='btn btn-info'>GO TO HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Empty;