import React from 'react';
import SwipeCarousel from "../Home/SwipeCarousel";

const ImagesGrid = () => {
    return (
        <div className='w-full flex justify-center sm:mb-10 overflow-hidden' id='technologies'>
            <SwipeCarousel />
        </div>
    );
};

export default ImagesGrid;