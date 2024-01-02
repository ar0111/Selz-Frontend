import React from 'react';

const EmptyProductButton = () => {
    return (
        <div className='text-center'>
            <button className="btn uppercase" disabled>Out of Stock</button>
        </div>
    );
};

export default EmptyProductButton;