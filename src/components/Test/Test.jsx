import React from 'react';
import './Test.css';
import cook from '../../../images/pexels-cottonbro-studio-3692859.jpg'

const Test = () => {
    return (
        <div>
            <div className='flex flex-row container mx-auto'>
                <div className='grow'>
                    <h1 className='cook-name'>Norten Macro</h1>
                    <div className='flex flex-row'>
                        <div className='border-b-4 w-10'></div>
                        <div><h3 className='cook-description'>Description</h3></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex flex-row mt-2'>
                        <div className='border text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Years of Experience</h2>
                            <h2 className='number'>5000</h2>
                        </div>
                        <div className='border text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Number of Recipes</h2>
                            <h2 className='number'>5000</h2>
                        </div>
                        <div className='border text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Likes</h2>
                            <h2 className='number'>5000</h2>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className='cook ' src={cook} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Test;