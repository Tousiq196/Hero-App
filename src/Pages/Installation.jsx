import React, { useEffect, useState } from 'react';
import downloadimage from '../assets/icon-downloads.png';
import starimage from '../assets/icon-ratings.png';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortapp, setSortapp] = useState('none');

    useEffect(() => {
        const savelist = JSON.parse(localStorage.getItem('install'));
        if (savelist) setInstallation(savelist);
    }, []);
    const parseSize = (size) => parseFloat(size);
    const sortedapp = (() => {
        if (sortapp === 'High to Low') {
            return [...installation].sort((a, b) => parseSize(b.size) - parseSize(a.size));
        } else if (sortapp === 'Low to High') {
            return [...installation].sort((a, b) => parseSize(a.size) - parseSize(b.size));
        }
        return installation;
    })();

    const handleremove = (id)=>{
           const exstinglist = JSON.parse(localStorage.getItem('install'))
            let updatelist = exstinglist.filter(p => p.id !== id)
            setInstallation(updatelist)
            
        localStorage.setItem('install', JSON.stringify(updatelist))

        
    }

    return (
        <div className='bg-[#f5f5f5] min-h-screen'>
            <div className='text-center p-20'>
                <h1 className='text-[48px] font-bold'>Your Installed Apps</h1>
                <p className='text-[20px] font-semibold text-[#87949f]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='flex justify-between mx-20 items-center'>
                <h1 className='text-[24px] font-semibold'>
                    {sortedapp.length} Apps Found
                </h1>
                <select
                    value={sortapp}
                    onChange={(e) => setSortapp(e.target.value)}
                    className='border px-4 py-2 rounded-lg bg-white shadow-sm text-[16px]'
                >
                    <option value='none'>Sort By Size ⬇️</option>
                    <option value='High to Low'>High to Low</option>
                    <option value='Low to High'>Low to High</option>
                </select>
            </div>

            {sortedapp.map((p) => (
                <div key={p.id} className='mb-8 mt-4'>
                    <div className='w-[1730px] h-[112px] bg-white ml-20 rounded-xl flex justify-between items-center p-10 shadow-sm'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-[100px] h-[100px] bg-[#f5f5f5] rounded-xl flex justify-center items-center'>
                                <img className='rounded-xl' src={p.image} alt='app' />
                            </div>

                            <div>
                                <h1 className='text-[20px] font-semibold'>{p.title}</h1>
                                <div className='flex gap-10'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-[16px] h-[16px]' src={downloadimage} alt='download' />
                                        <h1 className='text-[16px] text-green-400 font-semibold'>{p.downloads}</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-[16px] h-[16px]' src={starimage} alt='rating' />
                                        <h1 className='text-[16px] text-orange-500 font-semibold'>{p.ratingAvg}</h1>
                                    </div>
                                    <h1 className='text-[#87949f]'>{p.size}</h1>
                                </div>
                            </div>
                        </div>

                        <button onClick={()=>handleremove(p.id)} className='btn text-white bg-[#00d390]'>Uninstall</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Installation;
