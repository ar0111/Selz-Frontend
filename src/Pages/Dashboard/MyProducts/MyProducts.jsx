import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard';
import Loading from '../../../Components/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const { data: myproducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/myproducts/${user?.email}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6 md:px-0'>
                {/* {
                    myproducts.map((product, idx) => <ProductCard product={product} key={idx}></ProductCard>)
                } */}
                {
                    myproducts.map((product,idx) => <ProductCard 
                        product = {product}
                        key = {idx}
                        refetch = {refetch}
                    ></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default MyProducts;