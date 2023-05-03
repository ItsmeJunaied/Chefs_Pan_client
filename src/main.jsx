import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Common from './Layouts/Common/Common.jsx';
import Blog from './components/BLogs/Blog.jsx';
import Home from './components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from './components/Recipes/Recipes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children:[
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'recipe',
      element:<Recipes></Recipes>
    },
    {
      path:'home',
      element:<Home></Home>,
      loader: ()=>fetch(`http://localhost:5000/chefsdata`)
    },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
