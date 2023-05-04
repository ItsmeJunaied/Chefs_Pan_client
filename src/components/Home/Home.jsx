import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import img from '../../../images/Screenshot_363.png'

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
                <div className='card mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 ml-60 mb-10'>
                    {
                        chefsData.map(data => <ChefsCard
                            key={data.id}
                            data={data}
                        ></ChefsCard>)
                    }
                </div>
            </div>
            <AboutUs></AboutUs>
            <div className='mt-20'>
                <img src={img} alt="" />
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;