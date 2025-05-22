import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-32 bg-transparent absolute top-0">
      <img src={assets.logo} alt="logo" className="w-32 cursor-pointer" />

      <div className="hidden md:block">
        <ul className="flex items-center gap-7 text-s1 font-semibold ">
          <a href="#Header" className="hover:text-p3">
            Home
          </a>
          <a href="#About" className="hover:text-p3">
            About
          </a>
          <a href="#Projects" className="hover:text-p3">
            Projects
          </a>
          <a href="#Testimonials" className="hover:text-p3">
            Testimonials
          </a>
        </ul>
      </div>
      <div>
        <button className="hidden md:block bg-s1 rounded-full px-7 py-2 font-semibold hover:bg-slate-100">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="w-7 cursor-pointer md:hidden"
          onClick={() => setShowMobileMenu(true)}
        />

        {/* mobile menu*/}

        <div
          className={`opacity-0 ${
            showMobileMenu ? `opacity-100 fixed w-full` : `h-0 w-0`
          } top-0 bottom-0 right-0 bg-s1 transition-all overflow-hidden`}
        >
          <div className="flex justify-end p-6">
            <img
              src={assets.cross_icon}
              alt="cross icon"
              className="w-8 cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="font-semibold text-2xl flex flex-col items-center justify-center gap-6 h-[50%]">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="hover:bg-slate-200 w-full flex justify-center py-2 "
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="hover:bg-slate-200 w-full flex justify-center py-2"
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="hover:bg-slate-200 w-full flex justify-center py-2"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="hover:bg-slate-200 w-full flex justify-center py-2"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
