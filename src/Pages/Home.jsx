import React from 'react';
import Firstpart from '../Component/Firstpart';
import useData from '../Hook/useData';
import Loading from '../Component/Loading';
import AplicationCard from '../Component/AplicationCard';
import { Link } from 'react-router';

const Home = () => {
  const { data, loading, error } = useData();
  const featureapp= data.slice(0,8)

  return (
    <div className='bg-[#f5f5f5]'>
      <Firstpart />

      <div>
        <div className='mt-[80px] space-y-10'>
            <h1 className='text-[48px] font-semibold text-center' >Trending Apps</h1>
            <p className=' text-[16px] text-[#abb4bb] text-center'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        {
            loading ? (
                <Loading></Loading>
            ): (
               <div className='grid grid-cols-1 space-y-10 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 ml-[100px]'>
          {featureapp.map(ap => (
                    <AplicationCard key={ap.id} ap={ap}></AplicationCard>
                ))}
        </div>
            )
        }

      </div>
      
       <Link to="/Apps">
        <div className='flex justify-center items-center  p-10'>
            <button className='btn bg-[#8148eb] text-white text-[20px] '>See All Apps</button>
        </div>
       </Link>
     
    </div>
  );
};

export default Home;
