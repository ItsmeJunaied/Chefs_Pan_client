import React from 'react';
import logo from '../../../images/Restaurant Logo 3.png'
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
    <div className="w-full md:w-1/3 mb-8 md:mb-0">
      <h3 className="text-white font-bold text-2xl mb-4">Chef's Recipes</h3>
      <p className="text-gray-400 mb-6">Welcome to Chef's Recipes, the ultimate destination for foodies! Here, you'll find an extensive collection of mouth-watering recipes that will satisfy your taste buds and inspire you to get creative in the kitchen.</p>
      <p className="text-gray-400">Follow us on social media for more cooking tips and tricks:</p>
      <ul className="list-none mt-4">
        <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Pinterest</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/3 mb-8 md:mb-0">
      <h3 className="text-white font-bold text-2xl mb-4">Links</h3>
      <ul className="list-none">
        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Recipes</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/3">
      <h3 className="text-white font-bold text-2xl mb-4">Account</h3>
      <p className="text-gray-400 mb-6">Sign up to create your own recipe collections, save your favorite recipes, and share your own creations with the community.</p>
      <div className="flex flex-wrap">
        <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full mr-4 mb-4 md:mb-0">Login</a>
        <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full">Register</a>
      </div>
    </div>
  </div>
  <div className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mt-12"></div>
  <div className="max-w-7xl mx-auto py-4 flex flex-wrap justify-between items-center">
    <div className="flex-shrink-0 w-40 h-40">
      <img src={logo} alt="Logo"/>
    </div>
    <div className="text-gray-400 text-sm">
      &copy; 2023 Chef's Recipes. All rights reserved.
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;