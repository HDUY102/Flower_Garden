'use client'
import React, { useState } from "react";
import { FaCartShopping, FaHeart, FaCircleUser } from "react-icons/fa6";
import style from "@/app/style/Header.module.css";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleCloseNav = () => {
    setNav(false);
  };
  return (
    <div>
      <header className={style.header}>
        <div>
          <a href={"/"} className="font-bold text-2xl">
            <h1 className={style.logo}>
              Flower <span>Garden</span>
            </h1>
          </a>
        </div>
        <nav className={`${style.navbar} ${nav ? style.active : ''}`}>
          <a href="#home" onClick={handleCloseNav}>Home</a>
          <a href="#about" onClick={handleCloseNav}>About</a>
          <a href="#product" onClick={handleCloseNav}>Product</a>
          <a href="#review" onClick={handleCloseNav}>Review</a>
        </nav>
        <div className={style.icons}>
          <a href="#"><FaCartShopping/></a>
          <a href="#"><FaHeart/></a>
          <a href="#"><FaCircleUser/></a>
        </div>
        {/* mobile button */}
        <div onClick={handleNav} className={`${style.toggle} block sm:hidden z-10`}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* <div onClick={handleNav} className="block sm:hidden z-10">
        <div onClick={handleNav} className={style.toggle}>
          {nav ? <AiOutlineClose size={20} className="text-white"/> : <AiOutlineMenu size={20} className=""/>}
        </div> */}
        {/* mobile menu */}
        {/* <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300':
            'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
          <ul className="gap-x-20 items-center font-extralbold p-2 text-white">
            <li className="hover:text-pink-400">Home</li>
            <li className="hover:text-pink-400">About</li>
            <li className="hover:text-pink-400">Product</li>
            <li className="hover:text-pink-400">Review</li>
            <li className="hover:text-pink-400">Contact Us</li>
          </ul>
        </div> */}
      </header>
    </div>
  );
};

export default Header;
