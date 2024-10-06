import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowRight } from 'react-icons/sl';
import { RiMenu5Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const   toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full flex h-20 justify-center mt-6 md:border-b-2 md:border-green bg-white z-50 transition-all duration-200 ${scrolled ? 'top-0' : 'top-5'}`}>
            {/* desktop */}
            <nav className='w-full flex justify-evenly items-center max-[880px]:hidden'>
                {/* logo */}
                <Link to={"/"} className='w-[58px] h-[50px] object-contain p-1'>
                    <img src={logo} alt="Assets roster" className='object-contain h-full w-full' title='Assets roster' loading='lazy' />
                </Link>
                {/* links */}
                <div className=' py-3 px-10 rounded-[17px]'>
                    <ul className='flex gap-1 justify-center items-center text-[14px] text-center transition-all duration-1000'>
                        <Link to="/">
                            <li className={`hover:scale-105 px-6 transition-all duration-300 cursor-pointer ${location.pathname === '/' ? 'bg-green text-white rounded-md p-2' : ''}`}>
                                Home
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className={`hover:scale-105 px-6 transition-all duration-300 cursor-pointer ${location.pathname === '/about' ? 'bg-green text-white rounded-md p-2' : ''}`}>
                                About us
                            </li>
                        </Link>
                        <Link to="/service">
                            <li className={`hover:scale-105 px-6 transition-all duration-300 cursor-pointer ${location.pathname === '/service' ? 'bg-green text-white rounded-md p-2' : ''}`}>
                                Services
                            </li>
                        </Link>
                        <div className="flex justify-center px-4 text-dark">
                            <FlyoutLink href="#" FlyoutContent={TagsContent}>
                                Tags
                            </FlyoutLink>
                        </div>
                        <Link to="/softwares">
                            <li className={`hover:scale-105 px-6 transition-all duration-300 cursor-pointer ${location.pathname === '/softwares' ? 'bg-green text-white rounded-md p-2' : ''}`}>
                                Software
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className={`hover:scale-105 px-6 transition-all duration-300 cursor-pointer ${location.pathname === '/products' ? 'bg-green text-white rounded-md p-2' : ''}`}>
                                Products
                            </li>
                        </Link>
                        <div className="flex justify-center px-4 text-dark">
                            <FlyoutLink href="#" FlyoutContent={ResourceContent}>
                                Resources
                            </FlyoutLink>
                        </div>
                    </ul>
                </div>
                {/* Contact Button */}
                <a href={"mailto:contact@assetroster.com"} className='flex gap-[38px] text-[13px]  text-center'>
                    {/* <button className='bg-green  text-white opacity-1 leading-[20px] px-7 py-[10px] rounded-md mr-2 hover:scale-105 transition-all duration-300'>Contact</button> */}
                    <button className="whitespace-nowrap rounded-md border-2  border-green bg-white px-6 py-2 font-semibold uppercase text-green transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">
                        Contact Us
                    </button>
                </a>
            </nav>

            {/* mobile */}
            <nav className={`max-[880px]:flex max-[880px]:flex-col justify-between items-center w-full p-3 pb-0 hidden max-xl:visible ${isOpen ? 'h-full ' : 'h-[84px]'}`}>
                <div className='flex flex-row justify-between w-full'>
                    {/* Logo for mobile */}
                    <Link to={"/"} className='w-[58px] h-[50px] object-contain p-1'>
                        <img src={logo} alt="assets roster" className='object-contain h-full w-full' title='Assets roster' loading='lazy' />
                    </Link>
                    {/* Hamburger Menu */}
                    <button onClick={toggleMenu} className='text-3xl text-end focus:outline-none h-full z-10 max-sm:mr-2 max-lg:mr-5'>
                        {isOpen ? '✖' : <RiMenu5Fill size={25} />}
                    </button>
                </div>
                {/* Mobile Menu */}
                <div className={`z-20 flex flex-col justify-around items-center mt-6 bg-white rounded-[17px] py-2 w-full transition-all duration-300 ease-in-out ${isOpen ? 'min-h-[100vh] opacity-100 transform translate-y-0 ' : 'max-h-0 opacity-0 transform -translate-y-10 overflow-hidden'}`}>
                    <ul className='flex flex-col justify-between gap-4 text-[24px]  font-light text-center'>
                        <Link to="/" >
                            <li  className={` font-light hover:scale-105 transition-all duration-300 cursor-pointer transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-transform duration-300 ease-in-out`}>
                                Home
                            </li>
                        </Link>
                        <Link to="/about" onClick={toggleMenu}>
                            <li className={` font-light hover:scale-105 transition-all duration-300 cursor-pointer transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-transform duration-1000 ease-in-out`}>
                                About us
                            </li>
                        </Link>
                        <div className="flex justify-center">
                            <FlyoutLink href="#" FlyoutContent={ResourceContent} className="" zIndex={20}>
                                Resources
                            </FlyoutLink>
                        </div>
                        <Link to="/service" onClick={toggleMenu}>
                            <li className={` font-light hover:scale-105 transition-all duration-300 cursor-pointer transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-transform duration-1000 ease-in-out`}>
                                Service
                            </li>
                        </Link>
                        <div className="flex justify-center">
                            <FlyoutLink href="#" FlyoutContent={TagsContent} className="" zIndex={10}>
                                Tags
                            </FlyoutLink>
                        </div>
                        <Link to="/softwares" onClick={toggleMenu}>
                            <li className={` font-light hover:scale-105 transition-all duration-300 cursor-pointer transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-transform duration-300 ease-in-out`}>
                                Softwares
                            </li>
                        </Link>
                        <Link to="/products" onClick={toggleMenu}>
                            <li className={` font-light hover:scale-105 transition-all duration-300 cursor-pointer transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-transform duration-300 ease-in-out`}>
                                Products
                            </li>
                        </Link>
                    </ul>
                    {/* Contact Button */}
                    <a href={"mailto:contact@assetroster.com"} className=' gap-[38px] text-[23px]  text-center mb-10 '>
                        {/* <button className='bg-[#004C4C] text-[#fdfdfd] leading-[20px] px-7 py-[10px] rounded-md mr-2 hover:scale-105 transition-all duration-300'>
                            Contact
                        </button> */}
                        <button className="whitespace-nowrap text-sm md:text-lg rounded-md  md:rounded-md border-2  border-black bg-white p-2 md:px-2 md:py-1 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">
                            Contact Us
                        </button>
                    </a>
                </div>
            </nav>

        </div>
    );
}

const FlyoutLink = ({ children, href, FlyoutContent, zIndex=50 }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative"
            style={{ zIndex: zIndex }}
        >
            <a href={href} className="relative text-dark font-dmSans flex items-center justify-center gap-1">
                {children}
                <span
                    className={`transition-all ease-in-out duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
                >
                    <IoIosArrowDown size={15} />
                </span>
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-light" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const ResourceContent = () => {
    return (
        <div className="w-64 bg-light text-dark p-6 shadow-xl overflow-y-scroll md:overflow-hidden">
            <div className="mb-3 space-y-3">
                <a href={"/resources"} className="font-semibold text-start underline font-dmSans">Resources</a>
                <h3 className="font-semibold text-start underline font-dmSans">Tools</h3>
                <a href="/resources/roi-calculator" className="font-dmSans block text-sm hover:underline text-start">
                    - Asset ROI Calculator
                </a>
                <a href="/resources/maintenance-calculator" className="block font-dmSans text-sm hover:underline text-start">
                    - Maintenance Calculator
                </a>
                <a href="/resources/qr-code-generator" className="block font-dmSans text-sm hover:underline text-start">
                    - QR Code Generator
                </a>
                <a href="/resources/barcode-generator" className="block font-dmSans text-sm hover:underline text-start">
                    - Barcode Generator
                </a>
            </div>
            <div className="mb-6 space-y-3">
                <h3 className="font-semibold text-start underline font-dmSans">Learning</h3>
                <a href="/resources/#blogs" className="block font-dmSans text-sm hover:underline text-start">
                    - Blog
                </a>
                <a href="/resources/#learn" className="block font-dmSans text-sm hover:underline text-start">
                    - Learning Center
                </a>
                <a href="/resources/#caseStudies" className="block font-dmSans text-sm hover:underline text-start">
                    - Case Studies
                </a>
            </div>
        </div>
    );
};
const TagsContent = () => {
    return (
        <div className="w-64 bg-light text-dark p-6 shadow-xl overflow-y-scroll md:overflow-hidden">
            <div className="mb-3 space-y-3">
                <a href={"/tags"} className="font-semibold text-start underline font-dmSans">Tags</a>
                <h3 className="font-semibold text-start font-dmSans">Asset Tagging by-</h3>
                <a href="/tags/#asset-tags-by-application" className="font-dmSans block text-sm hover:underline text-start">
                    - Application
                </a>
                <a href="/tags/#asset-tags-by-industry-type" className="block font-dmSans text-sm hover:underline text-start">
                    - Industry Type
                </a>
                <a href="/tags/#asset-tags-by-technology-naming-barcode-rfid-and-others" className="block font-dmSans text-sm hover:underline text-start">
                    - technology
                </a>
                <a href="/tags/#asset-tags-by-type-with-base-surfaces" className="block font-dmSans text-sm hover:underline text-start">
                    - types
                </a>
            </div>
            <div className="mb-6 space-y-3">
                <h3 className="font-semibold text-start font-dmSans">Why tagging</h3>
                <a href="/tags/#approach" className="block font-dmSans text-sm hover:underline text-start">
                    - Our Approach
                </a>
                <a href="/tags/#whyChooseUs" className="block font-dmSans text-sm hover:underline text-start">
                    - Why Choose Assets Roster
                </a>
                <a href="/tags/#benefits" className="block font-dmSans text-sm hover:underline text-start">
                    - Benefits
                </a>
            </div>
        </div>
    );
};

export default Navbar;