import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
           <header className='bg-green-300 p-6'>
                <h2 className='text-center text-5xl font-bold'>User Management System</h2>
           </header>
           <div className='max-w-[1150px] mx-auto min-h-screen'>
                <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;