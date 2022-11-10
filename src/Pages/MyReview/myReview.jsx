import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';
const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user?.email}`).then(res => setReviews(res.data)).catch(err => console.log(err))
    }, [user?.email])
    console.log(reviews);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
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
                                <div className="flex items-center space-x-3">
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
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyReview;