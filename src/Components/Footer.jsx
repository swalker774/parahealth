import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-[#eef2f7] p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
        <div className='flex flex-col md:flex-row md:justify-between w-full gap-8'>
          {/* Important Links Section */}
          <div className='flex-1'>
            <h3 className='font-bold mb-4 text-[#0a192f]'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href="/" className='hover:underline text-gray-700'>Home</a></li>
              <li><a href="/30-minutes" className='hover:underline text-gray-700'>30-Minute Stretch</a></li>
              <li><a href="/60-minutes" className='hover:underline text-gray-700'>60-Minute Massage</a></li>
              <li><a href="/90-minutes" className='hover:underline text-gray-700'>90-Minute Massage</a></li>
              <li><a href="/about" className='hover:underline text-gray-700'>About Us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className='flex-1'>
            <h3 className='font-bold mb-4 text-[#0a192f]'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='text-gray-700'><a href="tel:+15173126199" className='hover:underline'>Phone: (517) 312-6199</a></li>
              <li className='text-gray-700'><a href="mailto:daniel.parahealth@gmail.com" className='hover:underline'>Email: daniel.parahealth@gmail.com</a></li>
              <li className='text-gray-700'><a href="https://maps.app.goo.gl/wCv2FuqaaKz2c6M77" className='hover:underline' target="_blank" rel="noopener noreferrer">Address: 2145 University Park Dr, Alaiedon Township, MI, 48864</a></li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className='flex-1'>
            <h3 className='font-bold mb-4 text-[#0a192f]'>Opening Hours</h3>
            <ul className='space-y-2 text-gray-700'>
              <li>Monday: 12:00 - 10:00pm</li>
              <li>Tuesday: 12:00 - 10:00pm</li>
              <li>Wednesday: 12:00 - 10:00pm</li>
              <li>Thursday: 12:00 - 10:00pm</li>
              <li>Friday: 12:00 - 10:00pm</li>
              <li>Saturday: 12:00 - 10:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center mt-10 text-gray-600'>
          &copy; 2024 Para Health Massage Service. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
