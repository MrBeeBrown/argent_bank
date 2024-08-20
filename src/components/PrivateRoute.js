import React from "react";
import { Outlet, Navigate } from "react-router-dom";

/**
 * Renders a private route component that checks if the user is authenticated by checking the 
 * "argent_bank_token" in the local storage. If the token is present, it renders the provided 
 * component with the given props. Otherwise, it redirects the user to the login page with the 
 * current location as state.
 *
 * @param {Object} props - The props object containing the component to render and additional 
 *                          props to pass to the component.
 * @param {React.ComponentType} props.component - The component to render if the user is 
 *                                               authenticated.
 * @param {Object} props.rest - Additional props to pass to the component.
 * @return {JSX.Element} The rendered component or a redirect component.
 */
const PrivateRoute = () => {
  const userToken = localStorage.getItem("argent_bank_token");
  return userToken ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;