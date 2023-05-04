import React from 'react';

const RecipeDescription = ({data}) => {
    const {name, ingredients, method, rating}=data;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-12 md:h-auto md:col-span-1"></div>
                    <div className="p-6 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-2">Food Name:{name}</h2>
                        <p className="text-gray-700 mb-4">Ingredients:{ingredients}</p>
                        <p className="text-gray-700 mb-4">M{method}</p>
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2.252v19.496l5.657 3.354-1.06-6.181L22 10.76l-6.364-1.038L12 2.252z"></path><path d="M12 2.252v19.496L6.343 24.102l1.06-6.181L2 10.76l6.364-1.038L12 2.252z"></path></svg>
                            <p className="text-gray-700 font-bold">{rating}</p>
                        </div>
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none">Bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDescription;