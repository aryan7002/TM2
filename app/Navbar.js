"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = ({ sliderIndex }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [navbarClass, setNavbarClass] = useState('');

  const setTheme = (theme) => {
    setCurrentTheme(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Update the navbar background based on the slider index
    const updateNavbarBackground = () => {
      const backgrounds = [
        'bg-transparent',
        'bg-transparent',
        'bg-transparent',
        'bg-transparent'
      ];
      setNavbarClass(backgrounds[sliderIndex]);
    };

    updateNavbarBackground();
  }, [sliderIndex]);

  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-10 transition-all duration-500">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/Logo.svg" alt="logo" height={50} width={100} />
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
          <li>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {currentTheme === 'dark' ? (
                <button onClick={() => setTheme('light')} className="bg-black-700 hover:bg-black w-5 h-5 rounded-full flex items-center justify-center">
                  <Image src="/sun.svg" alt="Switch to light theme" height={20} width={20} />
                </button>
              ) : (
                <button onClick={() => setTheme('dark')} className="bg-gray-100 hover:bg-gray-300 w-5 h-5 rounded-full flex items-center justify-center">
                  <Image src="/moon.svg" alt="Switch to dark theme" height={20} width={20} />
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
