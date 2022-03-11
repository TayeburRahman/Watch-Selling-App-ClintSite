import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Rating from "react-rating";
import img from "../../image/C1.png";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
 
const Products = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="m-5">
        <div className=" text-left" sx={{ fontFamily: "Monospace" }}>
          <h3>Watch</h3>
          <p className="text-secondary">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer! Accessorize with a straw hat and you're
            ready
            <br />
            <br />
            for summer! Accessorize with a straw hat and you're ready for
            summer! Faded short sleeves t-shirt with high neckline. Soft and
            stretchy material for a comfortable fit. Accessorize with a straw
            hat and you're ready for summer!...
          </p>
          <img src={img} width="100%" alt="" />
        </div>
        <div className="product-section-name p-3 mb-5">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h4>Showing 10 of 10 products</h4>
            </Grid>
            <Grid item xs={12} md={6}>
              <input className="search-input" type="text" />
              <button className="button-search">
                <i class="fas fa-search"></i>{" "}
              </button>
            </Grid>
          </Grid>
        </div>
        <div className="d-flex row product-row">
          {product.map((pd) => (
            <Card className="col-md-3 m-1 col-sm-12" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                width="100%"
                height="140"
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
              <Link to={`/product/${pd._id}`}>
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
    </>
  );
};

export default Products;
