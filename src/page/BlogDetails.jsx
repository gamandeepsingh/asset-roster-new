import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import ResourceBlogsDetails from '../components/Resources/ResourceBlogsDetails'
import OverlayCard from '../components/Common/OverlayCard'
import Newfooter from '../components/Common/Newfooter'
import Spinner from '../components/utils/Spinner'

const BlogDetails = () => {
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
    <div className='w-screen flex flex-col'>
        <Breadcrumbs/>
        <ResourceBlogsDetails/>
        <div className='w-screen flex justify-center'>
        <OverlayCard/>
        </div>
        <Newfooter/>
    </div>
  )
}

export default BlogDetails