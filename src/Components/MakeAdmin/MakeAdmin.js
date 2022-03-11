import { reload } from "@firebase/auth";
import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import img from "../../image/pngtree-users.jpg";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelSubmit = (e) => {
    const user = { email };
    fetch("https://pacific-escarpment-27904.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="imgBg">
      <div>
        <img src={img} width="20%" alt="" />
        <h4 className="makeAdminText">Make a New Admin</h4>
      </div>
      <br />
      <div>
        <form onSubmit={handelSubmit}>
          <input
            type="email"
            className="submit-input"
            id="fname"
            name="email"
            onBlur={handelOnBlur}
            placeholder="New Admin Email"
          />{" "}
          <br />
          <input type="submit" className="submit-button" value="Submit"></input>
        </form>
        {success && (
          <Alert severity="success" className="me-5 ms-5 ">
            This Email, Admin Role Set Successfully
          </Alert>
        )}
         
      </div>
    </div>
  );
};

export default MakeAdmin;
