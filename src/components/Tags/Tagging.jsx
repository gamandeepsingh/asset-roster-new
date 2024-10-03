import React, { useEffect, useState } from "react";
import client from "../../../sanityClient";
import Spinner from "../utils/Spinner";

export const TextParallaxContentExample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "assetTag"] | order(categoryTitle asc){
            categoryTitle,
            image{
                asset->{
                    url,
                }
            },
            subHeadings[]{
                heading,
                examples[]{
                    exampleText,
                    details,
                }
            },
            body[] {
                ...
            }
        }`)
            .then((data) => {
                setData(data);
            })
            .catch(console.error);
    }, []);

    const renderBlockContent = (block) => {
        switch (block.style) {
            case 'h1':
                return <h2 className='mb-2 text-green font-dmSans text-3xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'h2':
                return <h2 className='mb-2 text-lightYellow font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'h3':
                return <h2 className='mb-2 text-green/80 font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'h4':
                return <h2 className='mb-2 text-dark font-dmSans text-xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'h5':
                return <h2 className='mb-2 text-dark font-dmSans text-lg font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'h6':
                return <h2 className='mb-2 text-dark font-dmSans text-md font-bold'>{block.children.map(child => child.text).join('')}</h2>;
            case 'blockquote':
                return <blockquote className='mb-2 text-dark font-dmSans italic border-l-4 border-gray-300 pl-4 flex w-full justify-center'>{block.children.map(child => child.text).join('')}</blockquote>;
            default:
                return <p className='mb-2 font-dmSans text-lg pb-2 flex items-start'>{block.children.map(child => child.text).join('')}</p>;
        }
    };

    return (
        <div className="bg-white w-screen mb-10">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <section key={index} className="overflow-hidden bg-white py-4 sm:py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div
                                className={`mx-auto h-fit flex flex-wrap flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className={`w-full md:w-1/2 lg:pr-8 lg:pt-4 h-full flex ${index % 2 === 1 ? "md:items-end md:justify-end" : ""}`}>
                                    <div className={`lg:max-w-lg`}>
                                        <h2 className={`text-2xl leading-7 text-lightYellow font-black font-dmSans`}>
                                            {item.categoryTitle}
                                        </h2>
                                        <div className="mt-3 md:mt-6 text-lg leading-8 text-gray-600">
                                            {item.body?.map((bodyItem, i) => (
                                                <span key={i}>
                                                    {renderBlockContent(bodyItem)}
                                                </span>
                                            ))}
                                        </div>
                                        <dl className="mt-5 md:mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                            {item.subHeadings?.map((subHeading, k) => (
                                                <SubHeadingBlock subHeading={subHeading} key={k} />
                                            ))}
                                        </dl>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 max-h-[300px] md:max-h-full md:h-screen overflow-hidden">
                                    <img
                                        src={item.image?.asset?.url}
                                        alt={item.categoryTitle}
                                        className="w-full h-full object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            ) : (
                <p><Spinner /></p>
            )}
        </div>
    );
};

// New SubHeadingBlock Component
const SubHeadingBlock = ({ subHeading }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="relative">
            <dt className="inline font-semibold text-dark/90 text-start">
                {subHeading?.examples?.exampleText}
            </dt>
            <dd className="flex flex-col">
                {subHeading.examples?.slice(0, showAll ? subHeading.examples.length : 3).map((example, l) => (
                    <div key={l} className="mb-4">
                        <h3 className="font-bold text-lg md:text-xl text-green  font-dmSans">
                            {example?.exampleText}
                        </h3>
                        <ul className="list-disc pl-5 space-y-0">
                            {example.details?.split(',').map((tagType, index) => (
                                <li key={index} className="text-sm md:text-base text-gray-600 font-dmSans">
                                    {tagType.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* "Read More" Button */}
                {subHeading.examples.length > 3 && (
                    <button
                        className="w-fit rounded-md text-xs border-2 font-dmSans bg-darkGreen border-darkGreen px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "Read More"}
                    </button>
                )}
            </dd>
        </div>
    );
};
