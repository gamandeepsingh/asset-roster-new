import React, { useEffect, useState } from 'react';
import aos from "aos";
import "aos/dist/aos.css";
import client from '../../../sanityClient';

const theme = {
  background: 'bg-white',
  text: 'text-dark',
  heading: 'text-dark',
  paragraph: 'text-dark',
};

const WhoWeAre = () => {
  const [about, setAbout] = useState({ images: [] });

  useEffect(() => {
    aos.init(800);
  }, []);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutWithImages"]{
        ...,
        images[]{
          alt,
          image{
            asset->{
              url
            }
          }
        }
      }`)
      .then((res) => {
        setAbout(res[0] || { images: [] });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="px-4 md:px-28 flex flex-col lg:flex-row items-center gap-4 mt-16 md:mt-0 md:min-h-screen relative">
      <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
        {about.heading && <span className='font-dmSans'>Who We Are</span>}
        <h2 className={`text-4xl font-bold mb-6 font-dmSans ${theme.heading}`}>{about.heading}</h2>
        <p className={`md:text-lg opacity-75 font-dmSans ${theme.paragraph} text-sm`}>{about.content}</p>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-up">
        <div className="mx-auto p-1">
          <div className={`grid grid-cols-1 lg:grid-cols-${Math.min(4, about.images.length)} gap-4`}>
            {about.images.map((image, index) => (
              <div key={index} className={`${about.images.length === 1 ? "col-span-1" : index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} relative overflow-hidden rounded-md shadow-lg group`}>
                <img
                  src={image.image?.asset?.url}
                  alt={image.alt}
                  className={`w-full ${index === 0 && about.images.length > 1 ? "h-full" : "h-full max-h-[350px]"} object-cover group-hover:scale-110 transition-scale duration-300`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <h3 className="text-lg font-bold text-white font-dmSans">{image.alt || "No Title"}</h3>
                    {image.description && <p className="text-white">{image.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
