import React, { useEffect, useState } from 'react'
import Intro from '../components/Home/Intro.jsx'
import Stats from '../components/Home/Stats.jsx'
import ImagesGrid from '../components/Home/ImagesGrid'
import UspSection from '../components/Home/UspSection.jsx'
import IndustriesServed from '../components/Home/IndustriesServed.jsx'
import NewTestimonial from '../components/Home/Testimonial.jsx'
import CompanyCarousel from '../components/Home/CompanyCarousel.jsx'
import ServiceCards from '../components/Home/ServiceCards.jsx'
import Newfooter from '../components/Common/Newfooter.jsx'
import FAQs from '../components/Common/FAQs.jsx'
import Spinner from '../components/utils/Spinner.jsx'


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return <Spinner />

  return (
    <div className='relative w-full flex flex-col justify-center items-center overflow-x-hidden'>
      <ImagesGrid />
      <Intro />
      <ServiceCards />
      <Stats />
      <UspSection />
      <IndustriesServed />
      <NewTestimonial />
      <CompanyCarousel />
      <FAQs />
      <Newfooter />
    </div>
  )
}

export default Home

// Hero Section - Banners (Design: https://www.platinum.com.au)
// Company About & Stats (Design: Similar to Platinum)
// Services (Design: on own)
// USP (Design: on own)
// Testimonials (Design: tagrobotech.com)
// Industry served (Design: on own)
// Client list (Design: https://www.assetinfinity.com)
// Footer (Design: tagrobotech.com)
// Go to Top button
// Floating chat widget (Tagrobotech uses a free widget)

// Colors :
// main-green: '#004C4C',
// second-yellow: '#FFEE4D'
// darkGreen: '#367588',
// emerald: '#50C878',