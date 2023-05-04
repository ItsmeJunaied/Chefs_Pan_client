import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import ab1 from '../../../images/ab-1.jpg'
import ab2 from '../../../images/ab-2.jpg'
import ab3 from '../../../images/ab-3.jpg'
import ab4 from '../../../images/ab-4.jpg'
const AboutUs = () => {
    return (
        <div className='background'>
            <h2 className='text-center us'>About Us</h2>
            <div className='flex flex-row ml-80 mr-80 xxx'>
                
                <div>
                    <p className='gallary'>Gallary</p>
                    <h2 className='about-title'>Fresh and local perfect food recipe for you</h2>
                    <div className='border-b-4 w-10 bor'></div>
                    <p className='about-slogan'>This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.</p>
                    <Link to={'/aboutus'}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            About Us
                        </button>
                    </Link>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <img className='ab1' src={ab1} alt="" />
                    </div>
                    <div>
                        <img className='abImg' src={ab2} alt="" />
                        <img className='abImg mt-3' src={ab3} alt="" />
                        <img className='abImg mt-3' src={ab4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;