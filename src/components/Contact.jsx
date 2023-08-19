import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center p-4 contact bg-emerald-900'>

        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='font-bold text-4xl inline border-b-4 border-teal-400 text-gray-400'>Contact</p>
                <p className='py-8 text-gray-400'>Please feel and touch with me.</p>
            </div>

            <input className='rounded-full bg-gray-700 focus:border-blue-500 focus:outline-none focus:bg-gray-800 text-gray-300 py-4 px-4'  type="text" placeholder='John doe ..' name='name' />
            <input className='rounded-full bg-gray-700 focus:border-blue-500 focus:outline-none focus:bg-gray-800 text-gray-300 py-4 px-4' type="email" placeholder='WW@gmail.com' name='email' />
            <textarea name="message" placeholder='Message..' rows="10"></textarea>
            <button>Contact Me</button>
        </form>
      
    </div>
  )
}

export default Contact
