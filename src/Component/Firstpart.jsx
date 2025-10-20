import React from 'react';
import playstore from '../assets/fi_16076057.png';
import appstore from '../assets/fi_5977575.png';
import mobileimage from '../assets/hero.png';



const Firstpart = () => {
    return (
         <div className='bg-[#f5f5f5] w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center space-y-10 mt-[100px] '>
                    <h1 className='text-[72px] font-semibold text-center'>We Build <br></br> <span className='text-[#8148eb]'>Productive</span> Apps</h1>
                    <p className='text-[20px] text-[#87949f] text-center w-[1000px]'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div>
                        <a href="https://play.google.com/store/games?hl=en&pli=1" className="btn mr-4">  <img src={playstore} alt="Play Store" /> Google Play</a>
                        <a href="https://www.apple.com/app-store/" className="btn mr-4">  <img src={appstore} alt="App Store" />App Store</a>
        
                    </div>
                    <img src={mobileimage} alt="Mobile" />
                </div>

                
                
                 
                </div>
    );
};

export default Firstpart;