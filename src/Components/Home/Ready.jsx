import React from 'react';

const Ready = () => {
    return (
        <div className='bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] p-20 '> 
<span className='text-center space-y-3 text-white mb-8'>
    <h1 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h1>
    <h2 className='text-s'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</h2>
</span>
  <span className='flex justify-center gap-5 items-center mt-10 mb-5'>
                    <button className='bg-white btn rounded-full text-[#9514FA]'>Explore Product</button>
                    <button className='btn btn-outline text-white  rounded-full  '> Watch Demo</button>
                </span>
                <span className='text-white text-center'><p>14-day free trial • No credit card required • Cancel anytime</p></span>
        </div>
    );
};

export default Ready;