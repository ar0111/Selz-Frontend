import React from 'react';
import subBanner1 from '../../../assets/images/subbanner-01.png';
import subBanner2 from '../../../assets/images/subbanner-02.png';
import subBanner3 from '../../../assets/images/subbanner-03.png';
import subBanner4 from '../../../assets/images/subbanner-04.png';


const SubBanner = () => {
    return (
        <div className='my-16'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0'>

                <div className="card bg-black shadow-2xl">
                    <div className="card-body p-0 m-10">
                        <div className='flex flex-col'>
                            <div className=''>
                                <h5 className='text-sm uppercase text-neutral-50'>big screen</h5>
                                <h1 className='text-2xl text-white py-3 font-semibold'>Smart Watch Series 7</h1>
                                <p className='text-neutral-50'>From $399or $16.62/mo. for 24 mo.*</p>
                            </div>

                            <div className='mt-6'>
                                <img className='w-auto rounded-lg hover:scale-105 transition ease-in-out duration-500' src={subBanner1} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>    

                <div className="card shadow-2xl">
                    <div className="card-body p-0 m-10">
                        <div className='flex flex-col space-y-20'>
                            
                            <div className=''>
                                <h5 className='text-sm uppercase text-slate-400	'>Studio Display</h5>
                                <h1 className='text-2xl text-black py-3 font-semibold'>600 nits of brightness.</h1>
                                <p className='text-slate-400'>17-inch 5K Retina display</p>
                            </div>

                            <div className='mt-6'>
                                <img className='w-auto rounded-lg hover:scale-105 transition ease-in-out duration-500' src={subBanner2} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="card shadow-2xl relative">
                    <div className="card-body p-0 m-10">
                        <div className='flex flex-col'>

                            <div className=''>
                                <h5 className='text-sm uppercase text-slate-400	'>smartphones</h5>
                                <h1 className='text-2xl text-black py-3 font-semibold'>Smartphone 13 Pro.</h1>
                                <p className='text-slate-400'>Now in Green. From $999.00 or $41.62/mo.for 24 mo. Footnote*</p>
                            </div>

                            <div className='md:absolute md:bottom-0 mt-6'>
                                <img className='w-auto rounded-lg hover:scale-105 transition ease-in-out duration-500' src={subBanner3} alt="" />
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>

                <div className="card shadow-2xl">
                    <div className="card-body p-0 m-10">
                        <div className='flex flex-col'>
                            
                            <div className=''>
                                <h5 className='text-sm uppercase text-slate-400	'>home speakers</h5>
                                <h1 className='text-2xl text-black py-3 font-semibold'>Room-filling sound.</h1>
                                <p className='text-slate-400'>From $699 or $116.58/mo. for 12 mo.*</p>
                            </div>

                            <div className='mt-6'>
                                <img className='w-auto rounded-lg hover:scale-105 transition ease-in-out duration-500' src={subBanner4} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
         
    );
};

export default SubBanner;