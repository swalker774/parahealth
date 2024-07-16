import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';

const Navbar = ({ setHeroVisible }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    if (window.innerWidth < 1024) {
      setHeroVisible(nav);
    }
  };

  const handleClose = () => {
    setNav(false);
    setHeroVisible(true);
  };

  return (
    <div className='w-full h-[65px] bg-[#eef2f7] flex justify-between items-center px-28 gap-10 text-[#0a192f] z-50'>
      <div>
        <Link to ="/" onClick={handleClose}>
        <img src={Logo} alt="Logo" style={{ width: '150px' }} />
        </Link>
      </div>
      <ul className='hidden lg:flex space-x-8'>
        <li>
          <Link to="/" onClick={handleClose} className='hover:text-[#5bc4d8]'>Home</Link>
        </li>
        <li>
          <Link to="/30-minutes" onClick={handleClose} className='hover:text-[#5bc4d8]'>30-Minute Stretch</Link>
        </li>
        <li>
          <Link to="/60-minutes" onClick={handleClose} className='hover:text-[#5bc4d8]'>60-Minute Massage</Link>
        </li>
        <li>
          <Link to="/90-minutes" onClick={handleClose} className='hover:text-[#5bc4d8]'>90-Minute Massage</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClose} className='hover:text-[#5bc4d8]'>About Us</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='lg:hidden absolute top-0 right-0 m-6 z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#eef2f7] flex flex-col justify-center items-center'}`}>
        <ul className='space-y-6'>
          <li className='text-4xl'>
            <Link onClick={handleClose} to="/">Home</Link>
          </li>
          <li className='text-4xl'>
            <Link onClick={handleClose} to="/30-minutes">30-Minute Stretch</Link>
          </li>
          <li className='text-4xl'>
            <Link onClick={handleClose} to="/60-minutes">60-Minute Massage</Link>
          </li>
          <li className='text-4xl'>
            <Link onClick={handleClose} to="/90-minutes">90-Minute Massage</Link>
          </li>
          <li className='text-4xl'>
            <Link onClick={handleClose} to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
