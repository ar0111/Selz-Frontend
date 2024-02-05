import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const SingleBolg = () => {

    const params = useParams();
    // console.log(params);
    const [desireProduct, setDesireProduct] = useState(null);
    // console.log('desigre Product', desireProduct);

    const { data: blog = [], refetch, isLoading } = useQuery({
        queryKey: ['blogs', params.id],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/blogs/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    const {btnText, commentCount, desc, imgAlt, imgUrl, metaList, title, _id} = blog;

    // console.log(productList);

    if(isLoading) return <Loading></Loading>

    return (
        <div className='container mx-auto my-10'>
            <div className='flex items-center justify-center'>
                <div className='w-full md:w-1/2 bg-base-100 shadow-xl'>
                    <figure><img className='w-full' src={imgUrl} alt={imgAlt} /></figure>
                    
                    <div className='p-6 my-10'>
                        <h4 className='text-3xl font-bold'>{title}</h4>
                        <div className='flex gap-10'>
                            <div className='flex items-center gap-1 mt-4'>
                                <FaUser style={{color: "#eaba0b",}} />
                                <h1>{metaList[0].text}</h1>
                            </div>

                            <div className='flex items-center gap-1 mt-4'>
                                <SlCalender style={{color: "#eaba0b",}}/>
                                <h1>{metaList[1].text}</h1>
                            </div>
                        </div>
                        <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis repudiandae perspiciatis incidunt minima est fugiat quaerat amet necessitatibus eaque, ex tempore! Odio iusto cupiditate, exercitationem autem facilis culpa accusantium rerum ea dolorem inventore debitis unde dolorum aliquam illum? Quam dolores voluptates consequatur qui sequi sunt minus dolor tempora molestiae numquam, rerum velit quisquam cum illum quibusdam fuga doloribus perspiciatis. Deleniti, quia? Voluptate sunt dicta delectus iure, veritatis commodi dignissimos vero fugiat facere nobis ab fuga aperiam sed et architecto minima ex aut cum repudiandae nam recusandae veniam deserunt non odio! Nihil cum sed dolor earum ullam labore dignissimos harum iusto.</p>

                        <blockquote className='mt-6 bg-amber-500 p-10'>
                            <p className='text-2xl'><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum illum atque accusantium non quis magni mollitia corporis aperiam cum?</i></p>
                            <cite><i>...Melissa Hunter</i></cite>
                        </blockquote>

                        <p className='my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos architecto incidunt rerum obcaecati quis culpa, accusamus nostrum, unde doloremque temporibus aperiam quisquam ex vero libero tenetur illum iure sint aut? Est enim praesentium, vitae quisquam recusandae laboriosam minima similique cum, cupiditate error ut nulla alias inventore, nobis perspiciatis consectetur tempore repellat. Voluptatem facere provident laborum corrupti aperiam eveniet minus illum beatae quas nihil corporis, nisi tempore. Qui, ex dolores impedit, accusantium ipsam expedita ea quia maxime aliquid quibusdam esse omnis.</p>

                        <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                        <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam blanditiis reprehenderit ratione sunt excepturi officiis hic delectus sequi, esse placeat adipisci mollitia vitae repudiandae officia. Qui, animi voluptatibus, explicabo id molestiae nostrum saepe distinctio non magni autem quibusdam, debitis nobis accusantium consectetur assumenda nemo! Laboriosam, velit in? Maxime, necessitatibus.</p>

                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />

                        <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis quas, eveniet voluptatem ipsam repellat iusto incidunt velit dicta id ad eos veniam autem, asperiores aut praesentium voluptatum reprehenderit corporis quam non consequatur! Aut dolorum, aspernatur voluptatum laudantium iure temporibus incidunt eius quibusdam, amet ipsa impedit ea nihil sapiente doloribus in quidem vel laborum. Distinctio iste porro recusandae ducimus laborum!</p>

                        <hr className="border-b-1 border-gray" />

                        <div className='mt-6'>
                            <ul className='flex gap-4'>
                                <li className='border border-b-1 border-gray px-4 py-1 hover:bg-amber-500'>
                                    <a href="#">Agency</a>
                                </li>
                                <li className='border border-b-1 border-gray px-4 py-1 hover:bg-amber-500'>
                                    <a href="#">Business</a>
                                </li>
                                <li className='border border-b-1 border-gray px-4 py-1 hover:bg-amber-500'>
                                    <a href="#">Personal</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleBolg;