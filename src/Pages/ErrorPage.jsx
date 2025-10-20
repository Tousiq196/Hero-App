import React from 'react';
import img from '../assets/OBJECTS.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[200px] space-y-[20px]'>
            <img src={img} alt="Error" />
            <h1 className='text-[40px] font-bold'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
            <button className='btn bg-[#9f62f2] text-white text-xl '>Go Back</button>
        </div>
    );
};

export default ErrorPage;