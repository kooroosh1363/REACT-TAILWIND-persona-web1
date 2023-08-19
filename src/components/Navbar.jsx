import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaGithub, FaKaggle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/raad.png';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const clickHandle = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#385378] text-gray-300'>
            {/* logo */}
            <div>
                <img src={Logo} alt="logo" style={{ width: '140px' }} />
            </div>
            {/* logo */}

            {/* menu */}
            <ul className='md:flex hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>work</li>
                <li>contact</li>
            </ul>

            {/* menu */}




            {/* hamburger menu */}
            <div onClick={clickHandle} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* hamburger menu */}




            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#16253a] flex flex-col justify-center items-center'}>
                <li className='py-5 text-1*1 font-semibold uppercase'>Home</li>
                <li className='py-5 text-1*1 font-semibold uppercase'>About</li>
                <li className='py-5 text-1*1 font-semibold uppercase'>Skills</li>
                <li className='py-5 text-1*1 font-semibold uppercase'>work</li>
                <li className='py-5 text-1*1 font-semibold uppercase'>contact</li>
            </ul>
            {/* mobile menu */}




            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='w-[160px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-full rounded-l-none  duration-500 bg-blue-500'>
                        <a href="/" className='flex justify-between items-center w-full text-white  px-4'>
                        Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[70px] mt-2 flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-full rounded-l-none  duration-500 bg-pink-600'>
                        <a href="/" className='flex justify-between items-center w-full text-white  px-4'>
                        Instagram  <FaInstagram size={60} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[70px]  mt-2  flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-full rounded-l-none  duration-500 bg-gray-600'>
                        <a href="/" className='flex justify-between items-center w-full text-white  px-4'>
                        Github  <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[70px]  mt-2  flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-full rounded-l-none  duration-500 bg-blue-500'>
                        <a href="/" className='flex justify-between items-center w-full text-white  px-4'>
                            Kaggle  <FaKaggle size={30} />
                        </a>
                    </li>
                </ul>
            </div>
            {/* social icons */}
        </div>
    )
}

export default Navbar