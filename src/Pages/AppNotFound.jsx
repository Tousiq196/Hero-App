import React from 'react';
import apperror from '../assets/App-Error.png'
import { Link } from 'react-router';


const AppNotFound = () => {
    return (
               <div className='flex flex-col justify-center items-center space-y-[20px] p-20'>
                   <img src={apperror} alt="Error" />
                   <h1 className='text-[40px] font-bold'>Oops!!APP NOT FOUND</h1>
                   <p>The App you are requesting is not found on our system. please try another apps</p>
                   <Link to="/" className='btn bg-[#9f62f2] text-white text-xl '>Go Back</Link>
               </div>
    );
};

export default AppNotFound;