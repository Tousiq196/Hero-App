import React from 'react';
import homeimage from '../assets/logo-D9NHcesw 1.png';
import { Link } from 'react-router';
import gitimage from '../assets/fi_2111432.png';

const Navber = () => {
    return (
      <div className='flex space-x-[600px] ml-[100px] items-center my-6 '>
         <div className='flex justify-center items-center'>
            <img src={homeimage} alt="Home" />
         <h1 className='text-[16px] font-semibold text-[#8e53ee]'>HERO.IO</h1>
         </div>
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