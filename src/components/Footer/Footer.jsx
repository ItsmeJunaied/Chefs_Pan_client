import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 py-4">
                <div className="container mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
                    <div>
                        <p className="text-gray-400">© 2023 Chef's Recipe Website. All rights reserved.</p>
                    </div>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-300 mx-4">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 mx-4">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 mx-4">Contact Us</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;