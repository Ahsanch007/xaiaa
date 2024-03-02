import Image from 'next/image';
import React from 'react';

const PartnersComponent = () => {
  return (
    <div className="bg-white min-h-[100vh]">
      <div className='container mx-auto px-[20px] py-[60px] '>
        <div className="text-center">
          <div className='flex justify-center mb-[30px]'>
            <img src='/assets/images/d37f14bd-9c91-407b-a7a6-3425c658fdfa.webp' className='max-w-full h-auto' alt='' />
          </div>
          <div className="max-w-full md:max-w-[730px] mx-auto ">
          <p className='text-[18px] roboto-regular text-[#323335] py-[40px]'>
            A great long-term partner in business is like a valuable asset that propels your success to  new heights. With trust, collaboration, and shared goals, you can achieve remarkable results  together. Building a strong partnership fosters innovation, growth, and sustainability. It&apos;s  about having someone by your side through thick and thin, supporting you every step of the  way. Invest in a partnership that stands the test of time and watch your business flourish.  Choose a partner who shares your vision and values, and together, you can conquer any  challenge that comes your way.
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default PartnersComponent;
