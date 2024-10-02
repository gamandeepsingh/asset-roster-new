import React from 'react';

const historyData = {
    history: [
        { year: 2005, description: "Founded with a vision to revolutionize asset management." },
        { year: 2008, description: "First major milestone achieved with over 100 clients." },
        { year: 2010, description: "Expanded to international markets, establishing offices." },
        { year: 2012, description: "Introduced innovative asset management software." },
        { year: 2014, description: "Awarded as the best asset management company in the industry." },
        { year: 2015, description: "Became an industry leader, managing assets for Fortune 500 companies." },
    ]
};

const theme = {
    background: 'bg-white',
    text: 'text-darkGreen',
    heading: 'text-darkGreen',
    paragraph: 'text-darkGreen',
};

const OurHistory = () => {
    return (
        <section className="my-12 container mx-auto">
            <h2 className={`text-4xl text-center mb-16 font-bold ${theme.heading}`}>Our History</h2>
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

                <div className="space-y-12">
                    {historyData.history.map((item, index) => (
                        <div key={index} className="flex items-center justify-between w-full">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-5/12 text-right">
                                        <p className={`text-lg ${theme.paragraph}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="w-1/12 flex justify-center items-center">
                                        <div className="w-6 h-6 bg-darkGreen rounded-md z-10"></div>
                                    </div>
                                    <div className="w-5/12"></div>
                                </>
                            ) : (
                                <>
                                    <div className="w-5/12"></div>
                                    <div className="w-1/12 flex justify-center items-center">
                                        <div className="w-6 h-6 bg-darkGreen rounded-md z-10"></div>
                                    </div>
                                    <div className="w-5/12">
                                        <p className={`text-lg ${theme.paragraph}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHistory;
