import React from "react";

const Footer = () => {
  return (
    <div className="footer row p-5 ">
      <div className="col-md-4 col-sm-12">
        <div className="row d-flex">
          <h5>
            Your Account
            <br />
            <br />
          </h5>
          <div className="col-md-6 col-sm-12">
            <a href="">Personal info</a>
            <br />
            <a href="">Orders</a>
            <br />
            <a href="">Credit slips</a> <br />
            <a href="">Addresses</a> <br />
            <a href=""> My Wishlists</a> <br />
          </div>
          <div className="col-md-6 col-sm-12">
            <a href=""> Cookies</a> <br />
            <a href="">Contact Us</a>
            <br />
            <a href=""> Help Centre</a> <br />
            <a href="">About Us</a> <br />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="row d-flex">
          <h5>
            Our Company
            <br />
            <br />
          </h5>
          <div className="col-md-6 col-sm-12">
            <a href="">Legal Notice</a>
            <br />
            <a href="">Secure payment</a>
            <br />
            <a href="">Contact us</a> <br />
            <a href="">Sitemap</a> <br />
            <a href="">My account</a> <br />
          </div>
          
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <h5 className="footer">Phone :</h5>
        <p
          className="text-p
"
        >
          United States & Canada +1 833 895 6770{" "}
        </p>
        <p className="text-p">Australia +61 7 3106 8663 </p>
        <p className="text-p">United States & Canada +1 833 895 6770</p>
        <p className="text-p">Great Britain +44 800 802 1046</p>
        <p className="text-p">New Zealand +64 4888 0182 </p>
        <p> </p>
        <br />
      </div>
    </div>
  );
};

export default Footer;
