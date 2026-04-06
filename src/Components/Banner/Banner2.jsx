import React from 'react';

const Banner2 = () => {
    return (
       <div className="w-full bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] text-white py-10 mb-10">
  <div className="w-11/12 mx-auto flex flex-col gap-2.5  md:flex-row items-center justify-around text-center">

    <div className="flex-1">
      <h2 className="text-5xl font-bold">50K+</h2>
      <p className="text-2xl text-white">Active Users</p>
    </div>

    <div className="w-px h-12 bg-white/40"></div>

    <div className="flex-1">
      <h2 className="text-5xl font-bold">200+</h2>
      <p className="text-2xl text-white">Premium Tools</p>
    </div>

    <div className="w-px h-12 bg-white/40"></div>

    <div className="flex-1">
      <h2 className="text-5xl font-bold">4.9</h2>
      <p className="text-2xl text-white">Rating</p>
    </div>

  </div>
</div>

    );
};

export default Banner2;