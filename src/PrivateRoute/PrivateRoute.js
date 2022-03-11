import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Firebase/Hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';

const ReivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress color="success" />;
  }
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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

export default ReivateRoute;
