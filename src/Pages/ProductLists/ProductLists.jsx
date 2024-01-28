import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import Loading from '../../Components/Loading';
import EmptyProduct from './EmptyProduct';
import BookingModal from './BookingModal';

const ProductLists = () => {
    const params = useParams();
    // console.log(params);
    const [desireProduct, setDesireProduct] = useState(null);
    // console.log('desigre Product', desireProduct);

    const { data: productList = [], refetch, isLoading } = useQuery({
        queryKey: ['products', params.id],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/products/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    // console.log(productList);

    if(isLoading) return <Loading></Loading>

    if(!productList.length) return <EmptyProduct></EmptyProduct>

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-10 ps-6 md:ps-0'>All {productList[0].category} List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0'>
                {   
                    productList.map((product, idx) => <ProductPage 
                        product={product} 
                        key={product.id}
                        setDesireProduct={setDesireProduct}
                        refetch={refetch}
                    ></ProductPage>)
                }
            </div>
            
            {
                desireProduct && <BookingModal
                    desireProduct={desireProduct}
                    setDesireProduct={setDesireProduct}
                    refetch={refetch}
                ></BookingModal>
            }
            
            
        </div>
    );
};

export default ProductLists;