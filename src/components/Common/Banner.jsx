import React from 'react'
import { IoIosMail} from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { LiaLinkedinIn } from 'react-icons/lia';

const Banner = () => {
  return (
    <div className='z-[999] w-screen h-40px min-h-40px bg-green absolute top-0 left-0 right-0 flex  items-center before:absolute'>
        <div className='w-full h-30px flex justify-between md:justify-end items-center gap-4 mr-2 md:mr-20 pl-1 md:pl-0'>
            <a href='tel:+919958822552' className='flex'>
                <span className='text-green max-sm:text-light text-xs whitespace-nowrap'><span className=''>Call Us:</span> +91 9958822552</span>
            </a>
            <div className='h-[90%] w-[2px] rounded-md bg-green'></div>
            <div className='flex justify-center items-center gap-3'>
            <a href='mailto:info@assetsroster.com' >
                <IoIosMail className='text-green text-[24px]'/>
            </a>
            <a href='https://www.linkedin.com/company/assets-roster-private-limited' target='_blank' >
                <LiaLinkedinIn className='text-green text-[24px]'/>
            </a>
            <a href='https://www.instagram.com/assets_roster/' target='_blank'>
                <RiInstagramFill className='text-green text-lg'/>
            </a>
            <a href='https://x.com/AssetsRoster' target='_blank'>
                <FaTwitter className='text-green text-lg'/>
            </a>
            </div>
        </div>

        <div className="absolute right-[-2%] bottom-0 w-[42%] h-full bg-[#f9faff] transform skew-x-[-30deg] z-[-1]"></div>
    </div>
  )
}

export default Banner