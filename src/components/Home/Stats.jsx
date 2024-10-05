import React, { useEffect, useRef } from 'react';
import aos from "aos";
import "aos/dist/aos.css";

const Stats = () => {
    const countersRef = useRef(null);

    useEffect(() => {
        aos.init(1800);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounting();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(countersRef.current);

            return () => {
                observer.disconnect();
            };
        }, 2000);
    }, []);

    const startCounting = () => {
        const counters = countersRef.current.querySelectorAll('.counter');

        counters.forEach(counter => {
            const countTo = parseInt(counter.getAttribute('data-count'));
            const duration = 3000;
            let startTime;

            function animateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const increment = Math.floor((progress / duration) * countTo);

                if (increment < countTo) {
                    counter.textContent = increment;
                    requestAnimationFrame(animateCounter);
                } else {
                    counter.textContent = countTo;
                }
            }

            requestAnimationFrame(animateCounter);
        });
    };

    return (
        <div ref={countersRef} className='w-screen flex justify-center items-center'>
            <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 justify-center items-center min-h-[250px] max-sm:grid max-sm:grid-cols-2 max-sm:gap-4">
                <div className="flex flex-col items-center justify-start min-w-[200px] min-h-[136px]">
                    <div className="counter text-[35px] sm:text-[50px] font-bold" data-count="10000">0</div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='text-xl sm:text-2xl font-semibold font-dmSans'>Sites</div>
                        <div className='text-xl sm:text-lg text-dark/80'>Completed</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start min-w-[200px] min-h-[136px]">
                    <div className=" text-[35px] sm:text-[50px] font-bold"><span className='counter' data-count="7">0</span>+</div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='text-xl sm:text-2xl font-semibold font-dmSans'>Million</div>
                        <div className='text-xl sm:text-lg text-dark/80 text-nowrap font-dmSans'>Assets tracked</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start min-w-[200px] min-h-[136px]">
                    <div className=" text-[35px] sm:text-[50px] font-bold">₹<span className='counter' data-count="100000">0</span>cr</div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='text-xl sm:text-2xl font-semibold font-dmSans'>Worth</div>
                        <div className='text-xl sm:text-lg text-dark/80 w-5/6 text-center text-nowrap font-dmSans'>of Capitalization</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start min-w-[200px] min-h-[136px]">
                    <div className=" text-[35px] sm:text-[50px] font-bold"><span className='counter' data-count="100">0</span>%</div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='text-xl sm:text-2xl font-semibold font-dmSans'>Rate</div>
                        <div className='text-xl sm:text-lg text-dark/80 font-dmSans text-nowrap'>of Success</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
