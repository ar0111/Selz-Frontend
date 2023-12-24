import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from '../../../assets/images/brand-01.png';
import brand2 from '../../../assets/images/brand-02.png';
import brand3 from '../../../assets/images/brand-03.png';
import brand4 from '../../../assets/images/brand-04.png';
import brand5 from '../../../assets/images/brand-05.png';
import brand6 from '../../../assets/images/brand-06.png';
import brand7 from '../../../assets/images/brand-07.png';
import brand8 from '../../../assets/images/brand-08.png';

const Brands = () => {
    return (
        <div className='mx-3 md:mx-0 mt-16 bg-white shadow-xl rounded-lg'>
            <Marquee>
                <div className='flex gap-10'>
                    <div>
                        <img src={brand1} alt="" />
                    </div>
                    <div>
                        <img src={brand2} alt="" />
                    </div>
                    <div>
                        <img src={brand3} alt="" />
                    </div>
                    <div>
                        <img src={brand4} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt="" />
                    </div>
                    <div>
                        <img src={brand6} alt="" />
                    </div>
                    <div>
                        <img src={brand7} alt="" />
                    </div>
                    <div>
                        <img src={brand8} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;