import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pic '>
      <div className='max-w-[1000px] mx-auto ml-28 h-full flex flex-col justify-center  pt-2'>
        <p className='text-[#353639] text-[40px] font-bold'>My Name Is</p>
        <h1 className='text-4xl sm:text-7xl font-extrabold text-[60px] text-[#0d080d]'>Peyman Raad</h1>
        <h2 className='text-4xl sm:text-7xl mb-80 font-bold text-[#252525] text-[25px] '>I Am React Developer & Data Scientist</h2>
      </div>

    </div>
  )
}

export default Home