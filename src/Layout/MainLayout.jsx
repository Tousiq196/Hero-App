import React from 'react';
import Navber from '../Component/Navber';
import Fotter from '../Component/Fotter';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import ScrollToTop from '../Component/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <ScrollToTop />
            <Outlet />
            <Fotter />
        </div>
    );
};

export default MainLayout;