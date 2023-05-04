import React, { useContext } from 'react';
import logo from'../../../images/Restaurant Logo 3.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error));
        
    }
    return (
        <nav className='nav-bar flex justify-center items-center container mx-auto'>
            <div className="header-logo flex-none">
                <img className='logo w-40 h-40' src={logo} alt="Not found" />
            </div>
            <div className="link-pages  mx-auto">
                <Link className='' to='/home'>Home</Link>
                <Link className='ml-4 ' to='/blog'>Blogs</Link>
                
                <Link className='ml-4' to='/register'>Register</Link>
                {
                    user && <span>{user.email}</span>
                }
                {
                    user ? <button onClick={handleLogout} > log Out</button>:
                    <Link className='mx-4' to='/login'>LogIN</Link>
                }
            </div>

        </nav>
    );
};


export default Navbar;