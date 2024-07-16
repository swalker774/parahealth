import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';

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
              <li><a href="/our-services" className='hover:underline text-gray-700'>Our Services</a></li>
              <li><a href="/about-us" className='hover:underline text-gray-700'>About Us</a></li>
              <li><a href="/testimonial" className='hover:underline text-gray-700'>Testimonial</a></li>
              <li><a href="/privacy-policy" className='hover:underline text-gray-700'>Privacy Policy</a></li>
              <li><a href="/cookies-policy" className='hover:underline text-gray-700'>Cookies Policy</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className='flex-1'>
            <h3 className='font-bold mb-4 text-[#0a192f]'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='text-gray-700'>Phone: (517)312-6199</li>
              <li className='text-gray-700'>Email: daniel.parahealth@gmail.com</li>
              <li className='text-gray-700'>Address: 2145 University Park Dr, Alaiedon Township, MI, 48864</li>
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

        {/* Social Media Links */}
        <div className='flex justify-center space-x-6 mt-8'>
          <a href='https://facebook.com' aria-label='Facebook'><FaFacebook className='text-xl text-gray-700' /></a>
          <a href='https://instagram.com' aria-label='Instagram'><FaInstagram className='text-xl text-gray-700' /></a>
          <a href='https://twitter.com' aria-label='Twitter'><FaTwitter className='text-xl text-gray-700' /></a>
          <a href='https://tiktok.com' aria-label='TikTok'><FaTiktok className='text-xl text-gray-700' /></a>
          <a href='https://linkedin.com' aria-label='LinkedIn'><FaLinkedin className='text-xl text-gray-700' /></a>
          <a href='https://youtube.com' aria-label='YouTube'><FaYoutube className='text-xl text-gray-700' /></a>
        </div>

        {/* Copyright */}
        <div className='text-center mt-8 text-gray-600'>
          &copy; 2024 Para Health Massage Service. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
