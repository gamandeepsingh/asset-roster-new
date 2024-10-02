import React, { useEffect, useState } from 'react'
import Newfooter from '../components/Common/Newfooter'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import ServiceDetails from '../components/Services/ServiceDetails';
import FAQs from '../components/Common/FAQs';
import Spinner from '../components/utils/Spinner';

const ServiceDetailPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return <Spinner />

  return (
    <div className='w-screen'>
      <Breadcrumbs />
      <ServiceDetails/>
      <FAQs/>
      <Newfooter/>
    </div>
  )
}

export default ServiceDetailPage