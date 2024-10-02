import React, { useEffect } from "react";
import client from "../../../sanityClient";
import Marquee from "react-fast-marquee";


const CompanyCarousel = () => {
  const [data, setData] = React.useState([]);
  let half = Math.ceil(data.length / 2);
  let firstLine = data.slice(0, half);
  let secondLine = data.slice(half, data.length);

  useEffect(() => {
    client
      .fetch(`*[_type == "partners"]{
          partners[]{
            "logo": logo.asset->url,
            alt
          }
        }`)
      .then((data) => {
        setData(data[0].partners);
      })
      .catch(console.error);
  }, [])

  return (
    <div className="pb-12 mb-14 bg-white w-screen">
      <h2 className="w-full md:w-[85%] my-16 mx-auto text-2xl md:text-3xl font-bold text-center mb-8 font-dmSans">
        <span className='text-dark font-dmSans '>Assets Roster</span>&nbsp; is a trusted partner for hundreds of organizations worldwide, providing asset management solutions across diverse industry sectors.
        </h2>
      <div className="overflow-hidden flex items-center flex-col">
      <Marquee gradient={false} speed={40}>
        {firstLine.map((item, index) => (
          <div key={index} className="logo-item">
            <img
              src={item.logo}
              alt={item?.alt || `Company Logo ${index + 1}`}
              className="mix-blend-multiply w-16 md:w-32 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </Marquee>
        <div className="logo-marquee">
        <Marquee gradient={false} speed={40} direction="right">
        {secondLine.map((item, index) => (
          <div key={index} className="logo-item">
            <img
              src={item.logo}
              alt={`Company Logo ${index + 1}`}
              className="mix-blend-multiply w-16 md:w-32 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </Marquee>
        </div>
      </div>
    </div>
  );
};
export default CompanyCarousel;
