import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm w-full px-0">

            <div className="w-10/12 mx-auto flex justify-between items-center">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>


                    </div>
                    <a className="text-3xl text-purple-600 font-bold">DigiTools</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-between gap-4 text-[#101727]">
                        <li>Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-4 items-center">
                    <span className="relative">
                        <IoCartOutline className="text-2xl" />
                        <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                            2
                        </p>
                    </span>

                    <h3>Login</h3>
                    <button className='bg-purple-600 rounded-full p-2 px-4 text-white font-light btn'>Get-Started</button>
                </div>

            </div>
        </div>

    );
};

export default Navbar;