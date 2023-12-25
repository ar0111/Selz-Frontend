import React from 'react';

const CategoryCard = ({category}) => {
    // console.log(category);
    const {name} = category

    return (
        <div className="card w-auto bg-base-100 shadow-2xl">
            <div className='p-12'>
                <div className=''>
                    <h4 className='text-2xl mb-6 font-semibold'>{name}</h4>
                </div>
                <div>
                    <img className='w-auto rounded-lg' src={`data:image/png;base64,${category.image}`} alt="" />
                </div>
            </div>
                    
        </div>
    );
};

export default CategoryCard;