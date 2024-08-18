import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/argentBankLogo.png'
import user from '../assets/circle-user-solid.svg'

/**
 * A functional React component that renders the application header.
 *
 * @return {JSX.Element} The JSX element representing the application header.
 */
const Header = () => {
  return (
    <header>
      <Link to="/"><img src={logo} alt="Argent Bank logo" /></Link>
      <div className="sign__in">
        <img src={user} alt="Sign In" />
        <Link to="/login"><p>Sign In</p></Link>
      </div>
    </header>
  );
};

export default Header