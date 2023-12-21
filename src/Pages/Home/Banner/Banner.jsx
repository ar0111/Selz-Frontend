import React from 'react';
import banner from '../../../assets/images/main-banner-1.jpg';
import banner1 from '../../../assets/images/main-banner.jpg';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const slides = [
    banner,
    banner1
]

const Banner = () => {
    return (
        <div className='w-auto mx-4 md:mx-0'>
            <Carousel autoSlide={true}>
                {
                    slides.map((s,i)=>(
                        <img className='rounded-lg w-full' key={i} src={s} alt="" />
                    ))
                }
            </Carousel>
            
        </div>
    );
};

export default Banner;