import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({children: slide, autoSlide = false, autoSlideInterval = 3000}) => {
    const [curr, setCurr] = useState(0);

    const prev = ()=>{
        setCurr((curr)=> (curr === 0 ? slide.length -1 : curr - 1))
    }
    const next = ()=>{
        setCurr((curr)=> (curr === slide.length -1? 0 : curr + 1))
    }

    useEffect(()=>{
        if(!autoSlide) return ;
        const slideInterval = setInterval(next, autoSlideInterval);
        return ()=> clearInterval(slideInterval)
    }, [])

    return (
        <div className='overflow-hidden relative'>
            <div className='flex w-full transition transform ease-in-out duration-700' style={{transform: `translateX(-${curr * 100}%)`}}>{slide}</div>
            <div className='absolute top-8 left-4 md:top-16 md:left-12'>
                <h4 className='text-sm md:text-base text-amber font-bold'>SUPERCHARGED FOR PROS.</h4>
                <h1 className='py-0 md:py-6 text-2xl md:text-5xl font-semibold'>Special Sale</h1>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link><button className='my-2 md:my-8 btn sm:btn-sm btn-neutral rounded-full px-6'>BUY NOW</button></Link>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        slide.map((_, i)=>(
                            <div className={`
                            transition-all w-3 h-3 bg-white rounded-full
                            ${curr === i ? "p-0" : "bg-opacity-50"}
                            `}>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Carousel;