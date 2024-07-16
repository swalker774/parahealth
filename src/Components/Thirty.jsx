import React from 'react';
import heroImage from '../Assets/hero2.jpg';
import sixImg from '../Assets/sixtyMassage.jpg';
import Testimonials from "./Testimonials"

const Thirty = ({ heroVisible }) => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-white to-[#f3f8fc] flex flex-col items-center'>
      {heroVisible && (
        <div 
          className='w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12'
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 20%',
            backgroundRepeat: 'no-repeat',
            color: '#ffffff',
            position: 'relative',
            height: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative z-10">
            <h1 className='text-5xl font-bold mb-4'>30-Minute Stretch</h1>
            <p className='text-lg'>Quick and effective</p>
          </div>
        </div>
      )}
      <div className='max-w-[800px] w-full mt-16 mb-6 px-8 text-center'>
      </div>
      <div className='max-w-[1200px] w-full my-8 px-8 flex flex-col lg:flex-row items-center gap-8'>
        <img 
          src={sixImg} 
          alt="30-Minute Stretch Service" 
          className='w-full lg:w-1/2 rounded-lg shadow-lg' 
          style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 10%' }}
        />
        <div className='lg:w-1/2 text-center lg:text-left mb-10'>
          <h2 className='text-3xl font-bold mb-12 text-[#0a192f]'>A Refreshing 30-Minute Stretch</h2>
          <p className='text-lg mb-16 text-gray-700'>
            Our 30-minute stretch session is designed for those who need a quick yet effective way to enhance flexibility and relieve muscle tension. This focused session targets 
            key muscle groups to improve your range of motion and alleviate tightness. Ideal for individuals with busy schedules or those looking to complement their fitness routine, 
            the 30-minute stretch provides the benefits of guided stretching in a convenient timeframe.
          </p>
          <a href="tel:+5173126199" className='bg-[#84a7d1] text-white py-3 px-6 rounded-lg shadow hover:bg-[#4681c9]'>Call to Book Now</a>
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

export default Thirty;
