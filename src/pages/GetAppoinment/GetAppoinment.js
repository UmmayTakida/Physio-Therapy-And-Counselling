import React from 'react';
import { useParams } from 'react-router';

const GetAppoinment = (props) => {
    const { serviceId } = useParams();
    // const { name, img, details } = props();
    return (
        <div>
            <h1>Serial no:{serviceId}</h1>

        </div>
    );
};

export default GetAppoinment;