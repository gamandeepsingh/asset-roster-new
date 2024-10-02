import React, { useEffect, useState } from "react";
import aos from "aos"
import "aos/dist/aos.css"
import client from "../../../sanityClient";

const OurPresence = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "ourPresence"]{
  places[] {
    city,
    country,
    "imageUrl": image.asset->url,
    "altText": image.alt
  }
}
`)
      .then((res) => {
        setData(res[0]?.places);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    aos.init(1800)
  }, [])
  return (
    <section>
      <div className="py-4 my-16 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 font-dmSans">
            Our Presence
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-dmSans">
            Our presence spans across the country, with locations in {data?.slice(0, 6).map((loc, ind) => (
              <span key={ind}>
                {loc?.city}{ind < data.slice(0, 6).length - 1 ? ', ' : ''}
              </span>
            ))} etc.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
          {data?.map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 h-auto md:h-full flex flex-col"
              data-aos="fade-up"
            >
              <div
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={location?.imageUrl}
                  alt={`${location?.altText}`}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium font-dmSans text-white absolute top-0 left-0 p-4 xs:text-xl md:text-lg">
                  {location?.city}, {location?.country}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
