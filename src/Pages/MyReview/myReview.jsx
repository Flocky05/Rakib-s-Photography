import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user?.email}`).then(res => setReviews(res.data)).catch(err => console.log(err))
    }, [user?.email])
    console.log(reviews);
    function handleDelete(id) {
        const sure = window.confirm('Are you sure')
        if (sure) {
            axios.delete(`http://localhost:5000/review/${id}`).then(res => {
                setReviews(p => p.filter(el => el._id !== id))
            })

        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews?.map(el => <tr>

                            <td>
                                <div className="flex items-center space-x-3 ">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img className='w-10 h-10 rounded-full' src={el.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{el.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{el.message}</span>
                            </td>
                            <td>{el.email}</td>
                            <td>
                                <button onClick={() => handleDelete(el._id)} className="btn btn-ghost btn-xs">Delete</button>
                                <Link to=''>
                                    <button className="btn btn-ghost btn-xs ml-3">Edit</button>
                                </Link>

                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyReview;