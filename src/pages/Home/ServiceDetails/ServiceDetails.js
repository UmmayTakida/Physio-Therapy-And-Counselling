import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = './data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h3>friends details:{serviceId}</h3>
            
               
}
        </div >
    );
};

export default ServiceDetails;