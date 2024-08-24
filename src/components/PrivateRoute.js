import React from "react";
import { useStore } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

/**
 * Renders a private route component that checks if the user is authenticated by checking the 
 * "argent_bank_token" in the local storage. If the token is present, it renders the provided 
 * component with the given props. Otherwise, it redirects the user to the login page with the 
 * current location as state.
 *
 * @return {JSX.Element} The rendered component or a redirect component.
 */

const PrivateRoute = () => {
  const store = useStore();
  return store.getState().user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;