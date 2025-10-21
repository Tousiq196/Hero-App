import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hook/useData';
import downloadimage from '../assets/icon-downloads.png';
import ratingimage from '../assets/icon-ratings.png';
import reviwimage from '../assets/icon-review.png';
import Barchart from '../Component/Barchart';

const Appdetails = () => {
    const {id}= useParams();
    const {data}=useData();
    console.log(data);
    const findapp= data.find(p => p.id === parseInt(id));
    console.log(findapp);
    const {title,downloads,ratingAvg,reviews,size,image,companyName}=findapp || {};
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='flex  items-center  gap-10 p-20'>
            <div>
              <img className='w-[350px] h-[350px] bg-amber-50' src={image} alt="App" />

            </div>
            <div>
                <h1 className='text-[32px] font-semibold'>{title}</h1>
                <p className='text-[20px] text-[#87949f]'>Developed by <span className='text-[#9f62f2] font-semibold'>{companyName}</span> </p>
                <p className='border-[#87949f] border-1 w-[1050px] my-10'></p>
                <div className='flex gap-30'>
                    <div >
                        <img className='w-[40px] h-[40px]' src={downloadimage} alt="Downloads" />
                        <p className='text-[16px] mt-2'>Downloads</p>
                        <p className='text-[40px] font-bold'>{downloads}</p>
                    </div>
                    <div>
                        <img className='w-[40px] h-[40px]'src={ratingimage} alt="Ratings" />
                        <p className='text-[16px] mt-2'>Average Ratings</p>
                        <p className='text-[40px] font-bold'>{ratingAvg}</p>
                    </div>
                    <div>
                        <img className='w-[40px] h-[40px]'src={reviwimage} alt="Reviews" />
                        <p className='text-[16px] mt-2'>Total Reviews</p>
                        <p className='text-[40px] font-bold'>{reviews}</p>
                    </div>
                </div>
                <button className='btn text-[20px] bg-[#00d390] text-white my-6'>Install Now ({size})</button>
            </div>
        </div>
       
       <p className=' border-1 w-[1800px] ml-20'></p>
         
         <div className='p-20'>
            <h1 className='text-[30px] font-semibold'> Ratings</h1>
            <div className='bg-base-100  p-4 h-120'>
                <Barchart></Barchart>
            </div>
         </div>

        </div>
    );
};

export default Appdetails;