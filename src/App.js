import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Components/UserLogin/Register";
import Login from "./Components/UserLogin/Login";
import AuthProvider from "./Firebase/Context/AuthProvider";
import HomeBanner from "./Components/Banner/HomeBanner";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Home from "./Components/Page/Home/Home";
 
import ProductCalection from "./Components/Page/ProductCalection";
import Spping from "./Components/Page/Spping/Spping";
 
import ManageAllOder from "./Components/Page/ManageAllOder/ManageAllOder"; 
import Dashboard from "./Components/Page/Dashbord/Dashboard";
import Review from "./Components/Review/Review";
import AllProduct from "./Components/Page/AllProduct/AllProduct";
import NotFount from "./Components/NotFount/NotFount";
import AboutUs from "./Components/Page/About/AboutUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/products">
              <AllProduct></AllProduct>
            </Route>
            <Route path="/aLLProduct">
              <ProductCalection></ProductCalection>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/allProduct">
              <HomeBanner></HomeBanner>
            </PrivateRoute>
            <PrivateRoute path="/product/:productId">
              <Spping></Spping>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOder></ManageAllOder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/review">
            <Review></Review>
            </PrivateRoute>
            <Route path="*">
              <NotFount></NotFount>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
