import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
      
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Menu Items */}
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><Link to="/">Hand Tools</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {/* Menu Items */}
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end sm:w-16">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label >
                </div>
        </div>
    );
};

export default Navbar;