import React, { useState, useEffect } from 'react';
import useData from '../Hook/useData';
import Loading from '../Component/Loading';
import AplicationCard from '../Component/AplicationCard';
import AppNotFound from './AppNotFound';

const Aplication = () => {
  const { data, loading } = useData();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (!search) {
      setFilteredData(data);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // debounce: 300ms delay
    const timer = setTimeout(() => {
      const trimmedSearch = search.trim().toLowerCase();
      const searchResult = data.filter(ap =>
        ap.title.toLowerCase().includes(trimmedSearch)
      );
      setFilteredData(searchResult);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, data]);

  return (
    <div className='bg-[#f5f5f5]'>
      <div className='p-20 text-center'>
        <h1 className='text-[48px] font-semibold mb-5'>Our All Applications</h1>
        <p className='text-[16px] text-[#abb4bb]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className='flex justify-between w-[1700px] mx-auto mb-6'>
        <h1 className='text-[20px] font-semibold'>({filteredData.length}) Apps Found</h1>
        <div>
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {loading || isSearching ? (
        <Loading />
      ) : filteredData.length === 0 ? (
        <AppNotFound />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 ml-18'>
          {filteredData.map(ap => (
            <AplicationCard key={ap.id} ap={ap} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Aplication;
