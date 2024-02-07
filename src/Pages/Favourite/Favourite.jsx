import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import FavouriteCard from './FavouriteCard';

const Favourite = () => {

    const {user} = useContext(AuthContext);

    const { data: myproducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myfavourite', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://selz-server.vercel.app/myfavourite/${user?.email}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })

    console.log(myproducts);

    // if(isLoading) return <Loading></Loading>

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl uppercase font-semibold mb-10'>Favourite Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6 md:px-0'>
                {/* {
                    myproducts.map((product, idx) => <ProductCard product={product} key={idx}></ProductCard>)
                } */}
                {
                    myproducts.map((product,idx) => <FavouriteCard 
                        product = {product}
                        key = {idx}
                        refetch = {refetch}
                    ></FavouriteCard>)
                }
            </div>
            
        </div>
    );
};

export default Favourite;