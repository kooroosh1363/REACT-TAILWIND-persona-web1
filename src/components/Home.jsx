import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pic '>
      <div className='max-w-[1000px] mx-auto  h-full flex flex-col justify-center px-8'>
        <p className='text-[#353639]  '>My Name Is</p>
        <h1 className='text-4xl sm:text-7xl font-extrabold text-[60px] text-[#0d080d]'>Peyman Raad</h1>
        <h2 className='text-4xl sm:text-7xl  font-bold text-[#252525] '>I Am React Developer & Data Scientist</h2>
        <p className='text-[#353639] py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo, aspernatur in corrupti sunt deserunt rerum soluta! Sapiente, doloremque facilis.
        </p>

        <div>
          <button className='bg-teal-600 text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-teal-900 hover:border-teal-600 '>
            Works
            <span className='duration-500'>
              <HiArrowNarrowRight className='ml-4'/>
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home