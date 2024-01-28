import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useQuery } from '@tanstack/react-query'

const Blogs = () => {

    // const [datas, setDatas] = useState();

    const { data: blogs = [], refetch, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async()=>{
            const res = await fetch('https://selz-server.vercel.app/blogs');
            const data = await res.json();
            return data;
        }
    })

    // console.log(datas);

    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    blogs.map(data => <BlogCard 
                        data={data} key={data._id}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;