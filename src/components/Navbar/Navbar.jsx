import React, { useContext } from 'react';
import logo from '../../../images/Restaurant Logo 3.png';
import './Navbar.css';
import { AuthContext } from '../providers/AuthProvider';
import ActiveLInk from '../ActiveLink/ActiveLInk';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));

    }
    console.log(user);
    return (
        <nav className='nav-bar flex justify-evenly items-center container mx-auto'>
            <div className="header-logo flex-none">
                <img className='logo w-40 h-40' src={logo} alt="Not found" />
            </div>
            <div className="link-pages flex justify-evenly  mx-auto">
                <ActiveLInk className=' links mr-10' to='/'>Home</ActiveLInk>
                <ActiveLInk className='mr-10' to='/blog'>Blogs</ActiveLInk>

                {
                    user ? null : <ActiveLInk className='' to='/register'>Register</ActiveLInk>
                }



                {
                    user && <img className="w-10 h-10 rounded-full ml-10" src={user.photoURL} title={user.displayName} alt="User avatar" />
                }
                {
                    user ? <button className='ml-10' onClick={handleLogout} > log Out</button> :
                        <ActiveLInk className='ml-10' to='/login'>LogIN</ActiveLInk>
                }
            </div>

        </nav>
    );
};


export default Navbar;