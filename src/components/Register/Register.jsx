import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/login-2.jpg'
const LogIN = () => {
    const [error,setError]=useState('');

    const handleRegister=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        const name=form.name.value;

        console.log(name,email,password,photo);

        if(password.length<6){
            setError('password Must be 6 characters')
        }


    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">

                <div className=" md:w-1/2 h-screen hidden md:block login-img">
                    <img src={image} alt="Random Image" className="object-cover object-center h-full w-full" />
                </div>


                <div className="flex flex-col w-full md:w-1/2 p-10">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-gray-900">Register</h2>
                    </div>
                    <form onSubmit={handleRegister} className="mb-4">
                    <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="email">
                                Name
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" name='name' placeholder="Name" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="Email" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="email">
                                Photo URL
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name='photo' placeholder="Photo URL" required/>
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
                        <p className="text-gray-600">Already have an account? 
                        <Link to={'/login'}><buttton className="underline">Register</buttton></Link></p>
                    </div>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default LogIN;