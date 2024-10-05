import React, { useEffect, useState } from 'react';
import OurPresence from '../components/About/OurPresence';
import WhoWeAre from '../components/About/WhoWeAre';
import Newfooter from '../components/Common/Newfooter';
import FAQs from '../components/Common/FAQs';
import Spinner from '../components/utils/Spinner';
import OurHistory from '../components/About/OurHistory';



const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if(loading)
    return <Spinner/>

  return (
      <div>
        <WhoWeAre />
        <OurHistory/>
        <OurPresence />
        <FAQs/>
        <Newfooter/>
      </div>
  );
};

export default About;
