import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({data}) => {

    const {btnText, commentCount, desc, imgAlt, imgUrl, metaList, title, _id} = data;

    return (
        <div className="w-auto bg-base-100 shadow-xl rounded-lg p-6">
            <figure><img className='w-full' src={imgUrl} alt={imgAlt} /></figure>
            <div>
                <h4 className='mt-4 text-2xl font-bold'>{title}</h4>
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
            </div>

            <div className="mt-4">
                <p>{desc}</p>
            </div>

            <hr className="my-4 border-b-1 border-gray" />

            <Link to={`/blogs/${_id}`}><div className="flex items-center gap-2">
                <button className="font-semibold">{btnText}</button>
                <FiExternalLink style={{color: "#eaba0b",}} />
            </div></Link>
        </div>
    );
};

export default BlogCard;