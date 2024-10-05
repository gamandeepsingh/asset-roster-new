import React, { useEffect, useState } from 'react';
import client from '../../../sanityClient';
import Spinner from '../utils/Spinner';
import svg from '../../assets/undraw/whyChooseUs.svg';
const WhyChooseUs = () => {
    const [data, setData] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        client.fetch(`*[_type == "taggingService"] {
            whyChooseUs
        }`)
            .then((fetchedData) => {
                setData(fetchedData[0]);
                // console.log(fetchedData[0]);
            })
            .catch(console.error);
    }, []);
    useEffect(() => {
        client
            .fetch(`*[_type == "aboutWithImages"]{
            content
          }`)
            .then((res) => {
                setAbout(res[0]);
                // console.log(res[0]);
            })
            .catch((err) => console.log(err));
    }, []);
    if (!data) return <div className="flex justify-center items-center h-screen text-xl"><Spinner /></div>;

    return (
        <div className="w-screen mx-auto px-2 md:px-4 space-y-8 flex flex-col items-center justify-center" id='whyChooseUs'>
            <div className='md:max-w-6xl w-full px-4 flex flex-col items-center justify-center my-5 md:my-20'>
                <h1 className='text-4xl font-black font-dmSans text-start md:text-center md:w-4/6'>
                    Why Choose <span className='text-lightYellow'>Asset Roster</span> for IT Asset Tracking?
                </h1>

                <div className='w-full flex flex-wrap justify-center md:mt-10'>
                    <div className='w-1/2 min-w-72 md:w-1/2 md:h-screen p-10'>
                        <img src={svg} className='' alt='why choose us' />
                    </div>
                    <div className='w-screen md:w-1/2'>
                        <p className='text-sm mt-2 md:mt-10'>{about?.content}</p>
                        <div className='mt-2 md:mt-10'>
                            {data?.whyChooseUs?.map((item, index) => (
                                <div key={index} className="flex flex-col justify-start">
                                    <p className='text-base font-black text-lightYellow'>
                                        {item.heading}
                                    </p>
                                    <p className='text-sm'>
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <a href="tel:+919958822552">
                        <button className="rounded-md  text-xs border-2 font-dmSans border-darkGreen bg-light px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5">
                            Book now
                        </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
