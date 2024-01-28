import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-3xl text-cyan-400'>Congratulations! Payment has been done successfully.</h1>
                    <Link to='/' className='btn btn-info my-6'>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Success;