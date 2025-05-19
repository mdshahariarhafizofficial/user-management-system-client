import React, { useState } from 'react';
import { FaEdit, FaUser } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const instantUser = useLoaderData();
    const [users, setUsers] = useState(instantUser);
    console.log(instantUser);

    // Delete a User
    const handleDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            
            // Delete user
            fetch(`http://localhost:8000/users/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingUser = users.filter( user => user._id !== id);
                    setUsers(remainingUser)
                                Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted!",
                                icon: "success",
                                timer: 1500
                                });
                }
                
            })
        }
        });
    }

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
                                        <Link to={`/update-user/${user._id}`}>
                                            <button className="btn join-item">
                                                <FaEdit
                                                size={20} color='#155dfc'></FaEdit>
                                            </button>
                                        </Link>
                                        <button 
                                        onClick={()=> handleDelete(user._id)}
                                        className="btn join-item">
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