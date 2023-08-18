import React from 'react'
import { FaBArs, FaTimes} from 'react-icons/fa';
import Logo from '../assets/raad.png';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300'>
            <div>
                <img src={Logo} alt="logo" style={{width:'140px'}}/>
            </div>
        </div>
    )
}

export default Navbar