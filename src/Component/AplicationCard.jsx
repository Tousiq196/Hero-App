import React from 'react';
import downloadimage from '../assets/icon-downloads.png';
import ratingimage from '../assets/icon-ratings.png';
import { Link } from 'react-router';


const AplicationCard = ({ap}) => {
    
    const {image,reviews,ratingAvg,title,id} = ap;
    return (
      <Link to={`/Appdetails/${id}`}>
        <div className='w-[348px] h-[435px] p-2 space-y-4 bg-white rounded-md shadow-md hover:scale-105 duration-300'>
                    <div className='w-[316px] h-[316px]  rounded-sm ml-[8px] p-4 bg-[#f5f5f5] flex justify-center items-center   '>
                          <img className='rounded-xl w-[250px] h-[250px] ' src={image} alt="App" />
                    </div>
                    <h1 className='text-[20px] font-semibold'>{title}</h1>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex gap-2 justify-center items-center w-[100px] h-[31px] bg-[#d9d9d9] rounded-sm'>
                            <img className='w-[16px] ' src={downloadimage} alt="Downloads" />
                              <h1 className='text-[16px] text-[#388e3c] font-bold'>{reviews}</h1>
                        </div>
                        <div className='flex gap-2 justify-center items-center w-[69px] h-[31px] bg-[#fff0e1] rounded-sm'>
                            <img className='w-[16px]' src={ratingimage} alt="Ratings" />
                            <p className='text-[16px] text-[#ff8811] font-bold'>{ratingAvg}</p>
                        </div>
                    </div>
                    </div>
        </Link>
    );
};

export default AplicationCard;