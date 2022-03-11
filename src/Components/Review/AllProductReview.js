import React, { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hooks/useAuth";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import "./Review.css";
import ReviewModel from "./Review";

const AllProductReview = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useAuth();
  const email = user.email;
  const [oderProduct, setOderProduct] = useState([]);

  useEffect(() => {
    fetch(`https://pacific-escarpment-27904.herokuapp.com/userOder/${email}`)
      .then((res) => res.json())
      .then((data) => setOderProduct(data));
  }, [user]);

  const handleOrdersReview = (e) => {};
  return (
    <div className="row m-5">
      <div className="col-md-12 col-sm-12">
        {oderProduct.map((order, index) => (
          <Grid container className="Review shadow p-3 mb-5 bg-body rounded">
            <Grid item xs={3} md={3}>
              <img width="100%" src={order.url} alt="" />
            </Grid>
            <Grid item xs={3} md={3}>
              <h6>{order.name}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <Rating name="read-only" value={order.rating} readOnly />
            </Grid>
            <Grid item xs={3} md={3}>
              <button
                onClick={handleOpen}
                type="button"
                class="btn btn-outline-success bt-1"
              >
                Review Now
              </button>
            </Grid>
            <ReviewModel
        oderProduct={order}
        open={open}
        handleClose ={handleClose}
        handleOpen={handleOpen}
      ></ReviewModel>
          </Grid>
          
        ))}
      </div>
       
    </div>
  );
};

export default AllProductReview;
