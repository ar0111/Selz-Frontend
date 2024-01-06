import React from 'react';
import Header from '../Pages/Shared/Header';
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {

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
                        <li className='text-black uppercase'><Link className='' to='/dashboard'>Create Categories</Link></li>
                        <li className='text-black uppercase'><Link to='/dashboard/all-users'>All Users</Link></li>
                        <li className='text-black uppercase'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                        <li className='text-black uppercase'><Link to='/dashboard/add-products'>Add Products</Link></li>
                        <li className='text-black uppercase'><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                        <li className='text-black uppercase'><Link>My Orders</Link></li>
                        <li className='text-black uppercase'><Link to='/dashboard/my-products'>My Products</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;