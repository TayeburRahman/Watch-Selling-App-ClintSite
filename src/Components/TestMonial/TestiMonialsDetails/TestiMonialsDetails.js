import { Rating } from '@mui/material';
import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
     return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={testiMonialDetail?.productUrl} />
                <p>{testiMonialDetail?.description}</p>
                <Rating name="read-only" value={testiMonialDetail?.rating} readOnly />
            </div>
            <div className="testimonial-name">
                <h5>{testiMonialDetail?.userName}</h5>
                <small>{testiMonialDetail?.address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;