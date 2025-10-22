import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useData from '../Hook/useData';
import downloadimage from '../assets/icon-downloads.png';
import ratingimage from '../assets/icon-ratings.png';
import reviwimage from '../assets/icon-review.png';
import Barchart from '../Component/Barchart';
import { toast } from 'react-toastify';



const Appdetails = () => {
    const { id } = useParams();
    const { data } = useData();
    const navigate = useNavigate();
    const findapp = data?.find(p => p.id === parseInt(id));
    const { title, downloads, ratingAvg, reviews, size, image, companyName } = findapp || {};
    useEffect(() => {
    if (data.length > 0 && !findapp) {
      navigate('/AppNotFound');
    }
  }, [data, findapp, navigate]);
    const [clicked, setClicked] = useState('')

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('install')) || [];
        const isAlreadyInstalled = savedList.some((p) => p.id === parseInt(id));
        setClicked(isAlreadyInstalled);
    }, [id]);


    const handleAddToInstall = () => {

        toast.success(`${title} installed successfully`)

        const exstinglist = JSON.parse(localStorage.getItem('install'))
        let updatelist = []
        if (exstinglist) {
            const isduplicate = exstinglist.some(p => p.id === findapp.id)
            if (isduplicate) return alert('you already added this app')
            updatelist = [...exstinglist, findapp]
        }
        else {
            updatelist.push(findapp)
        }
        localStorage.setItem('install', JSON.stringify(updatelist))

        setClicked(true);
    }

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
                            <img className='w-[40px] h-[40px]' src={ratingimage} alt="Ratings" />
                            <p className='text-[16px] mt-2'>Average Ratings</p>
                            <p className='text-[40px] font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img className='w-[40px] h-[40px]' src={reviwimage} alt="Reviews" />
                            <p className='text-[16px] mt-2'>Total Reviews</p>
                            <p className='text-[40px] font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToInstall}
                        disabled={clicked}
                        className={`btn text-[20px] my-6 ${clicked ? 'bg-[#00d390] cursor-not-allowed text-white' : 'bg-[#00d390] text-white'
                            }`}
                    >
                        {clicked ? 'Installed' : `Install Now (${size})`}
                    </button>
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