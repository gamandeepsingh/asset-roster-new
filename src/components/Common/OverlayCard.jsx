import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import aos from "aos"
import "aos/dist/aos.css"
import client from '../../../sanityClient'

const OverlayCard = () => {
    const [data, setData] = React.useState([])
    useEffect(()=>{
        aos.init(1800)
      },[])

    useEffect(()=>{
        client.fetch(`*[_type == "overlaySection"]{
            heading,
            content,
            buttonText1,
            buttonText2,
            "backgroundImageUrl": backgroundImage.asset->url
          }`)
          .then(data => {
            setData(data[0]);
          })
          .catch(console.error);
    },[])
    return (
        <div className='w-[90%] xl:w-5/6 min-h-[450px] overflow-hidden flex flex-col items-center justify-center mb-10 rounded-md p-5 md:p-10 z-10'
        data-aos="fade-up"
        >
            <div className={`absolute inset-0 -z-10`}>
                <img src={data?.backgroundImageUrl} alt="hero" className='w-full h-full object-cover' />
            </div>
            <div className={`absolute inset-0 -z-10 bg-dark/40`}></div>
            <h1 className='text-center text-light text-xl md:text-3xl xl:text-5xl font-dmSans font-bold w-full md:w-4/5 my-5'>{data?.heading}</h1>
            <p className='text-center md:text-lg text-light w-full md:w-3/4 font-dmSans text-xs'>{data?.content}</p>
            <div className='flex flex-wrap md:flex-nowrap md:flex-row-reverse gap-2 md:gap-10 justify-center'>
                <a href={"mailto:info@assetsroster.com"}>
                    <button className="rounded-md md:text-lg text-xs border-2 font-dmSans border-light px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5">
                        {data?.buttonText1}
                    </button>
                </a>
                <a href={"mailto:info@assetsroster.com"}>
                    <button className="rounded-md md:text-lg text-xs border-2 font-dmSans border-darkGreen bg-light px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5">
                        {data?.buttonText2}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default OverlayCard