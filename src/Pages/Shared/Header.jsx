import React, { useContext } from 'react';
import logo from '../../assets/images/selz-1.png';
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import compare from '../../assets/images/compare.svg';
import favorite from '../../assets/images/wishlist.svg';
import account from '../../assets/images/user.svg';
import cart from '../../assets/images/cart.svg';
import menu from '../../assets/images/menu.svg';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    return (
        <>
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
                            <div><Link to='/'><img className='w-40' src={logo} alt="logo" /></Link></div>
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
                                {/* <details className="dropdown">
                                    <summary className="">Login <br/>My Account</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/signup'>Register</Link></li>
                                    </ul>
                                </details> */}
                                {
                                    user?.uid? <button className='text-white text-sm' onClick={handleSignOut}>Sign Out</button> : <>
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className="text-white">Login <br/>My Account</div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Register</Link></li>
                                            </ul>
                                        </div>  
                                    </>
                                }
                                        
                            </div>
                            <div className='flex justify-start gap-4'>
                                <img src={cart} alt="" />
                                <div className='flex my-auto flex-col'>
                                    <span className='bg-white px-4 rounded-lg text-sm'>0</span>
                                    <p className='text-white'>$0.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-midnight py-4'>
                <div className='container mx-auto'>
                    <div className='flex justify-start gap-10'>
                        <div className='flex gap-4'>
                            <img src={menu} alt="" />
                            <div className="navbar-center hidden lg:flex text-white items-center">
                                <ul className="menu menu-horizontal p-0 text-base uppercase font-medium">
                                    <li >
                                        <details className='transition duration-700 ease-in-out'>
                                            <summary className='p-0 gap-16'>shop categories</summary>
                                            <ul className="p-2 bg-slate rounded-b-lg rounded-t-none z-[1] w-full">
                                                <li><a>Submenu 1</a></li>
                                                <li><a>Submenu 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <label htmlFor="dashboard-drawer" className="btn btn-white drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        <div className='flex text-white justify-start gap-6 text-sm font-medium	'>
                            <div><Link to='/'>HOME</Link></div>
                            <div><Link>OUR STORE</Link></div>
                            <div><Link to='/blogs'>BLOGS</Link></div>
                            <div><Link to='/contact'>CONTACT</Link></div>
                            {
                                user?.uid? <div><Link to='/dashboard'>DASHBOARD</Link></div> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Header;

