import React from 'react';
import blog from '../../../assets/images/blog-1.jpg';

const NewsBlogs = () => {
    return (
        <div className='mx-3 md:mx-0 mt-16'>
            <h1 className='my-8 text-3xl font-bold'>Our Latest News</h1>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-3'>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={blog} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h5 className='uppercase text-sm'>11 June, 2022</h5>
                        <h2 className="card-title font-semibold">A Beautiful Sunday Morning Renaissance</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos doloribus accusamus corporis exercitationem. Quos a temporibus earum adipisci voluptatibus.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-active btn-neutral uppercase">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={blog} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h5 className='uppercase text-sm'>11 June, 2022</h5>
                        <h2 className="card-title font-semibold">A Beautiful Sunday Morning Renaissance</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos doloribus accusamus corporis exercitationem. Quos a temporibus earum adipisci voluptatibus.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-active btn-neutral uppercase">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={blog} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h5 className='uppercase text-sm'>11 June, 2022</h5>
                        <h2 className="card-title font-semibold">A Beautiful Sunday Morning Renaissance</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos doloribus accusamus corporis exercitationem. Quos a temporibus earum adipisci voluptatibus.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-active btn-neutral uppercase">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsBlogs;