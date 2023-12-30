import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import Loading from '../../Components/Loading';

const ProductLists = () => {
    const params = useParams();
    // console.log(params);

    const { data: productList = [], refetch, isLoading } = useQuery({
        queryKey: ['products', params.id],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/products/${params.id}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0'>
                {
                    productList.map((product, idx) => <ProductPage product={product} key={idx}></ProductPage>)
                }
            </div>
            
        </div>
    );
};

export default ProductLists;