import React from 'react';
import heroImage from '../Assets/hero5.jpg';
import Dan from '../Assets/DanPhoto.jpg';

const AboutUs = ({ heroVisible }) => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-white to-[#f3f8fc] flex flex-col items-center'>
      {heroVisible && (
        <div 
          className='w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12'
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 30%',
            backgroundRepeat: 'no-repeat',
            color: '#ffffff',
            position: 'relative',
            height: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative z-10">
            <h1 className='text-5xl font-bold mb-4'>About Us</h1>
            <p className='text-lg text-left'>Get to know Dan</p>
          </div>
        </div>
      )}
      <div className='max-w-[1200px] w-full my-16 px-8 flex flex-col items-center gap-8'>
        <h2 className='text-4xl font-bold mb-4 text-[#0a192f] text-center'>Hello, I'm Dan</h2>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full'>
          <img 
            src={Dan} 
            alt="Dan" 
            className='w-full lg:w-1/2 rounded-lg shadow-lg' 
            style={{ height: 'auto', maxHeight: '380px', objectFit: 'cover', objectPosition: '50% 20%' }}
          />
          <div className='lg:w-1/2 text-center lg:text-left'>
            <p className='text-md mb-2 text-gray-700'>
              I’ve been happily married to my wife since 2009, and we have two children, my daughter who was born in 2010, and my son, who was born in 2012. I’m a practicing 
              Buddhist since March 2022 and I lead an English-speaking meditation group at the Quan am Temple in Mason since October 2022.
            </p>
            <p className='text-md mb-2 text-gray-700'>
              I’m a US Army medically retired veteran who found firsthand the benefits of deep tissue massage. Since then, I’ve developed the belief that intentional touch is the 
              best way to heal the body and mind for most of the modern-day ailments such as chronic and acute aches and pains, depression, anxiety, and so on.
            </p>
            <p className='text-md mb-2 text-gray-700'>
              I believe that our bodies and minds are tools to help us fulfill our goals. I believe we need a healthy diet plus vigorous and consistent exercise for both our minds 
              and bodies to sharpen them into the tools we need to help us accomplish that. I also believe that massage, when used properly, is an integral part of this process.
            </p>
          </div>
        </div>
        <div className='max-w-[1200px] w-full mt-16 px-8 flex flex-col items-center gap-8'>
        <h2 className='text-4xl font-bold mb-4 text-[#0a192f] text-center'>About Para Health</h2>
        <div className='text-center lg:text-center'>
          <p className='text-md mb-4 text-gray-700'>
            After being medically retired from the Army I experienced firsthand the benefits that deep tissue massage can have. However after my massage therapist left the area, I was 
            unable to find a therapist that listened to my needs. I felt as if each massage was the same, just with a different person, and after only a few tries I ended my search and 
            decided to deal with the pain.
          </p>
          <p className='text-md mb-4 text-gray-700'>
            Some time later an opportunity arose to attend massage school. Upon graduation and entering into the field, I found that my initial thoughts on the majority of massage therapist 
            was correct. I found myself in conversation after conversation with other therapist as they spoke jokingly about how they “just do they same massage” for each client. They 
            figured that they, the therapist, knew what was best due to their time and experience in the field. After some time of this, I knew it was time for a change.
          </p>
          <p className='text-md mb-4 text-gray-700'>
            I always knew that self-employment was my goal, but it wasn’t until working in the field at some of these larger “box store” type massage clinics did I realize what my actual 
            calling in the field would be. In late 2022 I decided that I would strike out on my own, and I opened my doors to ParaHealth in March 2023.
          </p>
          <p className='text-md mb-4 text-gray-700'>
            My goal as a massage therapist is to give every client the care and attention they deserve. To help meld your body and mind as one; allowing you to navigate this little journey called life, while drawing out as much of the pain and suffering as I can, making it as easy as possible for you to do so.
          </p>
        </div>
      </div>
        <div className='flex justify-center w-full my-6'>
          <a href="tel:+15173126199" className='bg-[#84a7d1] text-white py-4 px-8 rounded-lg shadow hover:bg-[#4681c9]'>Call to Book Now</a>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
