import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Vector.svg";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Close icon for mobile menu

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className='flex justify-between items-center bg-white h-[79px] xl:px-12 drop-shadow-2xl px-4'>
        {/* Logo */}
        <div className='flex justify-center items-center gap-x-3 font-inspiration text-[30px] font-normal'>
          <img src={logo} className='w-[40px]' alt='brand logo' /> Ik developers
        </div>

        {/* Desktop Menu */}
        <div className='xl:flex gap-10 font-inter hidden'>
          <NavLinkItem to="/about-us" label="About us" />
          <NavLinkItem to="/services" label="Services" />
          <NavLinkItem to="/case-studies" label="Case Studies" />
          <NavLinkItem to="/blog" label="Blog" />
          <NavLinkItem to="/how-it-works" label="How it Works" />
          <NavLinkItem to="/hire" label="Hire" />
        </div>

        {/* Desktop Contact Button */}
        <div className='w-[124px] h-[42px] hidden xl:flex justify-center items-center bg-[#F2F2F2] rounded-[5px] hover:cursor-pointer text-[14px] font-semibold font-inter text-white
          bg-linear-to-bl from-[#6675F7] to-[#57007B] mt-[5px]'>
          Contact us
        </div>

        {/* Mobile Menu Icon */}
        <div className='xl:hidden flex'>
          {menuOpen ? (
            <IoMdClose onClick={toggleMenu} className='text-[30px] text-[#4A5568] hover:cursor-pointer' />
          ) : (
            <LuMenu onClick={toggleMenu} className='text-[30px] text-[#4A5568] hover:cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-[79px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 xl:hidden z-50'>
          <NavLinkItem to="/about-us" label="About us" onClick={toggleMenu} />
          <NavLinkItem to="/services" label="Services" onClick={toggleMenu} />
          <NavLinkItem to="/case-studies" label="Case Studies" onClick={toggleMenu} />
          <NavLinkItem to="/blog" label="Blog" onClick={toggleMenu} />
          <NavLinkItem to="/how-it-works" label="How it Works" onClick={toggleMenu} />
          <NavLinkItem to="/hire" label="Hire" onClick={toggleMenu} />
          <div className='w-[124px] h-[42px] flex justify-center items-center bg-[#F2F2F2] rounded-[5px] hover:cursor-pointer text-[14px] font-semibold font-inter text-white
            bg-linear-to-bl from-[#6675F7] to-[#57007B] mt-[5px]'>
            Contact us
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for NavLink
const NavLinkItem = ({ to, label, onClick }) => (
  <div className='font-medium text-[16px] text-[#4A5568]'>
    <NavLink to={to} onClick={onClick}>
      {label}
    </NavLink>
  </div>
);

