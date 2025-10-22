import React from 'react';
import Navber from '../Component/Navber';
import Fotter from '../Component/Fotter';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import ScrollToTop from '../Component/ScrollToTop';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='felx flex-col min-h-screen'>
            <Navber />
            <ScrollToTop />
           <div className='flex-1'>
             <Outlet />
           </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored"
            />
            <Fotter />
        </div>
    );
};

export default MainLayout;