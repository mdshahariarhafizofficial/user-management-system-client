import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-96px)] flex items-center justify-center'>
            <ScaleLoader
            color="#00ff62"
            height={30}
            margin={3}
            />
        </div>
    );
};

export default Loading;