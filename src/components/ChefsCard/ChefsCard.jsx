import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const ChefsCard = ({ data }) => {
    const { id, name, picture, experience, likes, description, num_recipes, recipes } = data;
    return (
        <div>

            <div className="flex flex-col items-center border-2 border-gray rounded-lg shadow md:flex-row md:max-w-xl h-80 ">

                <LazyLoad height={100} offset={100} debounce={false}>
                    <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={picture} alt="" />
                </LazyLoad>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{name}</h5>
                    <p className="mb-3 font-normal text-black">{description}</p>
                    <p>Experience:{experience} years</p>
                    <p>Numbers of recipes:{num_recipes}</p>
                    <p>Likes:{likes}</p>
                    <Link to={`/chefsdata/${id}`}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        View Recipes
                    </button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default ChefsCard;