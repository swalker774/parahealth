import React from 'react';
import heroImage from '../Assets/hero4.jpg';
import nineImg from '../Assets/ninetyMassage.jpg';
import Testimonials from "./Testimonials"

const Ninety = ({ heroVisible }) => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-white to-[#f3f8fc] flex flex-col items-center'>
      {heroVisible && (
        <div 
          className='w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12'
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            color: '#ffffff',
            position: 'relative',
            height: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative z-10">
            <h1 className='text-5xl font-bold mb-4'>90-Minute Massage</h1>
            <p className='text-lg'>Relax and Unwind</p>
          </div>
        </div>
      )}
      <div className='max-w-[800px] w-full mt-16 mb-6 px-8 text-center'>
      </div>
      <div className='max-w-[1200px] w-full my-8 px-8 flex flex-col lg:flex-row items-center gap-8'>
        <img 
          src={nineImg} 
          alt="90-Minute Massage Service" 
          className='w-full lg:w-1/2 rounded-lg shadow-lg' 
          style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 30%' }}
        />
        <div className='lg:w-1/2 text-center lg:text-left mb-10'>
        <h2 className='text-3xl font-bold mb-10 text-[#0a192f]'>Enjoy a Luxurious 90-Minute Massage</h2>
          <p className='text-lg mb-4 text-gray-700'>
            Our 90-minute massage offers the ultimate relaxation experience, providing ample time for a comprehensive full-body treatment. This extended session allows us to address 
            every muscle group, ensuring complete therapeutic relief. Ideal for those looking to indulge in a complete escape from daily stress, the 90-minute massage is perfect 
            for achieving deep relaxation and rejuvenation. This service is available for $125.
          </p>
          <p className='text-lg mb-16 text-gray-700'>
            During your 90-minute session, we will take the time to understand your specific needs and preferences, customizing the massage to ensure every area of your body receives the attention 
            it deserves. This approach ensures you leave feeling completely refreshed and revitalized.
          </p>
          <a href="tel:+15173126199" className='bg-[#84a7d1] text-white py-3 px-6 rounded-lg shadow hover:bg-[#4681c9]'>Call to Book Now</a>
        </div>
      </div>
      <div className='flex justify-center w-full my-6'>
      </div>

      {/* Testimonials Section */}
      <div className='w-full pt-24 pb-64 mb-72 px-8 sm:py-24 text-center'>
        <h2 className='text-3xl font-bold mb-4 text-[#0a192f]'>Testimonials</h2>
        <Testimonials />
      </div>
    </div>
  );
}

export default Ninety;
