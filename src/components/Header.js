import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/argentBankLogo.png';
import user from '../assets/circle-user-solid.svg';
import logout from '../assets/right-from-bracket-solid.svg';
import accountServices from "../services/account.services";
import PropTypes from "prop-types";

/**
 * Renders the header component of the application, displaying the logo and user authentication status.
 *
 * @param {string} firstName - The first name of the user, used as a fallback if the user's name is not available.
 * @return {JSX.Element} The rendered header component.
 */
const Header = ({ firstName }) => {

  const token = accountServices.getToken();

  return (
    <header>
      <Link to="/"><img src={logo} className="logo" alt="Argent Bank logo" /></Link>
      <div className="sign__in">
        {token &&
          <>
            <div className="user">
              <img src={user} alt="User logo" />
              <Link to="/profile"><p> {accountServices.getFirstName() ? accountServices.getFirstName() : firstName} </p></Link>
            </div>
            <div className="logout">
              <img src={logout} alt="Sign Out"></img>
              <Link to="/" reloadDocument><p onClick={() => accountServices.clearStorage()}>Sign Out</p></Link>
            </div>
          </>
        }
        {!token &&
          <>
            <div className="login">
              <img src={user} alt="Sign In" />
              <Link to="/login"><p>Sign In</p></Link>
            </div>
          </>
        }
      </div>
    </header>
  );
};

Header.prototypes = {
  firstName: PropTypes.string
}

export default Header;