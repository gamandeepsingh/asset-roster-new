import React, { useEffect, useState } from 'react';
import client from '../../../sanityClient';

const FAQs = () => {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "faq"]{
            question,
            answer
        }`)
            .then(data => {
                setFaqs(data);
            })
            .catch(console.error);
    }, []);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 bg-gray-50 w-screen" id='faqs'>
            <div className="mx-auto w-full px-4 md:px-28">
                <div className="w-full md:max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-dmSans font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-xl font-dmSans mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Got Questions? We&apos;ve Got Answers!
                    </p>
                </div>

                <div className=" mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFaq(index)}
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            >
                                <span className="flex text-base font-dmSans sm:text-lg text-left font-semibold text-black">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`px-4 overflow-hidden transition-max-height duration-500 text-center md:text-left ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                                    }`}
                            >
                                <p className="mt-2 text-gray-600 text-left font-dmSans text-base pb-3">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9 font-dmSans">
                    Didn&apos;t find the answer you are looking for?{' '}
                    <a
                        href="mailto:info@assetsroster.com"
                        title=""
                        className="font-medium text-green transition-all duration-200 underline md:no-underline hover:underline"
                    >
                        Contact our support
                    </a>
                </p>
            </div>
        </section>
    );
};

export default FAQs;
