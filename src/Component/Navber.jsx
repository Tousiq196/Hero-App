import React from 'react';
import homeimage from '../assets/logo-D9NHcesw 1.png';
import { Link } from 'react-router';
import gitimage from '../assets/fi_2111432.png';

const Navber = () => {
    return (
      <div className='flex space-x-[600px] ml-[100px] items-center my-6 '>
        <Link to="/">
            <div className='flex items-center gap-2'>
                <img className='w-[40px] h-[40px]' src={homeimage} alt="Logo" />
                <h1 className='text-[24px] font-bold'>Hero Apps</h1>
            </div>
        </Link>
         <div className='flex gap-8 font-semibold text-[20px]'>
             <Link to="/">Home</Link>
             <Link to="/Apps">Apps</Link>
             <Link to="/installation">Installation</Link>
         </div>
         <div>
            <button className='btn bg-[#8e53ee] text-white'>   <img src={gitimage} alt="GitHub" /> Contribute</button>
            
         </div>
      </div>
      
    );
};

export default Navber;