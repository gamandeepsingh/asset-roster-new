import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import aos from "aos"
import "aos/dist/aos.css"

const SoftwareHero = () => {
    useEffect(() => {
        aos.init(1800)
    }, [])
    return (
        <section data-aos="fade-up">
            <div className="max-w-screen-xl mx-auto mt-12 px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-dark font-medium tracking-tight font-dmSans uppercase">
                        Build products for our Software
                    </h1>
                    <h2 className="text-4xl text-dark font-extrabold mx-auto md:text-5xl font-dmSans">
                        Design your Assets faster with the our  <span className="whitespace-nowrap text-3xl md:text-5xl"> largest softwares kit </span>
                    </h2>
                    <p className="max-w-2xl mx-auto font-dmSans">
                    Accelerate your workflow with the ultimate collection of design software at your fingertips.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 space-y-0">
                        <Link to="#more">
                            <button className="rounded-md border-2 font-dmSans border-darkGreen px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap ">
                                Learn more
                            </button>
                        </Link>
                        <button className="rounded-md border-2 font-dmSans border-light bg-darkGreen px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap ">
                            Get access
                        </button>
                    </div>
                </div>
                <div className="mt-14">
                    <img src={"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"} className="w-full shadow-lg rounded-md border" alt="" />
                </div>
            </div>
        </section>
    )
}

export default SoftwareHero