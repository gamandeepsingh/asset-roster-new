import axios from 'axios';
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

const Newfooter = () => {
  const [email, setEmail] = useState('');
  const backend = import.meta.env.VITE_APP_BACKEND;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    await axios.post(`${backend}/api/subscribe`, { email })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail('');
  };

  const contactDetails = {
    rndCentre: 'M- 304, Dharma Apartments, IP Extension, New Delhi- 110092 ',
    email: 'info@assetsroster.com',
    salesEnquiry: '+91 9958822552 (Mon-Sat)',
  };

  const quickLinks = [
    { href: '/', text: 'Home' },
    { href: '/#about', text: 'About Us' },
    { href: '/products', text: 'Products' },
    { href: '/service', text: 'Services' },
    { href: '/tags', text: 'Tags' },
  ];

  const supportLinks = [
    { href: '#', text: 'Contact Us' },
    { href: '#faqs', text: 'FAQs' },
    { href: '/resources', text: 'Our Resources' },
    { href: '/resources/#learn', text: 'Case Studies' },
    { href: '/resources/roi-calculator', text: 'Asset Calculators' },
  ];

  return (
    <footer className="bg-green text-white pt-8 w-screen" id='footer'>
      <div className="p-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex-1 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold font-dmSans">Subscribe to Newsletter</h2>
            <p className="mt-2 mb-4 font-dmSans">Stay Updated with latest news, promotions & offers</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                className="p-3 rounded-l-md placeholder:text-sm border-none outline-none text-black font-dmSans"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-lightYellow p-3 px-8 rounded-r-md text-darkGreen text-sm group">
                <FaArrowRight className=' group-hover:-rotate-45 transition-transform duration-200' />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-dmSans">About Assets Roster</h3>
            <p className='text-sm font-dmSans'>
              Assets Roster is one of the world's leading and fast-growing Fixed Assets Management Company. We have a versatile experience of more than 12 years and have worked with more than 500 companies till now.
            </p>
            <div className="mt-4">
              <p className="mb-2 font-semibold font-dmSans">FOLLOW US ON</p>
              <div className="flex space-x-4">
                <a href="https://x.com/AssetsRoster"><FaTwitter /></a>
                <a href="https://www.instagram.com/assets_roster/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/assets-roster-private-limited/"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-dmSans">Quick Links</h3>
            <ul className='text-sm'>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-white hover:underline font-dmSans hover:text-lightYellow">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-dmSans">Support</h3>
            <ul className='text-sm'>
              {supportLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-white hover:underline font-dmSans hover:text-lightYellow transition-all duration-200 ease-in-out">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-dmSans">Contact Details</h3>
            <ul className='text-sm'>
              <li className="mb-2 flex items-start font-dmSans">
                <FaBriefcase className="mr-2" size={20} /> {contactDetails.rndCentre}
              </li>
              <li className="mb-2 flex items-center font-dmSans">
                <FaEnvelope className="mr-2" /> {contactDetails.email}
              </li>
              <li className="mb-2 flex items-center font-dmSans">
                <FaPhone className="mr-2" /> {contactDetails.salesEnquiry}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green text-center text-xs py-4 font-dmSans">
        <p>&copy; 2024, Assets Roster, All Rights Reserved</p>
        <p className='mt-1 font-dmSans'>Developed & Designed By <a href='https://www.elanine.com/' target='_blank' className=' text-xs underline underline-offset-4 font-dmSans'>Elanine Creatives</a></p>
      </div>
    </footer>
  );
};

export default Newfooter;
