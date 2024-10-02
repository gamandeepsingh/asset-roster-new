import React from 'react'
import logo from "../assets/yLogo.svg"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='w-full flex justify-center h-full pt-[10px] pb-8 bg-green'>
            <div className='w-5/6 text-center flex flex-col items-center'>
                {/* <p className='text-[#FDFDFD] text-[56px] leading-[67px]  font-bold max-md:text-5xl max-sm:text-4xl max-sm:w-full max-md:leading-[55px] w-[65%] pt-[100px] '>We will take care of your assets like it&apos;s our own</p>
                <button onClick={scrollToTop}  className='bg-[#fdfdfd] text-[#2A2A2A]  text-[13px] leading-[22px] py-2 px-5 rounded-md mt-[80px] max-md:mt-[30px]'>
                    Start right now
                </button> */}
                {/* line-partition */}
                <div className='w-full h-[1px] bg-[#fdfdfd] mt-16 mb-5 max-md:mt-10'></div>

                {/* footer */}
                <div className='w-full flex justify-between min-h-[350px] max-lg:flex-col-reverse max-lg:items-center '>
                    {/* left */}
                    <div className='w-[50%] flex flex-col justify-between items-start max-lg:w-full max-lg:items-center max-lg:justify-start'>
                        <div className='flex gap-x-2 items-start justify-start'>
                            <div>
                                <img src={logo} alt="logo" className='w-[70px] max-lg:w-[50px] max-lg:m-2'  loading='lazy' title='Assets Roster'/>
                            </div>
                            <div className='flex flex-col text-star max-lg:text-center t -mt-3 max-lg:hidden '>
                                <h2 className='uppercase text-[#FDFDFD] text-[45px] er  mt-0 pt-0 '>Assets Roster</h2>
                                <p className='uppercase text-[#FDFDFD] text-[25px]  font-bold -mt-3 text-start'>Private Limited</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#FDFDFD] text-sm font-extrabold  '>&copy; Assets Roster 2024. All rights reserved.</p>
                        </div>
                        {/* bottom */}
                        <div className='w-full hidden justify-center mt-2 text-[#fdfdfd] gap-4 text-xs max-lg:flex'>
                            <p className='  font-extrabold'>Privacy Policy</p>
                            <p className='  font-extrabold'>Terms & condition</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-[50%] flex flex-col items-center justify-between'>
                        {/* top */}
                        <div className='w-full flex flex-wrap justify-between text-[#fdfdfd] gap-4 max-lg:justify-center'>
                            <div className='w-1/3 flex flex-col items-start max-lg:items-center max-lg:min-w-[250px]'>
                                <p className='text-[13px] text-start max-lg:text-center font-extrabold '>Have any questions? Reach out!
                                    <br />We reply fast</p>
                                <a href="mailto:contact@assetroster.com" className='mt-2 font-extrabold text-lg '>contact@assetsroster.com</a>
                            </div>
                            <div className='w-1/3 flex flex-col items-start max-lg:items-center max-lg:min-w-[250px]'>
                                <p className='text-[13px] max-lg:text-center text-start font-extrabold ' >Assets roster, IP Extension,
                                    <br />
                                    New Delhi - 110092</p>
                                <a href="mailto:info@assetsroster.com" className='mt-2 font-extrabold text-lg '>
                                    +91 1234567899
                                </a>
                            </div>
                        </div>
                        {/* social media */}
                        <div className='w-full max-lg:w-screen h-full flex max-lg:justify-center max-lg:flex-wrap items-end pb-6 gap-4 justify-between max-lg:mt-4 max-md:px-5'>
                            <Card title="LinkedIn" href="https://www.linkedin.com/company/assets-roster-private-limited" Icon={FaLinkedinIn}
                            />
                            <Card title="Instagram" href="https://www.instagram.com/assets_roster" Icon={FaInstagram} />                            
                            <Card title="Twitter" href="https://x.com/AssetsRoster" Icon={FaXTwitter} />                            
                        </div>

                        {/* bottom */}
                        <div className='w-full flex justify-end mt-2 text-[#fdfdfd] gap-4 text-xs max-lg:hidden'>
                            <p className='  font-extrabold'>Privacy Policy</p>
                            <p className='  font-extrabold'>Terms & condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


const Card = ({ title, Icon, href }) => {
    return (
        <a
            href={href}
            target='blank'
            className="w-[200px] h-[167px] max-xl:w-[150px] max-xl:h-[120px] flex flex-col justify-between items-start p-4 rounded-md border-[1px] border-slate-300 relative overflow-hidden group bg-[#fdfdfd]"
        >
            <div className="absolute inset-0 bg-[#2A2A2A] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#fdfdfd]  group-hover:rotate-12 transition-transform duration-300 " />
            <Icon className="mb-2 p-1 rounded-md  text-2xl text-[#fdfdfd] group-hover:text-white transition-colors relative z-10 duration-300 bg-[#2A2A2A]" />
            <h2 className="font-medium text-base text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h2>
        </a>
    );
};

export default Footer