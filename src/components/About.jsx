import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen about text-gray-300 bg-gray-800 mb-'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-teal-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi , I Am Peyman ,Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum, assumenda, laudantium magni voluptates libero necessitatibus maxime quas odio, fugit voluptatum dignissimos soluta saepe iste quidem quis ratione hic asperiores?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About