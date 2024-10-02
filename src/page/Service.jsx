import React, { useEffect, useState } from 'react'
import Hero from '../components/Services/Hero'
import OurServices from '../components/Services/OurServices'
import OverlayCard from '../components/Common/OverlayCard'
import Newfooter from '../components/Common/Newfooter'
import SectionBarGrid from '../components/Common/SectionBarGrid'
import client from '../../sanityClient'
import FAQs from '../components/Common/FAQs'
import Spinner from '../components/utils/Spinner'

const Service = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    client.fetch(`*[_type == "gridSection"]{
          heading,
          content,
          buttonText,
          images[]{
            image{
              asset->{
                url
              }
            },
            alt
          }
      }`)
      .then(data => {
        setData(data[0])
      })
      .catch(console.error)
  },[])

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if(loading)
    return <Spinner/>
  
  return (
    <div className='relative w-screen flex flex-col justify-center items-center overflow-x-hidden mt-[120px]'>
      <Hero/>
      <OurServices/>
      {
        data &&
        <SectionBarGrid data={data}/>
      }
      <OverlayCard/>
      <FAQs/>
      <Newfooter/>
    </div >
  )
}

export default Service