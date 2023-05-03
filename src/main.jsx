import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './Layouts/Common/Common.jsx';
import Blog from './components/BLogs/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children:[{
      path:'blog',
      element:<Blog></Blog>
    },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
