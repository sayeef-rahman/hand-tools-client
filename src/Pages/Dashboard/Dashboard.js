import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 text-center uppercase my-5'>your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side lg:my-5">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    <li><Link to="/dashboard/portfolio">My Portfolio</Link></li>
                    <li><Link to="/dashboard/checkout">Checkout</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;