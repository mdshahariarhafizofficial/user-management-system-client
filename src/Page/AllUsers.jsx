import React, { useState } from 'react';
import { FaEdit, FaUser } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';

const AllUsers = () => {
    const instantUser = useLoaderData();
    const [users, setUsers] = useState(instantUser);
    console.log(instantUser);
    

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

                            {/* Row */}

                            {
                                users.map( (user ,index) => 
                            <tr key={index}>
                                <th>{
                                    index+1
                                    }</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.status}</td>
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
                                )    
                            }

                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;