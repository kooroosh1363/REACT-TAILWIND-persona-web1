import React from 'react'
import work from '../assets/phones-hands.avif'





const Works = () => {
  return (
    <div name='work' className='w-full min-h-screen work text-gray-300 bg-gray-900'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='font-bold text-4xl inline border-b-4 text-gray-300 border-teal-600'>Work</p>
            <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New WebSite
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New Design
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New WebSite
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New WebSite
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}

            {/* <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New WebSite
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}

            {/* <div style={{ backgroundImage: `url(${work})`}} className='shadow-lg shadow-[#000] group container rounded-full flex justify-center items-center mx-auto content hover:scale-105 duration-300'>
                <div className='opacity-0 text-center group-hover:opacity-100'>
                    <span className='font-bold text-white tracking-wider uppercase'>
                        New WebSite
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="/">
                            <button className='text-center hover:scale-110 duration-700 opacity-60 rounded-full px-6 py-3 bg-white text-slate-900 font-bold'>
                                Show
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}

            

        </div>
      </div>
    </div>
  )
}

export default Works
