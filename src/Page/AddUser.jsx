import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddUser = () => {


    // Handle Add User
    const handleAddUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newUserData = Object.fromEntries(formData.entries());
        console.log(newUserData);
         
        // Send Data to DB
        fetch('http://localhost:8000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })
        .then( res => res.json() )
        .then( data => {
            if (data.insertedId) {
                Swal.fire({
                title: "User Added Successfully!",
                icon: "success",
                timer: 1500,
                });
            }
        } )
        form.reset();
    }

    return (
        <div className='my-20 px-5 lg:px-0'>
                <Link to="/">
                    <button className="btn text-2xl text-blue-600">
                    <MdKeyboardDoubleArrowLeft />
                    All Users
                    </button>
                </Link>
                <div className='my-10 max-w-[900px] mx-auto'>
                    <div className='text-center space-y-2'>
                        <h2 className='text-5xl font-bold'> New User </h2>
                        <p className='text-2xl text-gray-700'>Use the bellow form to create a new account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleAddUser} className='my-10'>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <legend className="fieldset-legend text-xl">Name</legend>
                            <input type="text"
                            name='name' className="input w-full text-xl" placeholder="Type name  here" />
                            {/* Email */}
                            <legend className="fieldset-legend text-xl">Email</legend>
                            <input type="email"
                            name='email' className="input w-full text-xl" placeholder="Type email  here" />
                            {/* Gender */}
                            <div className='flex gap-6 my-4'>
                                <p className='text-2xl font-bold'>Gender</p>
                                <div className='flex gap-6'>
                                    <p className='flex gap-2 items-center text-xl'>
                                        <input type="radio" name="gender" value="male" id="" />
                                        <label htmlFor="male">Male</label>
                                    </p>
                                    <p className='flex gap-2 items-center text-xl'>
                                        <input type="radio" name="gender" value="female" id="" />
                                        <label htmlFor="female">Female</label>
                                    </p>
                                </div>
                            </div>
                            {/* Status */}
                            <div className='flex gap-6'>
                                <p className='text-2xl font-bold'>Status</p>
                                <div className='flex gap-6'>
                                    <p className='flex gap-2 items-center text-xl'>
                                        <input type="radio" name="status" value="active" id="" />
                                        <label htmlFor="active">Active</label>
                                    </p>
                                    <p className='flex gap-2 items-center text-xl'>
                                        <input type="radio" name="status" value="Inactive" id="" />
                                        <label htmlFor="Inactive">Inactive</label>
                                    </p>
                                </div>
                            </div>

                            {/* Submit */}
                            <button type='submit' className="btn btn-block bg-green-300 text-xl mt-6">Save</button>

                        </fieldset>
                    </form>

                </div>
        </div>
    );
};

export default AddUser;