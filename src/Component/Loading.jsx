import React from 'react';
import loading from '../assets/logo-D9NHcesw 1.png'

const Loading = () => {
    return (
        <div>
           <h1 className='text-[80px] blur-[2px] font-bold flex justify-center items-center '>Loa<span> <img className="w-20 h-20 animate-spin" src={loading} alt="Loading" /> </span>ding <span class="dot-1 animate-bounce ml-1">.</span>
  <span class="dot-2 animate-bounce ml-1 [animation-delay:0.2s]">.</span>
  <span class="dot-3 animate-bounce ml-1 [animation-delay:0.4s]">.</span></h1>
            
        </div>
    );
};

export default Loading;