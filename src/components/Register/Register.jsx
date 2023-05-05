
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/login-2.jpg'
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const [error,setError]=useState('');
    const{createUser}= useContext(AuthContext);
    const handleRegister=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        const name=form.name.value;

        console.log(photo);
        setError('');
        if(password.length<6){
            setError('password Must be 6 characters')
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            updateUserProfile(result.user,name,photo);
            
            
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }

    const updateUserProfile=(user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL: photo
        })
        .then(()=>{
            console.log('updated')
        })
        .catch(()=>{
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">

                <div className=" md:w-1/2 h-screen hidden md:block login-img">
                    <img src={image} alt="Random Image" className="object-cover object-center h-full w-full" />
                </div>


                <div className="flex flex-col w-full md:w-1/2 p-10 mt-16">
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
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 mb-24">
                        <p className=" text-red-600">Already have an account? 
                        <Link to={'/login'}><buttton className="underline">Log IN</buttton></Link></p>
                    </div>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};


export default Register;