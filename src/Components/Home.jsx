import React from 'react';
import heroImage from '../Assets/hero1.jpg';
import deepTissueMassage from '../Assets/deepTissue.jpg';
import meditationImage from '../Assets/meditationImage.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import Testimonials from './Testimonials';

const Home = ({ heroVisible }) => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-white to-[#f3f8fc] flex flex-col text-left'>
      {heroVisible && (
        <div 
          className='w-full min-h-[400px] flex flex-col justify-center items-left text-left p-6 md:p-12'
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top-center',
            backgroundRepeat: 'no-repeat',
            color: '#ffffff',
            position: 'relative',
            height: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative z-10">
            <h1 className='text-3xl md:text-5xl font-bold mb-5'>Welcome to Para Health</h1>
            <p className='text-base md:text-lg mb-5'>
              We provide personalized treatments for targeted pain relief, deep relaxation, and enhanced flexibility. Let us help you achieve your wellness goals in a tranquil and 
              rejuvenating environment. 
            </p>
            <a href="tel:+15173126199" className='text-base md:text-lg text-white flex hover:text-[#c6c9c6] items-center mt-2'>
              <FaPhoneAlt className='mr-2' />
              Book an appointment
            </a>
          </div>
        </div>
      )}
      
      {/* Our Services Section */}
      <div className='w-full py-12 md:py-16 px-4 md:px-8 text-center'>
        <h2 className='text-3xl md:text-5xl font-bold my-10 pb-4 text-[#0a192f]'>Our Services</h2>

        {/* Deep Tissue Section */}
        <div className='mt-12 md:mt-24'>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            <img 
              src={deepTissueMassage} 
              alt="Deep Tissue Massage" 
              className='w-full lg:w-1/2 rounded-lg shadow-lg' 
              style={{ height: 'auto', maxHeight: '700px', objectFit: 'cover', objectPosition: '50% 35%' }}
            />
            <div className='lg:w-1/2 text-left px-4 md:px-0'>
              <h3 className='text-2xl md:text-3xl font-bold mb-12 text-[#0a192f]'>60 or 90-Minute Deep Tissue Massage</h3>
              <p className=' md:text-md mb-4 text-gray-700'>
                You pick your time, and then on the day of your appointment, we’ll discuss your needs and expectations such as pressure, and benefits you expect.
                From there I’ll give you a custom massage targeting the areas that you need and want the most attention on.
                Most people find this type of massage to be very therapeutic and relaxing, especially when the correct pressure is found.
              </p>
              <p className='md:text-md mb-4 text-gray-700'>
                The only question that you need to answer is, do you need/want a 90- or 60-minute massage. Here are some factors to consider.
                Personally, I have a tremendous amount of difficulty getting through a total body massage in just 60 minutes.
                So, if you are wanting a thorough full body massage, then 90 minutes is the way to go.
                However, if you are looking to target a specific area for pain, and you do not care to get the rest your body worked on,
                then a 60-minute massage would be right for you.
              </p>
              <div className='mt-6 text-left w-full'>
                <h2 className='text-xl md:text-2xl font-bold mt-16 mb-4 text-[#0a192f]'>Ultra Deep Pressure</h2>
                <div className='inline-block'>
                  <p className='md:text-md text-gray-700'>
                    This is 10/10 pressure and is only suggested for certain body types such as body builders, or thick muscled individuals for whom regular pressure does not work.
                    I always suggest starting with a regular massage, as this massage costs a considerable amount more due to the wear and tear it puts on me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meditation Section */}
      <div className='w-full py-12 px-4 md:px-8 text-center'>
        <h2 className='text-3xl font-bold my-10 text-[#0a192f]'>Meditation Classes</h2>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <img src={meditationImage} alt="Meditation" className='w-full lg:w-1/2 max-h-[400px] rounded-lg shadow-lg' style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div className='lg:w-1/2 text-left px-4 md:px-0'>
            <h3 className='text-2xl font-bold mb-4 text-[#0a192f]'>Serenity and Insight Meditation</h3>
            <p className='md:text-md mb-4 text-gray-700'>
              I teach beginner and intermediate Serenity and Insight meditation. These are Buddhist meditations and as such incorporate Buddhist philosophy into them.
              You do not need to convert to Buddhism to learn these meditations, however you do need to learn certain aspects of Buddhism to get to deeper levels of the meditation.
            </p>
            <p className= 'md:text-md mb-4 text-gray-700'>
              Group classes are free. If you are interested in one-on-one training let me know, and we can have that conversation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className='w-full sm:pt-24 sm:pb-40 pt-24 pb-80 sm:px-8 text-center'>
        <h2 className='text-3xl font-bold mb-4 text-[#0a192f]'>Testimonials</h2>
        <Testimonials />
      </div>
      
      {/* Call to Book Now */}
      <div className='w-full py-24 px-4 sm:px-8 text-center'>
        <h2 className='text-3xl font-bold mb-8 text-[#0a192f]'>Call to Book an appointment Today!</h2>
        <a href="tel:+15173126199" className='bg-[#84a7d1] text-white py-4 px-10 rounded-lg shadow hover:bg-[#4681c9]'>Call Now</a>
      </div>
    </div>
  );
}

export default Home;
