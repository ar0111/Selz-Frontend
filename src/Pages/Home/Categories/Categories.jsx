import React from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['addcategories'],
        queryFn: async()=>{
            const res = await fetch("http://localhost:3000/addcategories");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='pt-16'>
            <h1 className='text-4xl font-bold'>Product Categories</h1>

            <div className='pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        categories.map((category, idx) => <Link to={`/products/${category._id}`}><CategoryCard category={category} key={idx}></CategoryCard></Link>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Categories;