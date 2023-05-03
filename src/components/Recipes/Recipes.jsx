import React from 'react';

const Recipes = () => {
    return (
        <div>
            <div class="bg-gray-200 py-8 md:py-16">
                <div class="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4">
                    <div class="md:w-1/3 mb-4 md:mb-0">
                        <img class="w-full h-auto rounded-full" src="https://via.placeholder.com/150" alt="Chef Picture" />
                    </div>
                    <div class="md:w-2/3">
                        <h2 class="text-2xl md:text-4xl font-bold mb-2">Chef Name</h2>
                        <p class="text-gray-700 mb-4">A short bio/description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="flex flex-wrap mb-4">
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Likes</p>
                                <p class="text-2xl font-bold">25,000</p>
                            </div>
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Number of Recipes</p>
                                <p class="text-2xl font-bold">3</p>
                            </div>
                            <div class="w-full md:w-1/3 text-center">
                                <p class="text-gray-700 font-bold">Years of Experience</p>
                                <p class="text-2xl font-bold">20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;