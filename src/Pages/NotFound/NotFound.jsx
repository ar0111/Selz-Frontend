import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='contaienr'>
            <div className='text-center my-24'>
                <h1 className='text-3xl font-bold'>404 - Not Found</h1>
                <p className='py-4 text-xl text-warning'>Sorry, the page you looking for might be in another castle.</p>
                <Link to='/'><button className='btn btn-active uppercase'>Go Back Home</button></Link>
            </div>
            
        </div>
    );
};

export default NotFound;