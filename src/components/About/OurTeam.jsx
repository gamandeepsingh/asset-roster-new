import React, { useEffect } from 'react';
import aos from "aos"
import "aos/dist/aos.css"

const teamData = {
    team: [
        { name: 'John Doe', role: 'CEO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
        { name: 'Jane Smith', role: 'CFO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
        { name: 'Alice Johnson', role: 'CTO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
        { name: 'John Doe', role: 'CEO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
        { name: 'Jane Smith', role: 'CFO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
        { name: 'Alice Johnson', role: 'CTO', image: 'https://assets.lummi.ai/assets/QmSek7VDTuh8tLSQobe4h5cRGva86unvTMFCQ4Z24rbaBr?auto=format&w=1500' },
    ],
};

const theme = {
    background: 'bg-white',
    text: 'text-darkGreen',
    heading: 'text-lightYellow',
    paragraph: 'text-darkGreen',
};

const OurTeam = () => {
    useEffect(()=>{
        aos.init(1800)
      },[])

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4  mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    At Assets Roster, our team is the backbone of our performance-driven culture. We empower each member to learn, grow, and excel, fostering a culture built on trust, collaboration, and a commitment to excellence. By attracting top talent with diverse backgrounds, we deliver innovative solutions and exceptional client experiences.
                    </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {teamData.team.map((member, index) => (
                        <div key={index} className="items-center bg-gray-50 rounded-md p-4 shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                            <a href="#" className='w-1/3'>
                                <img className="w-full aspect-square object-cover rounded-md sm:rounded-none sm:rounded-l-lg" src={member.image} alt={`${member.name} Avatar`} />
                            </a>
                            <div className="p-5 w-2/3">
                                <h3 className="text-xl font-bold  text-gray-900 dark:text-white">
                                    <a href="#">{member.name}</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    {member.name} drives the technical strategy of the flowbite platform and brand.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                    {/* Add more social icons as needed */}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
