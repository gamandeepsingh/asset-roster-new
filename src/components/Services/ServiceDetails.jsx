import React, { useEffect, useState } from 'react'
import SectionBar from '../Common/SectionBar';
import client from '../../../sanityClient';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Spinner from '../utils/Spinner';

const ServiceDetails = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [restServices, setRestServices] = useState([]);
  const slug = useParams().slug;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "services" && slug.current == $slug]{
            title,
            slug,
            body[]{
                    ...,
                    asset->{
                            _id,
                            url
                        }
                    },
                    mainImage{
                    asset->{
                      _id,
                        url
                        },
                    alt
                    },
                    excerpt,
                    }`,
                    { slug }
        )
        .then((data) => {
          setServices(data[0]);
        })
        .catch((error) => console.error(error));
      }
    if (slug) {
      client
      .fetch(
          `*[_type == "services"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
                },
              alt
              },
            excerpt,
          }`
        )
        .then((data) => {
          const filteredServices = data.filter(service => service.slug.current !== slug);
          setRestServices(filteredServices);
        })
        .catch((error) => console.error("Error fetching rest services:", error));
      }
  }, [slug]);
  
  useEffect(() => {
  }, [slug]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return <Spinner />

  return (
    <article className="w-full max-w-6xl px-6 mb-10 mx-auto space-y-12 flex flex-col items-center">
        {/* <div className='flex justify-center w-full'>
          <span className="text-xs font-dmSans font-semibold  uppercase text-white  highlight highlight-spread-xl highlight-variant-1">ASSETS ROSTER</span>
        </div> */}
        <div className='w-screen h-96 relative'>
          <img src={services?.mainImage?.asset?.url}
            className='w-screen h-full object-cover rounded-none shadow-lg'
            alt="" />
        </div>
      <div className="w-full mx-auto space-y-8 flex flex-col items-center">
        <h1 className="text-4xl font-dmSans font-bold text-center md:text-5xl">{services?.title}</h1>
        <p className='text-lg text-dark/70'>
          {services?.excerpt}
        </p>
      </div>
      <div className="font-dmSans">
        {services?.body?.map((block, ind) => {
          if (block._type === 'block') {
            return (
              <div key={ind} className='flex'>
                {
                  renderBlockContent(block)
                }
                <br />
              </div>
            );
          } else if (block._type === 'image' && block.asset) {
            return (
              <div key={ind} className=" mx-auto" data-aos="fade-up">
                <img
                  src={block.asset.url}
                  alt={block.alt || 'Blog image'}
                  className='mb-5 rounded-md w-full h-full object-cover'
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <SectionBar text="More Related Services" id={"more-service"} />
      <div className="w-full flex flex-col items-center space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {restServices?.map((service) => (
            <div
              className='relative flex flex-col justify-between items-center min-h-[250px] p-5 shadow-lg overflow-hidden transition-all duration-300 group rounded-md cursor-pointer'
              key={service.slug.current}
              data-aos="fade-up"
              onClick={() => {
                navigate(`/service/${service.slug.current}`);
                window.scrollTo(0, 0);
              }}
            >
              <div className='absolute inset-0 transition-transform duration-300' />
              <div className='w-full flex justify-end z-10'>
                <FiArrowRight size={30} className="text-white rotate-0 group-hover:-rotate-45 transition-all duration-200" />
              </div>
              <div className='text-white z-10'>
                <h1 className='text-xl font-bold group-hover:-translate-y-3 transition-all duration-200 font-dmSans'>{service.title}</h1>
                <p className='mt-2 group-hover:-translate-y-3 transition-all duration-200 font-dmSans'>{service?.excerpt.length > 130 ? `${service.excerpt.slice(0, 130)}...` : `${service.excerpt.slice(0, 130)}`}</p>
              </div>
              <div className='absolute inset-0 -z-20 hover:scale-110 transition-transform duration-300 ease-in-out grayscale-0 group-hover:grayscale'>
                <img src={service.mainImage.asset.url} alt={service.mainImage.alt} className='w-full h-full object-cover' />
              </div>
              <div className='absolute inset-0 -z-10 bg-dark/30'></div>
            </div>
          ))}
        </div>

      </div>
    </article>
  )
}

export default ServiceDetails

const renderBlockContent = (block) => {
  switch (block.style) {
    case 'h1':
      return <h2 className='mb-2 text-dark font-dmSans text-3xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h2':
      return <h2 className='mb-2 text-dark font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h3':
      return <h2 className='mb-2 text-dark font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h4':
      return <h2 className='mb-2 text-dark font-dmSans text-center text-xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h5':
      return <h2 className='mb-2 text-dark font-dmSans text-center text-lg font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h6':
      return <h2 className='mb-2 text-dark font-dmSans text-center text-md font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'blockquote':
      return <blockquote className='mb-2 text-dark font-dmSans text-center italic border-l-4 border-gray-300 pl-4 flex w-full justify-center'>{block.children.map(child => child.text).join('')}</blockquote>;
    default:
      return <p className='mb-2 font-dmSans text-lg pb-2 flex items-start'>{" "}{block.children.map(child => child.text).join('')}</p>;
  }
};