import React from 'react';
import downloadimage from '../assets/icon-downloads.png';
import ratingimage from '../assets/icon-ratings.png';


const AplicationCard = ({ap}) => {
    console.log(ap);
    const {image,reviews,ratingAvg,companyName} = ap;
    return (
      <div className='w-[348px] h-[435px] p-2 space-y-4 bg-white rounded-md shadow-md'>
                    <div className='w-[316px] h-[316px]  rounded-sm'>
                          <img className='rounded-xl' src={image} alt="App" />
                    </div>
                    <h1>{companyName}</h1>
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
    );
};

export default AplicationCard;