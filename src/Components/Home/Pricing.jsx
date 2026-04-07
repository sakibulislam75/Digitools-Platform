import React from 'react';

const Pricing = () => {
    return (
        <>
            <div className='mt-30 mb-8 text-center space-y-2'>
                <h1 className='text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <h2 className='text-gray-400 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</h2>
            </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-10/12 mx-auto p-5 mb-15">

  <div className="card h-full w-full bg-base-100 shadow-md transition duration-1000 hover:scale-105">
    <div className="card-body flex flex-col">
      <div className="space-y-1.5">
        <h2 className="text-3xl font-bold">Starter</h2>
        <h2 className="text-gray-400">Perfect for getting started</h2>
      </div>

      <span className="flex items-baseline my-1">
        <h1 className="text-3xl font-bold">$0</h1>
        <h1 className="text-gray-400 text-xl">/Month</h1>
      </span>

      <ul className="mt-6 flex flex-col gap-2 text-xs mb-10 text-gray-400">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Access to 10 free tools</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Basic templates</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Community support</span>
        </li>
        <li className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>1 project per month</span>
        </li>
      </ul>

      <button className="mt-auto btn bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] w-full rounded-full text-white">
        Get Started Free
      </button>
    </div>
  </div>

  <div className="card h-full w-full bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] shadow-md transition duration-1000 hover:scale-105">
    <div className="card-body flex flex-col relative">
      <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] font-semibold absolute -top-2 left-1/2 -translate-x-1/2 p-3">
        Most Popular
      </span>

      <div className="space-y-1.5 text-white">
        <h2 className="text-3xl font-bold">Pro</h2>
        <h2>Best for professionals</h2>
      </div>

      <span className="flex items-baseline my-1">
        <h1 className="text-3xl text-white font-bold">$29</h1>
        <h1 className="text-white text-xl">/Month</h1>
      </span>

      <ul className="mt-6 flex flex-col gap-2 text-xs mb-10 text-white">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Access to all premium tools</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Unlimited templates</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Priority support</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Cloud sync</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Advanced analytics</span>
        </li>
      </ul>

      <button className="mt-auto btn text-[#9514FA] w-full rounded-full bg-white">
        Start Pro Trial
      </button>
    </div>
  </div>

  <div className="card h-full w-full bg-base-100 shadow-md transition duration-1000 hover:scale-105">
    <div className="card-body flex flex-col">
      <div className="space-y-1.5">
        <h2 className="text-3xl font-bold">Enterprise</h2>
        <h2 className="text-gray-400">For teams and businesses</h2>
      </div>

      <span className="flex items-baseline my-1">
        <h1 className="text-3xl font-bold">$99</h1>
        <h1 className="text-gray-400 text-xl">/Month</h1>
      </span>

      <ul className="mt-6 flex flex-col gap-2 text-xs mb-10 text-gray-400">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Everything in Pro</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Team collaboration</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Custom integrations</span>
        </li>
        <li className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>SLA guarantee</span>
        </li>
        <li className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Custom branding</span>
        </li>
      </ul>

      <button className="mt-auto btn bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] w-full rounded-full text-white">
        Contact Sales
      </button>
    </div>
  </div>

</div>


          

        </>
    );
};

export default Pricing;