import React, { useEffect, useState } from 'react';
import RecipesCard from '../recipesCard/recipesCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {

    const chefsData = useLoaderData();
    const {id, name, picture, experience, likes, description, num_recipes, recipes}=chefsData;
    return (
        <div>
            <div class="bg-gray-200 py-8 md:py-16">
                <div class="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4">
                    <div class="md:w-1/3 mb-4 md:mb-0">
                        <img class="w-full h-auto rounded-full" src={picture} alt="Chef Picture" />
                    </div>
                    <div class="md:w-2/3">
                        <h2 class="text-2xl md:text-4xl font-bold mb-2">{name}</h2>
                        <p class="text-gray-700 mb-4">{description}</p>
                        <div class="flex flex-wrap mb-4">
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Likes</p>
                                <p class="text-2xl font-bold">{likes}</p>
                            </div>
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Number of Recipes</p>
                                <p class="text-2xl font-bold">{num_recipes}</p>
                            </div>
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Years of Experience</p>
                                <p class="text-2xl font-bold">{experience}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                chefsData.map(data=><RecipesCard
                key={id}
                data={data}
                ></RecipesCard>)
            }
            
            <div>
            </div>
        </div>
    );
};

export default Recipes;