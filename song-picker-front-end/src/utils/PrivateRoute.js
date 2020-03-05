import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log("pr comp", Component);
  // console.log("pr rest", rest);
  return (
    // <Route>
    //   {localStorage.getItem("token") ? <Component {...rest} /> : <Redirect to="/" />}
    // </Route>

    <Route
      {...rest}
      render={props => {
        // console.log('render props', props)
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
