import React, { useEffect, useState } from 'react';
import ResourceHero from '../components/Resources/ResourceHero';
// import ResourceFoot from '../components/Resources/ResourceFoot';
import ResourcesBlog from '../components/Resources/ResourcesBlog';
import Newfooter from '../components/Common/Newfooter';
import FAQs from '../components/Common/FAQs';
import ResourceTools from '../components/Resources/ResourceTools';
import Spinner from '../components/utils/Spinner';

const Resources = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [window.location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if(loading)
    return <Spinner/>
  
  
  return (
    <div className='relative w-full flex flex-col justify-center items-center overflow-x-hidden'>
      <ResourceHero />
      <ResourceTools/>
      <ResourcesBlog/>
      {/* <ResourceFoot/> */}
      <FAQs/>
      <Newfooter/>
    </div>
  );
}

export default Resources;
