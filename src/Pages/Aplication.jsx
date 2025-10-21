import React, { useState } from 'react';
import useData from '../Hook/useData';
import Loading from '../Component/Loading';
import AplicationCard from '../Component/AplicationCard';
import AppNotFound from './AppNotFound';

const Aplication = () => {
    const [search, setSearch] = useState('');
    const { data, loading } = useData();
    const trimmedSearch = search.trim().toLocaleLowerCase();
    const searchapp = trimmedSearch ? data.filter(ap => ap.title.toLocaleLowerCase().includes(trimmedSearch)) : data;
    console.log(searchapp);
    

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='p-20 text-center'>
                <h1 className='text-[48px] font-semibold mb-5'>Our All Applications</h1>
                <p className='text-[16px] text-[#abb4bb]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div className='flex justify-between w-[1700px] mx-auto'>
                    <h1 className='text-[20px] font-semibold'>({searchapp.length}) Apps Found </h1>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input value={search} onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <Loading></Loading>
                ) : (
                    searchapp.length==0 ?(
                        <AppNotFound></AppNotFound>
                    ):(<div className='grid grid-cols-1 space-y-10 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 ml-18'>
                        {searchapp.map(ap => (
                            <AplicationCard key={ap.id} ap={ap}></AplicationCard>
                        ))}
                    </div>)

                )
            }

        </div>
    );
};

export default Aplication;