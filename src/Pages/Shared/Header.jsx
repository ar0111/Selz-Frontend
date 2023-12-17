import React from 'react';
import logo from '../../assets/images/selz-1.png';
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import compare from '../../assets/images/compare.svg';
import favorite from '../../assets/images/wishlist.svg';
import account from '../../assets/images/user.svg';
import cart from '../../assets/images/cart.svg';

const Header = () => {
    return (
        <div className='bg-slate'>
            <div className="container mx-auto py-2">
                <div className='flex justify-between text-white text-sm'>
                    <p>Free Shipping Over $100 & Free Returns</p>
                    <p>Hotline: <a href="+18143519592">+18143519592</a></p>
                </div>
            </div>
            <div className='border-b-2 border-silver'></div>
            <div className='container mx-auto py-3'>
                <div className='flex justify-between'>
                    <div className='flex justify-between gap-10 items-center'>
                        <div><img className='w-40' src={logo} alt="logo" /></div>
                        <div className='relative'>
                            <input type="text" placeholder="Search Product Here..." className="input input-bordered input-sm w-full max-w-xs py-5 pe-32" />
                            <span className='absolute top-0 end-0 bg-bermuda p-[13px] rounded-r-lg'><BsSearch></BsSearch></span>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='flex justify-start gap-2'>
                            <img src={compare} alt="" />
                            <p className='text-white'>Compare <br/>Product</p>
                        </div>
                        <div className='flex justify-start gap-2'>
                            <img className='w-10' src={favorite} alt="" />
                            <p className='text-white'>Favourite <br/>Wishlist</p>
                        </div>
                        <div className='flex justify-start gap-2'>
                            <img src={account} alt="" />
                            <p className='text-white'>Login <br/>My Account</p>
                        </div>
                        <div className='flex justify-start gap-4'>
                            <img src={cart} alt="" />
                            <div className='flex items-center'>
                                <span className='text-white'>0</span>
                                <p className='text-white'>$ 500</p>
                            </div>
                        </div>
                        {/* <Link></Link>
                        <Link></Link>
                        <Link></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

