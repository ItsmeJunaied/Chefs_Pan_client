import React from 'react';
import logo from'../../../images/Restaurant Logo 3.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='nav-bar flex justify-center items-center container mx-auto'>
            <div className="header-logo flex-none">
                <img className='logo w-40 h-40' src={logo} alt="Not found" />
            </div>
            <div className="link-pages  mx-auto">
                <Link className='' to='/home'>Home</Link>
                <Link className='ml-4' to='/blog'>Blogs</Link>
            </div>

        </nav>
    );
};


export default Navbar;