import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/home.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    children: []
  }
])

root.render(
  <RouterProvider router={router}></RouterProvider>
);


reportWebVitals();
