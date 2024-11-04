import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import DropDown from './Dropdown';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white px-3 bg-transparent ">
      <div className="container mx-auto lg:flex justify-between items-center relative z-10">

        <div className="logo-button flex justify-between">
          <Link to="/" className="flex items-center"><img src={logo} alt="logo" className="h-20" /> </Link>
          <button className="block lg:hidden text-black" onClick={toggleMenu} id="navbar-toggler">
            <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`md:visible lg:flex lg:items-center w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} backdrop-blur-sm`} id="navbar-menu">
          <ul className="text-black flex flex-col justify-end md:justify-normal lg:flex-row lg:space-x-4 mt-4 lg:mt-0 transition-all">
            <li className="nav-item">
              <Link to="/" className="block py-2 lg:py-0 px-4 hover:text-sky-600 rounded"> Home </Link>
            </li>
            <li className="nav-item relative group">
              <DropDown />
            </li>
            <li className="nav-item">
              <Link to="/products" className="block py-2 lg:py-0 px-4 hover:text-sky-600 rounded"> Products </Link>
            </li>
            <li className="nav-item">
              <Link to="/insights" className="block py-2 lg:py-0 px-4 hover:text-sky-600 rounded"> Insights </Link>
            </li>
            <li className="nav-item">
              <Link to="/training" className="block py-2 lg:py-0 px-4 hover:text-sky-600 rounded"> Training </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="block py-2 lg:py-0 px-4 hover:text-sky-600 rounded"> Careers </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
