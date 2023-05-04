import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='Contact ml-40 mr-40'>
            <div class=" max-w-md form">
                <form class="bg-transparent shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-2">
                        <label class="block text-gray-700 font-bold mb-1" for="name">
                            Name
                        </label>
                        <input className='input'
                            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-700 font-bold mb-1" for="email">
                            Email
                        </label>
                        <input className='input'
                            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-700 font-bold mb-1" for="message">
                            Message
                        </label>
                        <textarea className='input'
                            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Message"
                            rows="3"
                        ></textarea>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                        <a
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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