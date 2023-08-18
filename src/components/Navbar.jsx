import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/raad.png';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const clickHandle = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16253a] text-gray-300'>
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
                {!nav ? <FaBars /> : <FaTimes/>}
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
            <div className='hidden'>

            </div>
            {/* social icons */}
        </div>
    )
}

export default Navbar