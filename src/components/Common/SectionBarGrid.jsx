import React from 'react'

const SectionBarGrid = ({ data }) => {

    return (
        <section className='w-screen flex flex-col items-start justify-center min-h-[250px] lg:min-h-[650px] bg-darkGreen my-10 py-10'>
            <div className="w-5/6 mx-auto  flex flex-col lg:flex-row items-center gap-4">
                <div className="lg:w-1/2 h-full flex flex-col gap-y-10 justify-center items-start">
                    <h1 className='text-5xl font-bold text-light font-dmSans'>{data.heading}</h1>
                    <p className='md:text-lg text-light/50 font-dmSans text-sm'>
                        {data.content}
                    </p>
                    {
                        data.buttonText &&
                        <button className="whitespace-nowrap normal-case rounded-md border-2  border-black bg-white px-6 py-2 text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none font-dmSans text-sm md:text-base">
                            {data.buttonText}
                        </button>
                    }
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="">
                        <div className="container mx-auto p-0 pb-8">
                            <div className={`grid grid-cols-1 ${data?.images?.length === 1 ? "" : "lg:grid-cols-4"}  gap-4`}>
                                {data?.images?.map((image, index) => (
                                    <div key={index} className={` ${image.length === 1 ? "w-full" : index === 0 ? "lg:col-span-2 lg:row-span-2" :""} relative overflow-hidden rounded-md shadow-lg group`}>
                                        <img src={image?.image?.asset?.url} alt={image.alt} className={`h-full w-full ${image.length === 1 ? "h-[350px]":""} ${index>0 && "h-[200px]"} object-cover group-hover:scale-110 transition-scale duration-300`} />
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-20 opacity-100 transition-opacity duration-300 ">
                                            <div className="absolute bottom-4 left-4 p-2">
                                                <h3 className="text-lg font-bold text-white  font-dmSans">{image.alt}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBarGrid