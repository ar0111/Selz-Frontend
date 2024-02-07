import React, { useContext, useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header';
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [data, setData] = useState({})

    useEffect(()=>{
        if(user?.email){
            fetch(`https://selz-server.vercel.app/users/${user?.email}`)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setData(data);
                })
        }
    },[user?.email])

    // console.log(data);

    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-8 bg-white">
                    {/* Page content here */}
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-gray">
                        {/* Sidebar content here */}
                        <li className='text-black uppercase'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            isAdmin && <>
                                <li className='text-black uppercase'><Link to='/dashboard/addcategories'>Create Categories</Link></li>
                                <li className='text-black uppercase'><Link to='/dashboard/all-users'>All Users</Link></li>
                                <li className='text-black uppercase'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                                <li className='text-black uppercase'><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                            </>
                        }

                        {
                            (isAdmin || data.role === 'Seller') && <>
                                <li className='text-black uppercase'><Link to='/dashboard/add-products'>Add Products</Link></li>
                                <li className='text-black uppercase'><Link to='/dashboard/my-products'>My Products</Link></li>
                            </>
                        }

                        {
                            (isAdmin || data.role === 'Buyer') && <>
                                <li className='text-black uppercase'><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            </>
                        }
                        
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;