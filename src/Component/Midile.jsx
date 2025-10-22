import React from 'react';

const Midile = () => {
    return (
        <div className='w-full h-[410px] bg-[#723be7] text-center flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-[48px] font-semibold text-white'>Trusted by Millions, Built for You</h1>
            <div className='flex gap-60'>
                <div>
                    <h1 className='text-[16px] text-white'>Total Downloads</h1>
                    <h1 className='text-[64px] font-bold text-white'>29.6M</h1>
                    <h1 className='text-[16px] text-white'>21% more than last month</h1>
                </div>
                <div>
                    <h1 className='text-[16px] text-white'>Total Reviews</h1>
                    <h1 className='text-[64px] font-bold text-white'>906K</h1>
                    <h1 className='text-[16px] text-white'>46% more than last month</h1>
                </div>
                <div>
                    <h1 className='text-[16px] text-white'>Active Apps</h1>
                    <h1 className='text-[64px] font-bold text-white'>132+</h1>
                    <h1 className='text-[16px] text-white'>31 more will Launch</h1>
                </div>
                
            </div>
            
        </div>
    );
};

export default Midile;