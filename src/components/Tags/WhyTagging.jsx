import React, { useEffect, useState } from 'react';
import client from '../../../sanityClient';
import Spinner from '../utils/Spinner';

const WhyTagging = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "taggingService"] {
            approach,
            benefits,
            whyChooseUs
        }`)
            .then((fetchedData) => {
                setData(fetchedData[0]);
            })
            .catch(console.error);
    }, []);

    if (!data) return <div className="flex justify-center items-center h-screen text-xl"><Spinner /></div>; // Loading state

    return (
        <div className="w-screen mx-auto px-2 md:px-4 space-y-8 flex flex-col items-center justify-center mb-10">
            <div className='md:max-w-6xl w-full px-4 flex flex-col items-center justify-center my-20'>
                <h1 className='text-4xl font-black font-dmSans text-start md:text-center md:w-4/6'>
                    Benefits of Using <span className='text-lightYellow'>Asset Roster</span> for IT Asset Tracking software
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
                    {data?.benefits.map((item, index) => (
                        <div key={index} className="flex justify-start gap-4">
                            <div className='flex items-start mt-1'>
                                <div dangerouslySetInnerHTML={{ __html: item.svgCode }} />
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                                <h2 className='text-xl font-black text-lightYellow font-dmSans'>{item.heading}</h2>
                                <p className='text-dark/90 font-dmSans'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='md:max-w-6xl w-full px-4 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-black font-dmSans text-start md:text-center md:w-4/6'>
                    Our Approach to Tagging <span className='text-lightYellow'>Asset Roster</span>
                </h1>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-10'>
                    {data?.approach.map((item, index) => (
                        <div key={index} className="flex flex-col items-start gap-2 bg-lightYellow/10 p-4 border-dashed border-lightYellow border-2 rounded-lg">
                            <div dangerouslySetInnerHTML={{ __html: item.svgCode }} />
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-black text-lightYellow font-dmSans'>{item.heading}</p>
                                <p className='text-dark/90 font-dmSans'>{item.content.slice(0,100)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyTagging;
