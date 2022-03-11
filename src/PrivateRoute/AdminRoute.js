import React from "react";
import { Redirect, Route } from "react-router";
 import CircularProgress from "@mui/material/CircularProgress";
import useAuth from "../Firebase/Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin} = useAuth();
  if (isLoading) {
    return <CircularProgress color="success" />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
