import React, { useEffect, useState } from 'react';
import client from '../../../sanityClient';


const IndustriesServed = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        client
            .fetch(`*[_type == "industryProjects"]{
            projects[]{
              title,
              Image{
              asset->{
              url}
              }
            }
          }`)
            .then((res) => {
                setData(res[0]?.projects);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className='w-full flex justify-center items-center h-full my-8' id='service'>
            <div className='w-full px-4 md:px-28 text-center flex flex-col items-center justify-center'>
                <h2 className="text-3xl md:text-6xl font-bold text-black mb-12 font-dmSans">Industries Served</h2>
                <div className='w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        data?.map((item, index) => (
                            <div
                            key={index} className='p-6 rounded-md shadow-md flex flex-col items-center text-center h-40 bg-transparent relative group overflow-hidden'>
                                <div className='absolute inset-0 -z-10 overflow-hidden'>
                                    <img src={item.Image.asset.url} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out' alt="" />
                                </div>
                                <div className='bg-dark/50 absolute inset-0 -z-10'></div>
                                <h3 className='font-semibold text-lg mb-2 text-light font-dmSans absolute bottom-2 left-3'>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;