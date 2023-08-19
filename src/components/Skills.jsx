import React from 'react'

import HTML from '../assets/1200px-HTML5_Badge.svg.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen skills  bg-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex justify-center flex-col w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Skills</p>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et dolorem minus facilis. Accusantium sint totam laudantium hic, perferendis minima, eius amet dignissimos iure consectetur perspiciatis magnam eos. Corrupti molestias unde asperiores perspiciatis! Reprehenderit error aut at totam facilis repellat!</p>
        </div>

        <div className='w-full text-center py-8'>
            <div>
                <img className='w-20 mx-auto' src={HTML} alt="" />
                <p className='my-4'>HTML</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
