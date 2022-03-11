import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 import './TestiMonials.css'
import { Typography } from '@mui/material';
import useAuth from '../../../Firebase/Hooks/useAuth';

const TestiMonials = () => {
    const {isLoading, authError} = useAuth();
    const [allReviews, setReview] = useState([]);
    console.log('hhh',allReviews)

    useEffect(() => {
        fetch('https://pacific-escarpment-27904.herokuapp.com/review')
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, [isLoading]);

    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5"
            style={{ marginTop: '-46px'}}
            >
                <div className="text-center"
                style={{margin: '0px 0px -50px 0px'}}
                >
                    <Typography 
            sx={{ letterSpacing: 8 }}  
            style={{    paddingTop: "40px", paddingBottom: "15px"}}
            className="mb-4 pb-4" className="text-danger" >USER REVIEW</Typography>
                </div>
                 <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                    allReviews?.map((reviews) => {
                                        return (
                                            <TestiMonialsDetails key={reviews?._key}  testiMonialDetail={reviews}/>

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;