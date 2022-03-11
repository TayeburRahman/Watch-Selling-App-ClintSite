import React from "react";
import img from "../../image/aboutus.png";

const HomeFastSection = () => {
  return (
    <div className="container">
      <div className="row mt-5 pb-5 mb-5 pt-5">
        <div className="col-md-6 col-sm-6">
          <div>
            <img src={img} width="100%" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 p-5 text-left space">
          <h6 sx={{ letterSpacing: 10 }} >THE PRODUCTS</h6>
          <h1 className="mb-4 color-text" sx={{ fontFamily: 'Monospace' }}>All About Fabulous</h1>
          <p>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim, rhoncus, imperdiet a,
            venenatis vitae, justo. Etiam ultricies nisi vel augue
            incididunt.Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum. Aenean imperdiet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFastSection;
