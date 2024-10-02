import React, { useEffect } from 'react'
import { FiArrowDown } from 'react-icons/fi';
import svg1 from '../../assets/undraw/knowledge.svg'
import svg2 from '../../assets/undraw/learning.svg'
import aos from "aos"
import "aos/dist/aos.css"
import client from '../../../sanityClient';

const Hero = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        aos.init(1800)
    }, [])

    useEffect(() => {
        client
            .fetch(`*[_type == "topSection"]{
            btnText,
            heading,
            subheading,
            smallDescription
            }`)
            .then((res) => {
                setData(res[0]);
            })
            .catch(console.error);
    }, [])

    return (
        <div>
            <section
                className="relative grid min-h-full place-content-center px-4 py-10"
                data-aos="fade-up"
            >
                <div className='absolute w-44 right-0 translate-x-full translate-y-1/2 top-1 '>
                    <img src={svg1} className='animate-updown ' alt="" />
                </div>
                <div className='absolute w-44 left-0 -translate-x-full translate-y-1/2 top-1/3 '>
                    <img src={svg2} className='animate-updown ' alt="" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                    <span className="font-dmSans px-4 py-2 text-[12px]  sm:text-sm">
                        {data?.subheading}
                    </span>
                    <h1 className="max-w-3xl font-dmSans font-medium text-dark text-center text-4xl text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
                        style={{ color: "black" }}
                    >
                        {data?.heading?.split(" ").map((item, ind) => {
                            if (ind === 2)
                                return <span key={ind} className=""> {item} </span>
                            else return <span key={ind}>{item}{" "}</span>
                        })}
                    </h1>
                    <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-dark/80">
                        {data?.smallDescription}
                    </p>
                    <button
                        className="group relative flex w-fit items-center gap-1.5 rounded-md bg-dark/10 px-4 py-2 text-dark transition-colors hover:bg-dark/0 animate-pulse cursor-default hover:animate-none"
                    >
                        {data?.btnText}
                        <FiArrowDown className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Hero