import React, { useEffect, useState } from 'react'
import svg1 from '../../assets/Vector1.svg'
import svg2 from '../../assets/Vector2.svg'
import aos from "aos"
import "aos/dist/aos.css"
import client from '../../../sanityClient'


const UspSection = () => {
    const [uspData, setUspData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "uspSection"]{
        heading,
        description,
        usps[]{
            title,
            svgImage{
              asset->
            },
            description
          }
      }`)
            .then((data) => {
                setUspData(data[0]);

            })
            .catch((err) => console.error(err));
    }, []);
    useEffect(() => {
        aos.init(1800)
    }, [])

    return (
        <section className='relative w-full min-h-[950px] bg-green z-1 flex justify-center items-center h-full my-14' id='usp'>
            <img src={svg1} alt="" className='absolute w-[80%] left-0 top-[0]' loading='eager' />
            <img src={svg2} alt="" className='absolute w-[80%] right-0 bottom-[-32px] z-10' loading='eager' />

            <div className='px-4 md:px-28 text-start z-10'>
                <h1 data-aos="fade-up" className='w-full text-3xl md:text-6xl leading-[67px]  font-bold max-md:text-[44px] max-md:leading-[55px] text-[#fdfdfd] mt-10 mb-4 font-dmSans'>{uspData?.heading}</h1>
                <p data-aos="fade-up" className='text-lg font-dmSans text-light/60'>{uspData?.description}</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[80px] max-lg:mt-[10px] mb-[20px]'>
                    {
                        uspData?.usps?.map((item, index) => (
                            <div data-aos="fade-up" key={index} className='max-xl:min-h-full min-h-[200px]  w-full flex flex-col justify-between pr-10 p-3'>
                                <div className='flex justify-between items-start'>
                                    <h2 className='text-lightYellow font-dmSans text-2xl font-bold  w-11/12 md:w-5/6'>{item.title}</h2>
                                    <div className='bg-lightYellow  font-dmSans rounded-md w-7 h-7 flex justify-center items-center animate-bounce mt-2 md:mt-0'>
                                        <img src={item.svgImage.asset.url} alt={item.title} className='w-7 h-7 px-2 py-1 rounded-md scale-125' loading='lazy' />
                                    </div>
                                </div>
                                <p className='mt-10 max-md:mt-2 text-xs md:text-sm md:w-[85%] leading-[14px] text-light/60'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default UspSection