import React, { useEffect } from 'react';
import InfiniteScroll from '../InfiniteScroll';
import aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    useEffect(()=>{
        aos.init(1800)
      },[])
    return (
        <section className='w-full flex justify-center mt-[50px] min-h-[500px]' id=''>
            <div className='w-5/6 text-start'>
                <h1 className='w-full text-[56px] leading-[67px]  font-bold max-md:text-[44px] max-md:leading-[55px]'>
                    <span className='text-[#2A2A2A80]'> Here's </span>what others <br />
                    say about us
                </h1>
                <div className='mt-10'>
                <InfiniteScroll/>
                </div>
            </div>
        </section>
    );
}

export default About;