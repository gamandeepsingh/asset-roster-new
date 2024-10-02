import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = React.useState([]);
    const location = useLocation(); 

    useEffect(() => {
        const handleLocationChange = () => {
            const pathSegments = location.pathname
                .split('/')
                .filter(item => item && !item.startsWith(':')); 

            setBreadcrumbs(pathSegments.slice(0, 2)); 
        };

        handleLocationChange(); 
    }, [location]); 

    return (
        <section className='flex'>
            <nav className="md:flex justify-start px-5 py-3 text-gray-700 rounded-md" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className='flex items-center'>
                        <Link to="/" className="inline-flex  font-dmSans items-center text-sm font-medium text-gray-700 hover:text-dark/30 ">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>&gt;
                        </Link>
                    </li>
                    {breadcrumbs.map((item, index) => (
                        <li key={index} className={index === breadcrumbs.length - 1 ? 'inline-flex items-center' : 'inline-flex items-center'}>
                            {index === breadcrumbs.length - 1 ? (
                                <span className="ms-1 text-sm whitespace-nowrap font-medium text-dark/80 font-dmSans md:ms-2">{item.slice(0,30)}{item.length>30?"...":""}</span>
                            ) : (
                                <Link to={`/${breadcrumbs.slice(0, index + 1).join('/')}`} className="inline-flex font-dmSans items-center text-sm font-medium text-gray-700 hover:text-dark/30 ">
                                    {item}&gt;
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </section>
    );
}

export default Breadcrumbs;