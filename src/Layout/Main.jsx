import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared_pages/Footer/Footer';
import Navbar from '../Pages/Shared_pages/Navber/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;