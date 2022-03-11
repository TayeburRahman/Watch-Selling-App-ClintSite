import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import useAuth from "../../Firebase/Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OderPlaceModel({ open, handleClose, handleOpen, product }) {
  console.log(product)
  const { user } = useAuth();
  const email = user.email;
  const productName = product.name;
  const productUrl = product.img;
  const productPrice = product.updatePrice;
  const rating = product.rating;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.userEmail = email;
    data.url = productUrl;
    data.name = productName;
    data.price = productPrice;
    data.rating = rating;
    data.state = "Pending..";
    fetch("https://pacific-escarpment-27904.herokuapp.com/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Your Oder Successfully ")
        window.location.reload(false);
      });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <h6>Your Name</h6>
            <input
              type="text"
              placeholder="Name"
              {...register("userName", { required: true, maxLength: 80 })}
            />
            <br />
            <br />
            <h6>Addrice</h6>
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true, maxLength: 100 })}
            />
            <br />
            <br />
            <h6>Your Email</h6>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <br />
            <br />
            <h3>{product.name}</h3>
            <h5>Price : {product.updatePrice}$</h5>
            <br />
            <input className="optionSubmit" type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
