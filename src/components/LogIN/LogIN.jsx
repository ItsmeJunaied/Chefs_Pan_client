import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../images/login-2.jpg'
import { AuthContext } from '../providers/AuthProvider';
const LogIN = () => {
    const {signIN}=useContext(AuthContext)
    const navigate=useNavigate();
    const location =useLocation();

    const from =location.state?.from.pathname ||  '/home'
    const handleLogin=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;


        console.log(email,password);
        signIN(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">

                <div className=" md:w-1/2 h-screen hidden md:block login-img">
                    <img src={image} alt="Random Image" className="object-cover object-center h-full w-full" />
                </div>


                <div className="flex flex-col w-full md:w-1/2 p-10">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-gray-900">Log in</h2>
                    </div>
                    <form onSubmit={handleLogin} className="mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="Email" required/>
                        </div>
                   
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' placeholder="Password" required/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Log In
                            </button>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Or log in with:</span>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                    <i className="fab fa-google"></i> Google
                                </button>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2" type="button">
                                    <i className="fab fa-github"></i> GitHUB
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-6">
                        <p className="text-gray-600">Don't have an account? 
                        <Link to={'/register'}><buttton className="underline">Sign up</buttton></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIN;