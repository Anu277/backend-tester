import React from 'react';
import { Link } from 'react-router-dom';
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";






const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4"><span className=' border-b-2 border-yellow-400'>About Us</span></h3>
            <p className="text-gray-400">
              We are a leading provider of innovative solutions, dedicated to helping businesses achieve their goals with cutting-edge technology and support.
            </p>
            <div className='flex flex-row my-3 gap-6'>
              <a href='https://www.linkedin.com/company/gloom-dev-pvt-ltd' target='_blank' rel='noreferrer' className='hover:-translate-y-1 hover:scale-150 duration-150'><FaLinkedinIn/></a>
              <a href='https://x.com/GloomDev' target='_blank' rel='noreferrer'  className='hover:-translate-y-1 hover:scale-150 duration-150'><RiTwitterXFill/></a>
              <a href='https://www.instagram.com/gloom_dev/' target='_blank' rel='noreferrer' className='hover:-translate-y-1 hover:scale-150 duration-150'><BsInstagram/></a>
              
            </div>
          </div>
          
          <div className="w-full  md:w-1/3 mb-6 md:mb-0 flex flex-col justify-center md:items-center align-middle">
            <h3 className="text-xl font-bold mb-4"><span className=' border-b-2 border-yellow-400'>Quick Links</span></h3>
            <ul className="text-gray-400 flex gap-4 md:block">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/insights" className="hover:text-gray-300">Insights</Link></li>
              <li><Link to="/training" className="hover:text-gray-300">Training</Link></li>
              <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4"><span className=' border-b-2 border-yellow-400'>Contact Us</span></h3>
            <ul className="text-gray-400">
              <li className='flex gap-3'><IoCallOutline className="text-white text-xl"/>Phone: <a href="tel:+919154882506" target='_blank' rel='noreferrer' className="hover:text-gray-300 underline">+919154882506</a> | <a href="tel:+919154882510" className="hover:text-gray-300 underline">+919154882510</a></li>
              <li className='flex gap-3'><MdOutlineEmail className="text-white text-xl"/>Email: <a href="mailto:info@gloomdev.in" target='_blank' rel='noreferrer' className="hover:text-gray-300">info@gloomdev.in</a></li>
              <li className='flex gap-3'><HiOutlineLocationMarker className="text-white text-2xl"/>Address: <a href="https://maps.app.goo.gl/wWC3ChsjXH5oWNuBA" target='_blank' rel='noreferrer' className="hover:text-gray-300">Plot number 68, 1st floor, Sri hari Gardens, Penamaluru, Vijayawada,521139</a> </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Gloom Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
