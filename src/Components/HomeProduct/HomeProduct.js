import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Rating from "react-rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const HomeProduct = () => {
  const [product, setProduct] = useState([]);
  const newProduct = product.slice(0, 6);
  console.log(product);

  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="bgColorProduct pt-3 pb-4" style={{background:'#eceee4'}}>
      <div className="d-flex row product-row m-4">
        <Typography sx={{ letterSpacing: 6 }}  className="text-danger mb-1 mt-4">THE LATEST</Typography>
        <Typography className="p-3" sx={{ fontWeight: "bold" }}>
          <h1>Fabulous Products</h1>
        </Typography>
        {newProduct.map((pd) => (
          <Card className="col-md-3 m-3 col-sm-12" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              width="100%"
              height="200"
              image={pd.img}
              alt="green iguana"
            />
            <Rating
              className="Rating"
              initialRating={pd.rating}
              emptySymbol="fa fa-star-o fa-2x Rating"
              fullSymbol="fa fa-star fa-2x Rating"
              fractions={2}
              readonly
            />{" "}
            <br /> <br />
            <Typography gutterBottom variant="h6" component="div">
              {pd.name}
            </Typography>
            <div className="d-flex product-row">
              <p class="text-decoration-line-through">{pd.oldPrice}</p>
              <p class="ms-3 me-3">{pd.updatePrice}</p>
            </div>
            <Link to={`/product/${pd._id}`} style={{textDecoration: 'none'}}>
              <Button variant="contained" className=" mb-4">
                Shop Now{" "}
                <span className="ms-2">
                  {" "}
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
