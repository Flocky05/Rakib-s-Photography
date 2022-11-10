import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, picture, description, title } = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl APP">

                <PhotoProvider>
                    <PhotoView src={picture}>
                        <figure><img className='h-64 w-full' src={picture} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0, 200)}...</p>
                    <Link to={`/service/${_id}`} className="card-actions justify-end text-blue-700 text-xl p-9">
                        <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;