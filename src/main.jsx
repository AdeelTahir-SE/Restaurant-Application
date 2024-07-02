import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './Pages/About/About.jsx';
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <><Header /><About /><Footer/></> },
  { path: "/home", element: <><Header/><Home /><Footer/></> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div id="modal"></div>
  </React.StrictMode>
);
