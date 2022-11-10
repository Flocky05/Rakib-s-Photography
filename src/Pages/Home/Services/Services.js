import React, { useEffect, useState } from 'react';
import useChangeTitle from '../../../hooks/changeTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import { BeatLoader } from 'react-spinners';
const Services = () => {
    const [services, setServices] = useState([]);
    useChangeTitle('Services')
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>All Services</h2>
            </div>
            {
                services?.length ? <div className='grid grid-cols-1 lg:grid-cols-3 w-max mx-auto md:grid-cols-2 p-4 gap-8'>
                    {
                        services?.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        >

                        </ServiceCard>)
                    }
                </div> : <div className='flex justify-center mt-[10%]'><BeatLoader color="#36d7b7" /></div>
            }
        </div>
    );
};

export default Services;