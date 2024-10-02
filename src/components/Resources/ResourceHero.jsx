import React, { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import aos from "aos"
import "aos/dist/aos.css"
import client from '../../../sanityClient'

const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const ResourceHero = () => {
    const [data, setData] = useState(null)
    const [heading, setHeading] = useState([])

    useEffect(() => {
        aos.init(1800)
    }, [])

    useEffect(() => {
        client.fetch(`
            *[_type == "resourceTopSection"] {
                _id,
                heading,
                content,
                buttonText1,
                buttonText2,
                images {
                    asset-> {
                        url
                    }
                }
            }
        `)
        .then((res) => {
            if (res.length > 0) {
                setData(res[0])
                setHeading(res[0].heading.split(' ')); // Split heading text here
            }
        })
        .catch(console.error)
    }, [])

    return (
        <section className="mt-[100px] min-h-[590px] flex justify-center items-center">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div data-aos="fade-right" className="mr-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl mb-4 text-4xl font-dmSans font-extrabold  leading-none md:text-5xl xl:text-6xl ">
                        {heading.length > 0 && heading.map((item, index) => (
                            <React.Fragment key={index}>
                                {(index !== 1) && item}{' '}

                                {(index === 1) && (
                                    <span className='text-darkGreen'>
                                        {item}
                                    </span>
                                )}{' '}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">{data?.content}</p>
                    <div className='flex gap-5'>
                        <a href="#tools">
                            <button className="rounded-md md:text-lg text-xs font-dmSans border-2  bg-darkGreen text-light border-light px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap ">
                                {data?.buttonText1}
                            </button>
                        </a>
                        <a href="#learn">
                            <button className="rounded-md md:text-lg text-xs font-dmSans border-2  border-darkGreen px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap ">
                                {data?.buttonText2}
                            </button>
                        </a>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex lg:justify-center lg:items-center animate-updown">
                    <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
                        {
                            data?.images?.asset?.url &&
                            <img src={data?.images?.asset?.url} alt="assets roster website image" />
                        }
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default ResourceHero
