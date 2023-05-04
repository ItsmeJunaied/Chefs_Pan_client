import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div >
                <section className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center text-2xl" id="rulesContainer ">
                    <h1 className="text-center my-8 text-xl">Conseptual Question Answers</h1>
                    <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
                        <ul className="text-sm my-10">
                            <li className="my-4 mt-5">
                                <span className="bg-orange-200 px-2 rounded mx-2">
                                    Questions 1:
                                </span>Tell us the differences between<span className="bg-green-600 text-white px-2 rounded">
                                    uncontrolled</span> and <span className="bg-green-600 text-white px-2 rounded">controlled components.</span>?

                                <ul>
                                    <li><i className="fa-solid fa-hand-point-right" style={{ marginLeft: '90px' }}>
                                    </i> Uncontrolled components are not managed by the software system, while controlled
                                        components are managed and maintained by the system.</li>
                                </ul>
                            </li>
                            <li className="my-4 mt-5">
                                <span className="bg-orange-200 px-2 rounded mx-2">
                                    Questions 2:
                                </span> How to validate React props using<span className="bg-green-600 text-white px-2 rounded">
                                    PropTypes
                                </span>?
                                <ul>
                                    <li><i className="fa-solid fa-hand-point-right" style={{ marginLeft: '90px' }}>
                                    </i>
                                        PropTypes is a built-in library in React that allows you to validate the types of props passed to a component. We can import PropTypes and define propTypes in your component to ensure that the correct data types are passed, catching errors early on in development.
                                    </li>
                                </ul>
                            </li>
                            <li className="my-4 mt-5">
                                <span className="bg-orange-200 px-2 rounded mx-2">
                                    Questions 3:
                                </span>Tell us the difference between<span className="bg-green-600 text-white px-2 rounded">
                                nodejs</span>and<span className="bg-green-600 text-white px-2 rounded">express js.</span>
                                <ul>
                                    <li><i className="fa-solid fa-hand-point-right" style={{ marginLeft: '90px' }}>
                                    </i> Node.js is a server-side runtime environment that executes JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the process of building web applications. It provides a set of tools and features for handling HTTP requests, routing, middleware, and more. In short, Node.js provides the runtime environment for running JavaScript code on the server-side, while Express.js provides a framework for building web applications on top of Node.js.
                                    </li>
                                </ul>
                            </li>
                            <li className="my-4 mt-5">
                                <span className="bg-orange-200 px-2 rounded mx-2">
                                    Questions 4:
                                </span>What is a <span className="bg-green-600 text-white px-2 rounded">custom hook</span> , and why will you create a<span className="bg-green-600 text-white px-2 rounded">custom hook
                                </span>?
                                <ul>
                                    <li><i className="fa-solid fa-hand-point-right" style={{ marginLeft: '90px' }}>
                                    </i>
                                    A custom hook is a JavaScript function that starts with "use" and can be used to share logic between components in React. It allows you to extract reusable logic from a component and encapsulate it in a separate function, making your code more modular and maintainable. Custom hooks can be used for things like API requests, data fetching and caching, state management, and more, helping to simplify your code and make it easier to test and debug.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;