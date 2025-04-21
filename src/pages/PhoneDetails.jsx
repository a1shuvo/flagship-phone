import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const singlePhone = data.find(phone=>phone.id === parseInt(id));
    const {brand, name, model, image, price, description, storage, camera_info} = singlePhone || {};

    console.log(singlePhone);
    
    return (
        <div>
            Phone Details
        </div>
    );
};

export default PhoneDetails;