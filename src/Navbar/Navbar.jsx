import React, { useState } from 'react';
import { DiRuby } from "react-icons/di";
import { Link } from 'react-router-dom';
import { FaAlignRight,FaX } from "react-icons/fa6";
import Darkmode from '../components/Darkmode/Darkmode';



const Navbar = () => {
    const [nav, setNav] = useState(false);

    // console.log(nav);

    const handleIcon = () => {
        setNav(!nav);
    }
    return (
      <div className="w-full bg-orange-500 h-20 flex justify-between items-center px-12 text-white">
        <h1 className="text-5xl font-bold w-full">
          <DiRuby></DiRuby>
        </h1>
        <ul className="md:flex hidden">
          <li className="bg-blue-400 px-8 py-1 mx-2 rounded-full hover:bg-emerald-400 hover:text-black duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-blue-400 px-8 py-1 mx-2 rounded-full hover:bg-emerald-400 hover:text-black duration-500">
            <Link to="/products">Products</Link>
          </li>
          <li className="bg-blue-400 px-8 py-1 mx-2 rounded-full hover:bg-emerald-400 hover:text-black duration-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="bg-blue-400 px-8 py-1 mx-2 rounded-full hover:bg-emerald-400 hover:text-black duration-500">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-blue-400 px-8 py-1 mx-2 rounded-full hover:bg-emerald-400 hover:text-black duration-500">
            <Darkmode></Darkmode>
          </li>
        </ul>

        {/* threebar and close Icon */}

            <div className="block w-full md:hidden flex items-center justify-evenly" onClick={handleIcon}>
          <div className='border px-4 rounded-full'>
            <Darkmode></Darkmode>
          </div>
                
            {nav ? <FaX></FaX> : <FaAlignRight></FaAlignRight>}
        </div>

        <ul
          className={
            nav
              ? "fixed md:hidden mx-auto left-0 top-0 bottom-0 bg-red-900 w-[60%] h-screen border-r ease-in-out duration-500"
              : "fixed top-0 bottom-0 left-[-100%] ease-in-out duration-500 w-[60%]"
          }
        >
          <h1 className="text-5xl font-bold w-full pl-12  pt-4">
            <DiRuby></DiRuby>
          </h1>
          <li className="border-b rounded-full hover:bg-emerald-400 my-2 text-center hover:text-black duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b rounded-full hover:bg-emerald-400 my-2 text-center hover:text-black duration-500">
            <Link to="/products">Products</Link>
          </li>
          <li className="border-b rounded-full hover:bg-emerald-400 my-2 text-center hover:text-black duration-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="border-b rounded-full hover:bg-emerald-400 my-2 text-center hover:text-black duration-500">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
};

export default Navbar;