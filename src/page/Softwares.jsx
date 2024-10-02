import React, { useEffect, useState } from 'react'
import SoftwareHero from '../components/Softwares/SoftwareHero'
import Newfooter from '../components/Common/Newfooter'
import FAQs from '../components/Common/FAQs'
import Spinner from '../components/utils/Spinner'

const Softwares = () => {
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
      <SoftwareHero />
      <FAQs />
      <Newfooter />
    </div>
  )
}

export default Softwares