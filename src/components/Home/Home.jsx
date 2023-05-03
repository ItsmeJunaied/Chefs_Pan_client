import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';


const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className='text-center text-5xl font-bold mt-16'>
                    <h2>Our Hero chef's</h2>
                </div>
                <div className='card mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 container mx-auto mb-10'>
                    {
                        chefsData.map(data => <ChefsCard
                            key={data.id}
                            data={data}
                        ></ChefsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;