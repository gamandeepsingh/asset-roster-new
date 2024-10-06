import React, { useEffect } from 'react';
import aos from "aos"
import "aos/dist/aos.css"
import client from '../../../sanityClient';
import svg1 from '../../assets/undraw/teacher.svg'
import svg2 from '../../assets/undraw/world.svg'

const TagHero = () => {
  const [data, setData] = React.useState([])
  const [heading, setHeading] = React.useState([])
  useEffect(() => {
    aos.init(1800)
  }, [])

  useEffect(() => {
    client.fetch(`*[_type == "TagTopSection"]{
            heading,
            content,
            buttonText1,
            buttonText2,
          }`)
      .then(data => {
        setData(data[0]);
        setHeading(data[0].heading.split(' '))
      })
      .catch(console.error);
  }, [])
  return (
    <div data-aos="fade-up" className="min-h-[660px] relative py-16 flex flex-col items-center justify-center">
      <div className='absolute hidden md:block w-44 right-0 translate-y-1/2 top-1 '>
        <img src={svg1} className='animate-updown' alt="" />
      </div>
      <div className='absolute hidden md:block w-44 left-0  translate-y-1/2 top-2/4 '>
        <img src={svg2} className='animate-updown' alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
        <div className="flex items-center justify-center -space-x-2">
          <img loading="lazy" width="400" height="400" src="https://randomuser.me/api/portraits/women/12.jpg" alt="member photo 1" className="h-8 w-8 rounded-md object-cover" />
          <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/45.jpg" alt="member photo 2" className="h-12 w-12 rounded-md object-cover" />
          <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/60.jpg" alt="member photo 3" className="z-10 h-16 w-16 rounded-md object-cover" />
          <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/4.jpg" alt="member photo 4" className="relative h-12 w-12 rounded-md object-cover" />
          <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/34.jpg" alt="member photo 5" className="h-8 w-8 rounded-md object-cover" />
        </div>

        <div className="mt-6 m-auto space-y-6 md:w-8/12 text-center">
          <h1 className="text-4xl font-bold font-dmSans text-dark md:text-5xl">
            {heading.length > 0 && heading.map((item, index) => (
              <React.Fragment key={index}>
                {(index !== heading.length - 2) && item}{' '}

                {(index === heading.length - 2) && (
                  <span className='whitespace-nowrap'>
                    {item}
                  </span>
                )}{' '}
              </React.Fragment>
            ))}
          </h1>


          <p className="md:text-lg text-gray-600 font-dmSans text-sm">
            {data.content}
          </p>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-5">
            <a href="tel:+919958822552">
              <button className="rounded-md md:text-lg text-xs border-2 font-dmSans bg-darkGreen border-darkGreen px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap">
                {data.buttonText1}
              </button>
            </a>
            <a href="tel:+919958822552">
              <button className="rounded-md md:text-lg text-xs border-2 font-dmSans border-darkGreen px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap">
                {data.buttonText2}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagHero;
