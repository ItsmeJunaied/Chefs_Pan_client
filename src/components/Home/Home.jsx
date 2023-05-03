import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';


const Home = () => {
    const chefsData=useLoaderData();
    console.log(chefsData);
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className='text-center text-5xl font-bold mt-16'>
                <h2>Our Hero chef's</h2>
            </div>
               {
                chefsData.map(data=><ChefsCard
                key={data.id}
                data={data}
                ></ChefsCard>)
               }
            </div>
        </div>
    );
};

export default Home;