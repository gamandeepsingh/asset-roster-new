import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from 'react-icons/fa';
import client from '../../../sanityClient';
import pic from '../../assets/undraw/pic.svg';
const TestimonialSection = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "testimonials"]{
            sectionHeading,
            sectionDescription,
            testimonials[] {
                company,
                role,
                testimonial
            }
            }`)
            .then((data) => {
                setData(data[0])
            })
            .catch(console.error);
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-green w-full py-14 my-14">
            <div className="text-center px-4 md:px-28">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-3xl md:text-6xl font-extrabold text-white font-dmSans">{data?.sectionHeading}</h2>
                    <p className="mb-8 font-light text-white/60 lg:mb-16 text-sm md:text-lg font-dmSans">
                        {data?.sectionDescription}
                    </p>
                </div>
                <Slider {...settings}>
                    {data?.testimonials?.map((item, index) => (
                        <div key={index} className="grid p-8 md:p-16 text-center bg-white/30 relative">
                            <h3 className="text-lg font-semibold text-light font-dmSans text-start">{item.company}</h3>
                            <p className="my-4 font-dmSans text-start text-light/70">
                                {item.testimonial.length > 120
                                    ? `${item.testimonial.slice(0, 140)}...`
                                    : item.testimonial}
                            </p>
                            <div className="flex items-center space-x-3">
                                <img src={pic} className='w-9 h-9 bg-white rounded-md' alt="" />
                                <div className="space-y-0.5 h-full font-medium text-light text-left">
                                    <div font-dmSans>{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
