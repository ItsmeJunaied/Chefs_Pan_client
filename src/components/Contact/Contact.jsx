import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='Contact ml-44 mr-44 mt-20 mb-20'>
            <div className=" max-w-md form">
                <form className="bg-transparent shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-2">
                        <label className="block text-gray-700 font-bold mb-1" for="name">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 font-bold mb-1" for="email">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 font-bold mb-1" for="message">
                            Message
                        </label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
                            id="message"
                            placeholder="Message"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;