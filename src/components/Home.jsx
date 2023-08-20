import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pic '>
      <div className='max-w-[1000px] mx-auto h-full flex flex-col justify-center md:place-items-end md:text-center px-8'>
        <p className='text-[#f9f9f9] md:text-xl md:pr-[190px]'>My Name Is</p>
        <h1 className='text-4xl sm:text-7xl font-extrabold text-[60px] text-[#040304]'>Peyman Raad</h1>
        <h2 className='text-4xl sm:text-4xl text-white  font-bold  md:text-[#0d0d0d] md:pr-[28px] '>I Am React Developer &<br></br> Data Scientist</h2>
        <p className='text-[15px] py-4 max-w-[700px] font-bold md:text-lg md:font-bold'>
          Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Optio quo, aspernatur in corrupti <br></br>sunt deserunt rerum soluta! Sapiente,<br></br> doloremque facilis.
        </p>

        <div>
          <button className='bg-teal-600 md:mr-[170px] text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-teal-900 hover:border-teal-600 '>
            Works
            <span className='duration-500'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home