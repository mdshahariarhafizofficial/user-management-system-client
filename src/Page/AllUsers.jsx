import React from 'react';
import { FaEdit, FaUser } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router';

const AllUsers = () => {
    return (
        <div className='my-20'>
            <div>
                <Link to="/add-user">
                    <button className="btn text-2xl text-blue-600">
                    New User
                        <FaUser></FaUser>
                    </button>
                </Link>
                <div>
                    <div className="overflow-x-auto mt-10">
                        <table className="table text-xl text-center">
                            {/* head */}
                            <thead className='text-xl font-bold bg-black text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>@Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Male</td>
                                <td>Active</td>
                                <td>
                                    <div className="join space-x-3">
                                        <button className="btn join-item">
                                            <FaEdit
                                            size={20} color='#155dfc'></FaEdit>
                                        </button>
                                        <button className="btn join-item">
                                            <IoIosCloseCircle  size={22} color='red' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;