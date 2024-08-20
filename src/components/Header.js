import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/argentBankLogo.png';
import user from '../assets/circle-user-solid.svg';
import logout from '../assets/right-from-bracket-solid.svg';
import accountServices from "../services/account.services";


/**
 * Renders the header component of the application, displaying the logo and user authentication status.
 *
 * @param {string} firstName - The first name of the user, used as a fallback if the user's name is not available.
 * @return {JSX.Element} The rendered header component.
 */
const Header = ({ firstName }) => {
  const userToken = accountServices.getToken();
  const userName = accountServices.getFirstName();

  return (
    <header>
      <Link to="/"><img src={logo} className="logo" alt="Argent Bank logo" /></Link>
      <div className="sign__in">
        {userToken &&
          <>
            <div className="user">
              <img src={user} alt="User logo" />
              <Link to="/profile"><p>{userName ? userName : firstName}</p></Link>
            </div>
            <div className="logout">
              <img src={logout} alt="Sign Out"></img>
              <Link to="/" reloadDocument><p onClick={() => accountServices.clearStorage()}>Sign Out</p></Link>
            </div>
          </>
        }
        {!userToken &&
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

export default Header;