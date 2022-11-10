import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoStar, IoStarHalfOutline } from "react-icons/io5";
import { AuthContext } from '../../../../Contexs/AuthProvider/AuthProvider';
import axios from 'axios';
const DetailPage = () => {
    const { user } = useContext(AuthContext)
    const { title, picture, description, price
    } = useLoaderData();
    const hanldeReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        axios.post('http://localhost:5000/reviews', { name }).then(res => console.log(res)).catch(err => console.log(err))
        form.reset();
    }
    return (
        <div className='m-7 items-center p-20'>
            <img className='w-full ' src={picture} alt="" />
            <h2 className='text-3xl text-semibold'>{title}</h2>
            <p>{description}</p>
            <div className='flex justify-between  '>
                <h2 className='text-2xl text-bold text-blue-600'>Price:{price}</h2>
                <h2 className='text-2xl flex text-blue-600 '><IoStar></IoStar> <IoStar></IoStar><IoStar></IoStar><IoStar></IoStar><IoStarHalfOutline></IoStarHalfOutline></h2>
            </div>
            <div className='flex flex-col mx-auto max-w-2xl border border-blue-700 p-10 bg-gray-100 rounded-lg'>
                <div className='flex justify-start items-center mb-4'>
                    <img src={user?.photoURL} alt='' className='w-10 h-10 rounded-full' />
                    <h3 className='text-bold text-xl ml-3'>{user?.displayName}</h3>
                </div>
                <form onSubmit={hanldeReviews}>
                    <input className='border border-blue-600 p-4  rounded-lg w-full' type="text" name="name" placeholder='write something about us' />
                    <button type='submit' className='bg-blue-600 rounded-lg px-4 py-2 mt-3 text-white hover:bg-blue-700'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DetailPage;