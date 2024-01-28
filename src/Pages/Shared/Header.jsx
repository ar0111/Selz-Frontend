import React, { useContext } from 'react';
import logo from '../../assets/images/selz-1.png';
import {BsSearch} from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import compare from '../../assets/images/compare.svg';
import favorite from '../../assets/images/wishlist.svg';
import account from '../../assets/images/user.svg';
import cart from '../../assets/images/cart.svg';
import menu from '../../assets/images/menu.svg';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Components/Loading';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    // const [orderLength, total] = ordersSummary(user?.email);

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://selz-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>
    refetch();

    let orderPrice = 0;
    {   
        for(let i=0; i<orders.length; i++){
            orderPrice += parseInt(orders[i].productPrice)
        }
    }

    let deliveryCharge = orderPrice*0.05;
    let tax = orderPrice * 0.1;
    let total = orderPrice + deliveryCharge + tax;

    let {pathname} = useLocation();
    let subpage = pathname.split('/')?.[1];
    console.log(subpage);

    function Linkness (type = null){
        if(subpage === ''){
            subpage = 'home'
        }

        let classes = 'rounded inline-flex';

        if(type === subpage){
            classes += 'bg-white text-Indigo-400'
        }else{
            classes += 'bg-metal'
        }

        return classes
    }

    return (
        <div className='relative'>
            <div className='bg-slate'>
                <div className="container mx-auto py-2 px-6 md:px-0">
                    <div className='flex justify-between text-white text-sm'>
                        <p>Free Shipping Over $100 & Free Returns</p>
                        <p>Hotline: <a href="+18143519592">+18143519592</a></p>
                    </div>
                </div>

                <div className='border-b-2 border-silver'></div>

                <div className='container mx-auto py-3 px-6 md:px-0'>
                    <div className='flex justify-between'>
                        <div className='flex justify-between gap-10 items-center'>
                            <div><Link to='/'><img className='w-32 md:w-40 ms-12 md:ms-0' src={logo} alt="logo" /></Link></div>
                            <div className='relative hidden md:block'>
                                <input type="text" placeholder="Search Product Here..." className="input input-bordered input-sm w-full max-w-xs py-5 pe-32" />
                                <span className='absolute top-0 end-0 bg-bermuda p-[13px] rounded-r-lg'><BsSearch></BsSearch></span>
                            </div>
                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='flex justify-start gap-2'>
                                <img className='w-7 md:w-8' src={compare} alt="" />
                                <p className='text-white hidden md:block'>Compare <br/>Product</p>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <img className='w-7 md:w-8' src={favorite} alt="" />
                                <p className='text-white hidden md:block'>Favourite <br/>Wishlist</p>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <img className='w-7 md:w-8' src={account} alt="" />
                                {/* <details className="dropdown">
                                    <summary className="">Login <br/>My Account</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/signup'>Register</Link></li>
                                    </ul>
                                </details> */}
                                {
                                    user?.uid? <>
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className="text-white hidden md:block">Welcome, <br/>{user?.displayName}</div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/dashboard'>Profile</Link></li>
                                                <li><button className='text-sm' onClick={handleSignOut}>Sign Out</button></li>
                                            </ul>
                                        </div>  
                                        
                                    </> : <>
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
                                <Link to='/cart'><img className='w-7 md:w-8' src={cart} alt="" /></Link>
                                <div className='my-auto hidden md:block'>
                                    {orders.length > 0 ? <span className='bg-white px-4 rounded-lg text-sm'>{orders.length}</span> : <p className='bg-white px-4 rounded-lg text-sm'>0</p>}
                                    
                                    <p className='text-white'>${total.toFixed(2)}</p>
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
                            <img className='hidden md:block' src={menu} alt="" />
                            <div className="navbar-center hidden lg:flex text-white items-center">
                                <ul className="menu menu-horizontal p-0 text-base uppercase font-medium">
                                    <li >
                                        <details className='transition duration-700 ease-in-out'>
                                            <summary className='p-0 gap-16'>shop categories</summary>
                                            <ul className="p-2 bg-slate rounded-b-lg rounded-t-none z-[1] w-full">
                                                <li><Link to='/'>Home</Link></li>
                                                <li><Link to='/products/6589aa18b4874b6fbdea702d'>Smartphones</Link></li>
                                                <li><Link to='/products/6589aa2cb4874b6fbdea702e'>Laptops</Link></li>
                                                <li><Link to='/products/6589aa3fb4874b6fbdea702f'>Accessories</Link></li>
                                                <li><Link to='/products/6589ace5b4874b6fbdea7030'>Men's Trimmer</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='absolute right-2'>
                            <label htmlFor="dashboard-drawer" className="btn btn-white drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </div>
                        
                        
                        <div className='absolute left-2 top-16'>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-48 text-black leading-10">
                                    <div><Link to='/'>HOME</Link></div>
                                    <div><Link to='/blogs'>BLOGS</Link></div>
                                    <div><Link to='/contact'>CONTACT</Link></div>
                                    {
                                        user?.uid? <div><Link to='/dashboard'>DASHBOARD</Link></div> : ''
                                    }

                                    <div><Link to='/products/6589aa18b4874b6fbdea702d'>Smartphones</Link></div>
                                    <div><Link to='/products/6589aa2cb4874b6fbdea702e'>Laptops</Link></div>
                                    <div><Link to='/products/6589aa3fb4874b6fbdea702f'>Accessories</Link></div>
                                    <div><Link to='/products/6589ace5b4874b6fbdea7030'>Men's Trimmer</Link></div>
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <div className='hidden lg:flex text-white justify-start gap-6 text-sm font-medium	'>
                            <div><Link className={Linkness('home')} to='/'>HOME</Link></div>
                            <div><Link className={Linkness('blogs')} to='/blogs'>BLOGS</Link></div>
                            <div><Link className={Linkness('contact')} to='/contact'>CONTACT</Link></div>
                            {
                                user?.uid? <div><Link className={Linkness('dashboard')} to='/dashboard'>DASHBOARD</Link></div> : ''
                            }
                        </div>

                        <div className='relative md:hidden block'>
                            <input type="text" placeholder="Search Product Here..." className="input input-bordered input-sm w-full max-w-xs py-5 pe-32" />
                            <span className='absolute top-0 end-0 bg-bermuda p-[13px] rounded-r-lg'><BsSearch></BsSearch></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;

