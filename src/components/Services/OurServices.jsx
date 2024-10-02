import React, { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import aos from "aos"
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import client from '../../../sanityClient';

const OurServices = () => {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        aos.init(1800)
    }, [])

    useEffect(() => {
        client
            .fetch(
                `*[_type == "services"]{
                    title,
                    slug,
                    excerpt,
                    body,
                    mainImage{
                        asset->{
                        _id,
                        url
                        },
                        alt
                    },
                    }`
            )
            .then((data) => {
                const sortedData = [
                    data.find(service => service.title === "Physical Verification of Assets"),
                    data.find(service => service.title === "Tagging of Assets"),
                    data.find(service => service.title === "Reconciliation of Assets "),
                    data.find(service => service.title === "Reporting"),
                ];
                
                setData(sortedData);
                console.log(sortedData); 
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div className='w-screen flex flex-col items-center gap-5 my-10 relative'>
            <div className='px-4 md:px-28 grid grid-cols-1 gap-10 md:gap-20 '>
                {data?.map((service, ind) => (
                    <div
                        className='w-full cursor-pointer'
                        key={service.title}
                        data-aos="fade-up"
                        onClick={() => {
                            navigate(`/service/${service.slug.current}`);
                        }}
                    >
                        {/* <div className='absolute inset-0 transition-transform duration-300' />
                        <div className='w-full flex justify-end z-10'>
                            <FiArrowRight size={30} className="text-white rotate-0 group-hover:-rotate-45 transition-all duration-200" />
                        </div>
                        <div className='text-white z-10'>
                            <h1 className='text-xl font-bold group-hover:-translate-y-3 transition-all duration-200 font-dmSans'>{service.title}</h1>
                            <p className='mt-2 group-hover:-translate-y-3 transition-all duration-200 font-dmSans text-xs'>{service?.excerpt}</p>
                        </div>
                        <div className='absolute inset-0 -z-20 hover:scale-110 transition-transform duration-300 ease-in-out grayscale-0 group-hover:grayscale'>
                            <img src={service.mainImage.asset.url} alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='absolute inset-0 -z-10 bg-dark/30'></div> */}
                        {
                            ind % 2 === 0 ? <ServiceLeft service={service} /> : <ServiceRight service={service} />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

const ServiceLeft = ({ service }) => {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-5 p-4 md:p-8'
        >
            <div className='absolute inset-0 bg-[#fffcc1] rounded-md -z-10'></div>
            <div className='w-full md:w-2/3'>
                <h1 className='text-2xl md:text-4xl text-left font-bold font-dmSans'>{service?.title}</h1>
                <p className='mt-2 text-left font-dmSans text-sm md:text-lg md:w-4/5'>{service?.excerpt}</p>
            </div>
            <div className='w-full md:w-1/3'>
                <div className='w-full h-72 rounded-md overflow-hidden'>
                    <img src={service?.mainImage?.asset?.url} className='w-full h-full object-cover transition-all duration-300 ease hover:scale-110' alt={service?.title} />
                </div>
            </div>
        </div>
    )
}
const ServiceRight = ({ service }) => {
    return (
        <div className='w-full flex justify-between items-center p-0 md:p-5 flex-wrap md:flex-nowrap gap-5'
            onClick={() => {
                navigate(`/service/${service.slug.current}`);
            }}
        >
            <div className='w-full md:w-1/3'>
                <div className='w-full h-72 rounded-md overflow-hidden'>
                    <img src={service?.mainImage?.asset?.url} className='w-full h-full object-cover transition-all duration-300 ease hover:scale-110' alt={service?.title} />
                </div>
            </div>
            <div className='w-full md:w-2/3 flex flex-col justify-center items-end '>
                <h1 className='text-2xl md:text-4xl text-left font-bold font-dmSans w-full md:pl-20'>{service?.title}</h1>
                <p className='mt-2 text-left font-dmSans text-sm md:text-lg w-full md:pl-20'>{service?.excerpt}</p>
            </div>
        </div>
    )
}

export default OurServices;