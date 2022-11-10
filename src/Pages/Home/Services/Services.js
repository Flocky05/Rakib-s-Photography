import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

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
            <div className='grid grid-cols-1 lg:grid-cols-3 w-max mx-auto md:grid-cols-2 p-4 gap-8'>
                {
                    services?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;