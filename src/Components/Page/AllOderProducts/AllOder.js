import React, { useEffect, useState } from "react";
import useAuth from "../../../Firebase/Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const AllOder = () => {
  const { user } = useAuth();
  const email = user.email;
  const [Products, setProduct] = useState([{}]);
  const [isDelete, setIsDelete] = useState(false);
  console.log(Products);

  useEffect(() => {
    fetch(`https://pacific-escarpment-27904.herokuapp.com/userOder/${email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [email, isDelete]);

  const handleDeleteOrders = (id) => {
    const url = `https://pacific-escarpment-27904.herokuapp.com/userOder/${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("dltId", result);
            if (result.deletedCount) {
              setIsDelete(true);
            } else {
              setIsDelete(false);
            }
          });
         
      }
    });
  };
  return (
    <div className="p-5"> 
    <h4 className="dashboardTextColor"
    style={{color: 'rgb(199 23 23)',
      fontFamily: 'monospace'}}
    >Wishlist</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
            style={{color: "dimgray", fontFamily:'monospace'}}
            >
              <TableCell align="right"> </TableCell>
              <TableCell align="right"
              style={{fontFamily:'sans-serif'}}
              >PRODUCT NAME</TableCell>
              <TableCell align="right" style={{fontFamily:'sans-serif'}}>PRICE</TableCell>
              <TableCell align="right" style={{fontFamily:'sans-serif'}}>ORDERS</TableCell>
              <TableCell align="right" style={{fontFamily:'sans-serif'}}>DELETE YOUR PRODUCT </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{fontFamily:'monospace'}}
              >
                <TableCell component="th" scope="row">
                  <ListItemAvatar align="right">
                    <Avatar alt="Remy Sharp" src={product.url} />
                  </ListItemAvatar>
                </TableCell>
                <TableCell align="right" 
                component="th" 
                scope="row"
                style={{color:'indianred',fontFamily:'monospace'}}
                >
                  {product.name}
                </TableCell>

                <TableCell align="right"
                style={{fontFamily:'monospace',color:'darkolivegreen'}}
                >{product.price}</TableCell>
                <TableCell align="right"
                style={{fontFamily:'monospace', color:'darkolivegreen'}}
                >{product.state}</TableCell>
                <TableCell align="right"
                style={{fontFamily:'monospace'}}
                >
                  <Button
                    onClick={() => handleDeleteOrders(product._id)}
                    variant="outlined"
                    color="error"
                    style={{fontFamily:'system-ui',color:'darkolivegreen'}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllOder;
