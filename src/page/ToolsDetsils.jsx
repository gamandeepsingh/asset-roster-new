import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import OverlayCard from '../components/Common/OverlayCard';
import Newfooter from '../components/Common/Newfooter';
import { useParams } from 'react-router-dom';
import ResourceROI from '../components/Resources/ResourceROI';
import ResourceMaintainance from '../components/Resources/ResourceMaintainance';
import ResourceQR from '../components/Resources/ResourceQR';
import ResourceBarcode from '../components/Resources/ResourceBarcode';
import Spinner from '../components/utils/Spinner';

const ToolsDetails = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);
    if (loading)
        return <Spinner />


    return (
        <>
            <Breadcrumbs />
            {slug === 'roi-calculator' && <ResourceROI />}
            {slug === 'maintenance-calculator' && <ResourceMaintainance />}
            {slug === 'qr-code-generator' && <ResourceQR />}
            {slug === 'barcode-generator' && <ResourceBarcode />}
            <div className='w-screen flex flex-col items-center justify-center'>
                <OverlayCard />
            </div>
            <Newfooter />
        </>
    );
};

export default ToolsDetails;
