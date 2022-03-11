import React from "react";
import img from "../../image/404.png";
import Footer from "../Sheard/Footer";
import Header from "../Sheard/Header";

const NotFount = () => {
  return (
    <div>
         <Header></Header>
      <div className="p-5 m-5">
        <img src={img} width="70%" alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFount;
