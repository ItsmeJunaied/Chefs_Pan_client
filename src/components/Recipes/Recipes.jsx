import React, { useEffect, useState } from 'react';
import RecipesCard from '../recipesCard/recipesCard';
import { useLoaderData, useParams } from 'react-router-dom';
import './Recipies.css';
const Recipes = () => {

    const chefsData = useLoaderData();
    const {id, name, picture, experience, likes, description, num_recipes, recipes}=chefsData;
    return (
        <div>
            <div className='flex flex-row container mx-auto'>
                <div className='grow'>
                    <h1 className='cook-name'>{name}</h1>
                    <div className='flex flex-row'>
                        <div className='border-b-4 w-10'></div>
                        <div><h3 className='cook-description text-2xl'>Description</h3></div>
                    </div>
                    <p>{description}</p>
                    <div className='flex flex-row mt-2'>
                        <div className='border rounded-md text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Years of Experience</h2>
                            <h2 className='number'>{experience}</h2>
                        </div>
                        <div className='border rounded-md text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Number of Recipes</h2>
                            <h2 className='number'>{num_recipes}</h2>
                        </div>
                        <div className='border  rounded-md text-center font-bold pt-3 border-sky-500 basis-1/4 ml-5 '>
                            <h2 className='border-text'>Likes</h2>
                            <h2 className='number'>{likes}</h2>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className='cook ' src={picture} alt="" />
                </div>
            </div>
            <RecipesCard chefsData={chefsData}></RecipesCard>
            <div>
            </div>
        </div>
    );
};

export default Recipes;