import React, { useEffect } from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaArrowUpLong } from "react-icons/fa6";


const BackToTop = () => {
    const [scrolled, setScrolled] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
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
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className={`z-30 h-12 w-12 fixed bottom-[3.5rem] left-8 bg-lightYellow text-darkGreen p-2 rounded-md flex justify-center items-center border-2 border-darkGreen hover:scale-105 transition-all duration-200 ${scrolled ? "visible" : "hidden"} flex justify-center items-center overflow-hidden`}>
            <button onClick={scrollToTop} className='flex items-center justify-center'>
                <FaArrowUpLong size={20} className='' />
            </button>
        </div>
    )
}

export default BackToTop