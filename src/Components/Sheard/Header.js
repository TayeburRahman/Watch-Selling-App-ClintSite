import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import LoginModal from "../UserLogin/LoginModal";
import { Button } from "@mui/material";
import useAuth from "../../Firebase/Hooks/useAuth";
import logo from '../../image/logo-w.png'
import './header.css'

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { user, logOut } = useAuth();
  const [Products, setProduct] = useState([{}]);



  useEffect(() => {
    fetch(`https://pacific-escarpment-27904.herokuapp.com/userOder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user.email]);

  return (
    <div className="headers">
      <Navbar collapseOnSelect expand="lg" bg="" className="bg-colors" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="  text-color-tag">
          <img src={logo} width={120} alt="BigCo Inc. logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: "dimgray"}} />
          <Navbar.Collapse id="responsive-navbar-nav " className="mt-2">
            <Nav className="me-auto text-color-mnu"
            style={{alignItems: "center"}}
            >
              <Nav.Link as={HashLink} to="/home" className="text-color-mnu">
                <h6 className="text-color-mnu">HOME</h6>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aLLProduct" className="text-color-mnu">
              <h6 className="text-color-mnu">CATEGORY</h6> 
              </Nav.Link>
              <NavDropdown title="DASHBOARD" className="text-color-mnu" id="collasible-nav-dropdown"
              style={{marginTop: "-8px"}}
              >
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/dashboard" >
                <h6>Dashboard</h6> 
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/dashboard/myOrders">
                <h6>Your Orders</h6>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/register">
                <h6>Register Now</h6>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={HashLink}  to="/aboutUs"  className="text-color-mnu">
              <h6 className="text-color-mnu">ABOUT US </h6> 
              </Nav.Link>
            
            </Nav>
            <Nav>
               <div className="d-flex right-sec-heder">
               <div className="cart d-grid" style={{alignItems: 'center', height: '40px', width: '40px'}}>
               <Link to="/dashboard/myOrders">
               <i class="fas fa-cart-plus"  style={{fontSize: '120%', color:'darkgoldenrod'}}></i>
              <div className="cartIcons">{Products?.length}</div>
               </Link>
              </div>
              {user?.email ? (
                <Button onClick={logOut} variant="text">
                  <i class="fas fa-sign-out-alt" style={{fontSize: "150%",color: "darkgoldenrod"}}></i>
                </Button>
              ) : (
                <Button onClick={handleOpen} variant="text"
                style={{color:'darkgoldenrod'}}
                >
                  LOGIN
                </Button>
              )}
               </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal open={open} handleClose={handleClose}></LoginModal>
    </div>
  );
};

export default Header;
