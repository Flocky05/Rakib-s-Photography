import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoStar, IoStarHalfOutline } from "react-icons/io5";

const DetailPage = () => {
    const { title, picture, description, price
    } = useLoaderData();
    return (
        <div className='m-7 items-center p-20'>
            <img className='w-full ' src={picture} alt="" />
            <h2 className='text-3xl text-semibold'>{title}</h2>
            <p>{description}</p>
            <div className='flex space-around  '>
                <h2 className='text-2xl text-bold text-orange-600'>{price}</h2>
                <h2 className='text-2xl flex text-orange-600 '><IoStar></IoStar> <IoStar></IoStar><IoStar></IoStar><IoStar></IoStar><IoStarHalfOutline></IoStarHalfOutline></h2>
            </div>
        </div>
    );
};

export default DetailPage;