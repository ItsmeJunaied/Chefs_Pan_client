import React from 'react';

import './Banner.css';
const Banner = () => {
    return (
        <div className=''>
            <div className='banner container mx-auto text-center'>
                <h2 className='banner-header'><span className='span-1'>Your Personal</span> <span className='span-2'>Chafe</span></h2>
                <p className='banner-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos earum tenetur consequatur
                    tempora a molestias minus in?
                    Blanditiis ex nam ab molestiae, architecto ipsum, est placeat totam necessitatibus vel possimus.</p>
            </div>
            <div className='text-center text-5xl font-bold mt-16'>
                <h2>Our Hero chef's</h2>
            </div>

            <div className='card mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 container ml-24'>
                <div className="flex flex-col items-center border-2 border-gray rounded-lg shadow md:flex-row md:max-w-xl ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;