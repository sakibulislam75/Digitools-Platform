import React from 'react';
import user from '../../assets/user.png'
import pckg from '../../assets/package.png'
import rckt from '../../assets/rocket.png'
const Steps = () => {
    return (
        <>
            <div className='w-10/12 mx-auto mt-7 text-center space-y-3  mb-8 '>
                <h1 className='text-5xl font-bold text-[#101727] '>Get Started in 3 Steps</h1>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-1 gap-3 md:grid-cols-3 gap-4 mb-20 mt-15 '>
    <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">

                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full p-2">
                            01
                        </span>
                        <img
                            src={user}
                            alt=""
                            className="w-16 h-16 mx-auto mb-4 bg-gray-400 p-4 rounded-full"
                        />

                        <h2 className="text-4xl font-bold pb-3">
                            Create Account
                        </h2>

                        <p className=" text-gray-400">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>

                    </div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full p-2">
                            02
                        </span>
                        <img
                            src={pckg}
                            alt=""
                            className="w-16 h-16 mx-auto mb-4 bg-gray-400 p-4 rounded-full"
                        />

                        <h2 className="text-4xl font-bold pb-3">
                            Choose Products
                        </h2>

                        <p className=" text-gray-400">
                           Browse our catalog and select the tools <br /> that fit your needs.
                        </p>

                    </div>
                   <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full p-2">
                            03
                        </span>
                        <img
                            src={rckt}
                            alt=""
                            className="w-16 h-16 mx-auto mb-4 bg-gray-400 p-4 rounded-full"
                        />

                        <h2 className="text-4xl font-bold pb-3">
                       Start Creating
                        </h2>

                        <p className=" text-gray-400">
                           Download and start using your premium <br /> tools immediately.
                        </p>

                    </div>

                </div>

       
        </>
    )
};

export default Steps;