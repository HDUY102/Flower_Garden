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
  return (
    // <div className="fixed left-0 w-full z-10 ease-in duration-300 ">
    <div>
      {/* <header className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-black shadow-lg z-1000"> */}
      <header className={style.header}>
        <div>
          <a href={"/"} className="font-bold text-2xl">
            <h1 className={style.logo}>
              Flower <span>Garden</span>
            </h1>
          </a>
        </div>
        {/* <ul className="gap-x-32 items-center font-extralbold p-1 hidden sm:flex">
          <li className="hover:text-pink-400 p-4">Home</li>
          <li className="hover:text-pink-400 p-4">About</li>
          <li className="hover:text-pink-400 p-4">Product</li>
          <li className="hover:text-pink-400 p-4">Review</li>
          <li className="hover:text-pink-400 p-4">Contact Us</li>
        </ul> */}
        <nav className={style.navbar}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#review">Review</a>
        </nav>
        <div className={style.icons}>
          <a href="#"><FaCartShopping/></a>
          <a href="#"><FaHeart/></a>
          <a href="#"><FaCircleUser/></a>
        </div>
        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10 ">
          {nav ? <AiOutlineClose size={20} className="text-white"/> : <AiOutlineMenu size={20} className=""/>}
        </div>
        {/* mobile menu */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300':
            'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
          <ul className="gap-x-20 items-center font-extralbold p-2 text-white">
            <li className="hover:text-pink-400">Home</li>
            <li className="hover:text-pink-400">About</li>
            <li className="hover:text-pink-400">Product</li>
            <li className="hover:text-pink-400">Review</li>
            <li className="hover:text-pink-400">Contact Us</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
