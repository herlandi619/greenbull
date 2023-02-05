import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">Green Bull.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">Home</a></li>
                <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">Company</a></li>
                <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">Resources</a></li>
                <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">About</a></li>
                <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">Contact</a></li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                { !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] duration-500"><a href="#">Home</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] duration-500"><a href="#">Company</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] duration-500"><a href="#">Resources</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] duration-500"><a href="#">About</a></li>
                    <li className="p-4 hover:text-[#00df9a] duration-500"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>

    )
}


export default Navbar;