import React from 'react'

import HTML from '../assets/HTML5.png';
import CSS from '../assets/css.png';
import TAILWIND from '../assets/Tailwind.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import JS from '../assets/JavaScript.png';
import REACT from '../assets/React.png';
import DATAS from '../assets/data-science.png';
import ML from '../assets/ml.png';
import GITHUB from '../assets/gitwhite.png';
import WORDPRESS from '../assets/WordPress.png';
import SQL from '../assets/mysql.png';
import SASS from '../assets/sass.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen skills  bg-black'>
      <div className='max-w-[1000px] mx-auto p-8 flex flex-grow  justify-center flex-col w-full min-h-screen text-white'>
        <div className='bg-black'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600 bg-black'>Skills</p>
            <p className='py-4 bg-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et dolorem minus facilis. Accusantium sint totam laudantium hic, perferendis minima, eius amet dignissimos iure consectetur perspiciatis magnam eos. Corrupti molestias unde asperiores perspiciatis! Reprehenderit error aut at totam facilis repellat!</p>
        </div>

        <div className='w-full h-screen text-center py-8  grid  grid-cols-2 sm:grid-cols-4 gap-4 bg-black'>
            <div className='hover:scale-125 duration-500'>
                <img className='w-10 mx-auto md:w-28' src={HTML} alt="icon" />
                <p className='my-4 text-sm'>HTML</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-10 mx-auto md:w-28' src={CSS} alt="icon" />
                <p className='my-2 text-sm'>CSS</p>
            </div>
             <div className='hover:scale-125 duration-500'>
                <img className='w-[45px] mx-auto md:w-28' src={TAILWIND} alt="icon" />
                <p className='my-4 text-sm'>TAILWIND</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[45px] mx-auto md:w-28' src={BOOTSTRAP} alt="icon" />
                <p className='my-4 text-sm'>BOOTSTRAP</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[55px] mx-auto md:w-28' src={JS} alt="icon" />
                <p className='my-4 text-sm'>JS</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[40px] mx-auto md:w-28' src={REACT} alt="icon" />
                <p className='my-4 text-sm'>REACT</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[40px] mx-auto md:w-28' src={DATAS} alt="icon" />
                <p className='my-4 text-sm'>DATA SCIENCE</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[40px] mx-auto md:w-28' src={ML} alt="icon" />
                <p className='my-4 text-sm'>MACHINE LEARNING</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[30px] mx-auto md:w-28' src={GITHUB} alt="icon" />
                <p className='my-4 text-sm'>GITHUB</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[40px] mx-auto md:w-28' src={SQL} alt="icon" />
                <p className='my-4 text-sm'>SQL</p>
            </div>
            <div className='hover:scale-125 duration-500'>
                <img className='w-[55px] mx-auto md:w-28' src={SASS} alt="icon" />
                <p className='my-4 text-sm'>SASS</p>
            </div>
            <div className='hover:scale-125 duration-500 bg-black'>
                <img className='w-[40px] mx-auto md:w-28' src={WORDPRESS} alt="icon" />
                <p className='my-4 text-sm'>WORDPRESS</p>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Skills
