import React, { useEffect, useState } from "react";
import IMG from "../../assets/About2.png"
import client from "../../../sanityClient";
import { Link } from "react-router-dom";

const Intro = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "homeAbout"]{
        heading,
        content,
        image{
          asset->{
            url
          }
        },
        alt,
        features[]{
        icon,
        title,
        link
      }
      }`)
      .then((data) => {
        setAboutData(data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full bg-white py-8 px-4 md:px-28" id="about">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 font-dmSans">
        {aboutData?.heading}
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
        {aboutData?.features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex justify-between items-center gap-10 max-lg:flex-col">
        <div className="text-left text-base md:text-lg text-gray-700  mx-auto w-full md:w-1/2">
          <p className="font-dmSans">
            {aboutData?.content}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="rounded-md"
            src={aboutData?.image?.asset?.url || IMG}
            alt={aboutData?.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;


const FeatureCard = ({ icon, title,link }) => (
  <Link to={link} className="flex items-center b bg-gray-100 p-6 rounded-md shadow-md hover:bg-gray-200 transition-colors">
    <div className="text-4xl mr-4">{icon}</div>
    <div className="text-xs md:text-lg font-dmSans">{title}</div>
  </Link>
);