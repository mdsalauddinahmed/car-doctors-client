import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
 
    const [service,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
  console.log(service)
    return (
        <div>
            <h1>{service.length}</h1>
            <div className='text-center space-y-3'>
                <h3 className='text-2xl font-bold text-orange-600'>Our services</h3>
                <h3 className='text-5xl'>Our Service area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    service.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Services;