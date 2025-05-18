import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router';

const AddUser = () => {
    return (
        <div className='my-20'>
                <Link to="/">
                    <button className="btn text-2xl text-blue-600">
                    <MdKeyboardDoubleArrowLeft />
                    All Users
                    </button>
                </Link>
        </div>
    );
};

export default AddUser;