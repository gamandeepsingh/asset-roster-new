import React, { useEffect, useState } from 'react'
import TagHero from '../components/Tags/TagHero'
import Newfooter from '../components/Common/Newfooter'
import OverlayCard from '../components/Common/OverlayCard'
// import TagsList from '../components/Tags/TagList'
import FAQs from '../components/Common/FAQs'
import Spinner from '../components/utils/Spinner'
import { TextParallaxContentExample } from '../components/Tags/Tagging'
import WhyTagging from '../components/Tags/WhyTagging'
import WhyChooseUs from '../components/Tags/WhyChooseUs'
import Contact from '../components/Tags/Contact'

const Tag = () => {
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
    <div className='relative w-full flex flex-col justify-center items-center overflow-x-hidden'>
        <TagHero/>
        {/* <TagsList/> */}
        <WhyTagging/>
        <TextParallaxContentExample/>
        <WhyChooseUs/>
        <Contact/>
        <OverlayCard/>
        <FAQs/>
        <Newfooter/>
        
    </div>
  )
}

export default Tag