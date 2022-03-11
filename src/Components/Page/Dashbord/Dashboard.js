import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
// Route
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AllOder from "../AllOderProducts/AllOder";
import ManageAllOder from "../ManageAllOder/ManageAllOder";
import AddProduct from "../../Product/AddProduct";
import useAuth from "../../../Firebase/Hooks/useAuth";
import "./Dashboard.css";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import AdminRoute from "../../../PrivateRoute/AdminRoute";
import AllProductReview from "../../Review/AllProductReview";
import MnageAllProduct from "../../ManageProduct/MnageAllProduct";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import DashbordBGImg from "../../DashbordHome/DashbordBGImg";
import logo from "../../../image/logo-w.png"
 
const drawerWidth = 240;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-left p-4" 
    style={{margin:'-20px'}}
    >
       <Paper variant="outlined" style={{display:'grid',justifyItems: 'center'}}>
         <img src={logo} width={150} />
        </Paper>
      <Toolbar />

        <Box className="bg-color p-1"
        // style={{ background: 'cornflowerblue',  padding: '2px',  borderRadius: '2px'}}
        >
          <Link className="bg-color" to={`${url}`} style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text" 
            style={{    paddingTop: '21px'}}
            >
              Dashboard
            </Button>
          </Link>{" "}
          <hr />
          <Link to={`${url}/myOrders`} style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text">
              {" "}
              your Orders
            </Button>
          </Link>{" "}
          <hr />
          <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text"
            style={{    paddingBottom: '21px'}}
            >
              Product Review
            </Button>
          </Link>
        </Box>
      <br />
      {admin && (
        <Box className="bg-color p-1"
        style={{marginBottom: '20px ' , background: 'slategray',  padding: '2px',  borderRadius: '2px', }}
         >
          <Link
            to={`${url}/manageAllOrders`}
            style={{ textDecoration: "none" }}
          >
            <Button className="text-light" variant="text"
            >
              Manage Orders
            </Button>
          </Link>{" "}
          <hr />
          <Link  
          to={`${url}/addProduct`} style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text">
              Add Product
            </Button>
          </Link>{" "}
          <hr />
          <Link 
            to={`${url}/manageAllProduct`}
            style={{ textDecoration: "none" }}
          >
            <Button className="text-light" variant="text">
              Manage Product
            </Button>
          </Link>{" "}
          <hr />
          <Link  
          to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text"
            style={{ paddingBottom: '21px'}}
            >
              Admin
            </Button>
          </Link>
        </Box>
      )} <br />
      <Link onClick={logOut}   class="button-log">
         Log Out
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="headers-ds">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"
          style={{color:'yellow'}}
          >
            DASHBOARD
          </Typography>
          <Nav className="me-auto text-color-mnu">
              <Nav.Link as={HashLink} to="/home" className="text-color-mnu">
                <p className="textndary mt-3 ms-5"
                style={{color:"floralwhite",  fontWeight:"500"}}
                >Go TO Home Page</p>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aLLProduct" className="text-color-mnu">
                <p className="textndary mt-3"
                style={{color:"floralwhite",  fontWeight:"500" }}
                > Add To Product </p>
              </Nav.Link>
            </Nav>
        </Toolbar>
         
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Route exact path={path}>
          <DashbordBGImg></DashbordBGImg>
        </Route>
        <Route path={`${path}/myOrders`}>
          <AllOder></AllOder>
        </Route>
        <Route path={`${path}/review`}>
          <AllProductReview></AllProductReview>
        </Route>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOder></ManageAllOder>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllProduct`}>
          <MnageAllProduct></MnageAllProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
