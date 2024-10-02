import React, { useEffect, useState } from 'react'
import Newfooter from '../components/Common/Newfooter'
import BackToTop from '../components/Common/BackToTop'
import ProductHero from '../components/Products/ProductHero'
import ProductItem from '../components/Products/ProductItem'
import SectionBar from '../components/Common/SectionBar'
import FAQs from '../components/Common/FAQs'
import Spinner from '../components/utils/Spinner'

const Products = () => {
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
    <ProductHero/>
    <SectionBar text='"Switch from Excels and Spreadsheets to a Cloud-Based Asset Management Software"'/>
    <ProductItem/>
    <FAQs/>
    <Newfooter/>
</div>
  )
}

export default Products