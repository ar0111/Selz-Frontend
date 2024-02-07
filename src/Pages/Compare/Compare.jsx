import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import CompareCard from './CompareCard';
import Empty from './Empty';


const Compare = () => {

    const {user} = useContext(AuthContext);

    const { data: myproducts = [], refetch, isLoading } = useQuery({
        queryKey: ['compareproduct', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://selz-server.vercel.app/compareproduct/${user?.email}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })

    console.log(myproducts.length);

    return (
        <>
            <h1 className='container mx-auto my-10 text-3xl uppercase font-semibold'>Products for Compare</h1>
            {
                myproducts.length > 0 ?<div className='container mx-auto my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6 md:px-0'>
                    {
                        myproducts.map((product,idx) => <CompareCard 
                        product = {product}
                        key = {idx}
                        refetch = {refetch}
                        ></CompareCard>)
                    }
                    </div>
                </div>: <Empty></Empty>
            }
        </>
        
    );
};

export default Compare;