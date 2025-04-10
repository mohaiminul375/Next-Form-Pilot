'use client'
import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
const Loading = () => {
    return (
        <div className='min-h-full flex justify-center items-center'>
            <PropagateLoader color='#2DB89D' />
        </div>
    );
};

export default Loading;