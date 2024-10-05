import React, { useEffect, useState } from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdTime } from 'react-icons/io';
import client from '../../../sanityClient';

const OurHistory = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        client.fetch(`*[_type == "history"]{
  title,
  milestones[]{
    year,
    description
  },
  body
}
`)
            .then((res) => {
                setData(res[0]);
                console.log(res[0]);
                
            })
            .catch(console.error);
    },[])
    const timelineData = [
        { year: '2013-17', description: 'Developed expertise in the fixed assets domain, identifying key challenges and opportunities' },
        { year: '2017', description: 'Officially launched with a core focus on Fixed Assets Management.' },
        { year: '2018', description: 'Completed a major project covering 750+ locations.' },
        { year: '2019', description: 'Introduced RFID tagging, achieving 100% success in various projects.' },
        { year: '2020', description: 'Developed advanced scanning technologies to digitize paper records.' },
        { year: '2021', description: 'Integrated IoT and AI for advanced asset analytics.' },
        { year: '2022', description: 'Launched a mobile app for on-the-go platform access.' },
        { year: '2023', description: 'Introduced drone-based asset inspections, transforming large-scale monitoring' },
        { year: '2024', description: 'Entering the semiconductor industry with innovative asset tracking solutions.' },
    ];
    // console.log(timelineData.length);

    return (
        <div className=' flex flex-col items-center justify-center'>
            <h2 className="mb-4 text-center text-4xl  font-extrabold text-gray-900 font-dmSans">
                {data?.title}
            </h2>
            <p className="font-light text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-dmSans">
                {data?.body}
            </p>
            {
                data?.milestones?.length > 0 &&
                <div className={`w-screen flex flex-col sm:gap-5 xl:gap-0 xl:grid xl:grid-cols-10 xl:ml-8 min-h-52  mt-2`}>
                    {data?.milestones?.map((item, index) => (
                        <div key={index} className='flex flex-col xl:flex-row items-center '>
                            <div className='xl:w-2/3 h-1 bg-green rounded-full '></div>
                            <div className='xl:w-1/3 px-4 md:px-0'>
                                <div className='w-full max-w-96 xl:w-full xl:p-0 xl:aspect-square xl:rounded-full xl:bg-lightYellow relative'>
                                    <IoMdTime className={`hidden xl:flex xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:text-3xl xl:text-green`}/>
                                    <div className={`flex flex-col justify-center items-center xl:absolute ${index % 2 === 0 ? "xl:top-0 xl:-translate-y-full" : "xl:bottom-0 xl:translate-y-full xl:pt-5"} xl:-translate-x-[100px] xl:min-w-[250px] xl:flex xl:flex-col xl:justify-center xl:items-center`}>
                                        <h5 className='text-light bg-green py-1 px-2 rounded-md min-w-16 flex justify-center items-center font-black font-dmSans'>{item.year}</h5>
                                        <p className='text-center font-dmSans text-dark/60 font-semibold'>{item.description}</p>
                                        {
                                            index !== timelineData.length - 1 &&
                                            <div className='xl:hidden'><FaArrowDownLong/></div>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                    <div className='xl:flex xl:items-center '>
                        <div className='xl:w-2/3 xl:h-1 bg-green rounded-full '></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default OurHistory