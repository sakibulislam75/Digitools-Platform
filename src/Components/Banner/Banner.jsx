import React from 'react';
import rctngle from '../../assets/Group 5.png'
import bannerImg from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (
      <div className="w-10/12 mx-auto flex flex-col-reverse gap-4 md:flex-row justify-between items-center mt-15 mb-20">

            <div className='space-y-5 flex-.75'>
                <h2 className="flex gap-1 items-center w-fit p-1 px-3 rounded-full bg-blue-100 text-[linear-gradient(to_right,#6B2AF8,#9514FA)]">
                    <img src={rctngle} alt="" />
                    New: AI-Powered Tools Available
                </h2>

                <h1 className='text-[#101727] text-3xl md:text-6xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h1>
                <h2 className='text-[#627382] text-left'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.<br />

                    Explore Products
                </h2>
                <span className='flex gap-3 items-center'>
                    <button className='bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] btn rounded-full text-white'>Explore Product</button>
                    <button className='btn btn-outline btn-primary rounded-full  '><CiPlay1></CiPlay1> Watch Demo</button>
                </span>
            </div>
            <div className='flex-.25'>
                <img src={bannerImg} alt="" className=' w-full ' />
            </div>
        </div>
    );
};

export default Banner;