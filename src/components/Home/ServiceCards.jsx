import React, { useEffect } from 'react';
import client from '../../../sanityClient';


const ServiceCards = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        client.fetch(`
            *[_type == "ourService"]{
              services[]{
                title,
                description,
                alt,
                image{
                  asset->{
                    url
                  }
                },
                link,                  
              }
            }
          `)
            .then((data) => {
                setData(data[0].services)
            })
            .catch((err) => console.error(err));

    }, [])
    return (
        <section className='w-full flex justify-center items-center h-full mt-16 mb-16'>
            <div className='px-4 md:px-28 text-center'>
                <h2 className="text-3xl md:text-6xl font-bold text-black mb-12 font-dmSans">Our Solutions</h2>
                <div className='w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {data.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className='bg-white border border-darkGreen p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform group hover:shadow-lg'
                            style={{ textDecoration: 'none' }}
                        >
                            <div className='w-full h-40 overflow-hidden rounded-md'>
                                <img
                                    src={item?.image?.asset?.url}
                                    alt={item?.alt}
                                    className='w-full h-40 object-cover mb-4 group-hover:scale-110 transition-transform duration-300 ease-in-out transform'
                                />
                            </div>
                            <h3 className='text-lg mt-2 font-semibold text-darkGreen font-dmSans'>{item.title}</h3>
                            <p className='text-dark/50 text-sm font-dmSans'>{item?.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
