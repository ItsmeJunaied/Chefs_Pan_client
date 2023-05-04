import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDescription from '../recipeDescription/recipeDescription';

const RecipesCard = ({chefsData}) => {
    // const {name, ingredients, method, rating}=chefsData.recipes;
    console.log(chefsData.recipes);
    return (
        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 container mx-auto mb-10 h-50'>
            {
                chefsData.recipes.map(data=><RecipeDescription
                data={data}
                ></RecipeDescription>)
            }
        </div>
    );
};

export default RecipesCard;