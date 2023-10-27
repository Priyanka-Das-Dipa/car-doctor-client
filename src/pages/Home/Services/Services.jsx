import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="mb-10">
            <div className="text-center space-y-3 mb-10">
                <h5 className="text-xl text-orange-600 font-semibold">Services</h5>
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="text-base font-normal">The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;