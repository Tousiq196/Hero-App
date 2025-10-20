import React from 'react';
import Navber from '../Component/Navber';
import Fotter from '../Component/Fotter';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;