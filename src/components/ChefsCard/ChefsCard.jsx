import React from 'react';

const ChefsCard = ({data}) => {
    return (
        <div>
            <div className='card mt-16 grid grid-cols-3 md:grid-cols-3 gap-4 container ml-24'>
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

export default ChefsCard;