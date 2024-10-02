import React, { useEffect } from "react";
import Slider from "react-slick";
import client from "../../../sanityClient";
import blockchainImage from '../../assets/1.png';
import aiImage from '../../assets/2.png';
import droneImage from '../../assets/3.png';


const images = [{
  image: blockchainImage,
  alt: "...",
},
{
  image: aiImage,
  alt: "...",
},
{
  image: droneImage,
  alt: "...",
}
]

const SwipeCarousel = () => {
  const [imageData, setImageData] = React.useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "homeCarouselImages"]{
        images[]{
          alt,
          "url": src.asset->url 
        }
      }`)
      .then((res) => {
        setImageData(res[0] || { images: [] });
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative w-full max-sm:w-full">
      <div className="hidden md:block">
      <Slider {...settings}>
        {imageData?.images?.map((img, idx) => (
          <div key={idx} className="h-screen md:h-[600px] shrink-0 overflow-hidden -z-10  cursor-grab">
            <img
              src={img.url}
              alt={img.alt}
              className={`w-full h-full object-cover md:object-fit md:object-left-top overflow-hidden`}
            />
          </div>
        ))}
      </Slider>
      </div>
      <div className="md:hidden">
      <Slider {...settings}>
        {images?.map((img, idx) => (
          <div key={idx} className="h-[90vh] shrink-0 overflow-hidden -z-10  cursor-grab">
            <img
              src={img.image}
              alt={img.alt}
              className={`w-full h-full object-cover md:object-fit md:object-left-top overflow-hidden`}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default SwipeCarousel;