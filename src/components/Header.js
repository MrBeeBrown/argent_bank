import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from 'react-redux';
import { deletedUser } from "../features/userSlice";
import logo from '../assets/argentBankLogo.png';
import user from '../assets/circle-user-solid.svg';
import logout from '../assets/right-from-bracket-solid.svg';
import PropTypes from "prop-types";

/**
 * Renders the header component of the application, displaying the logo and user authentication status.
 *
 * @param {string} firstName - The first name of the user, used as a fallback if the user's name is not available.
 * @return {JSX.Element} The rendered header component.
 */
const Header = () => {

  const store = useStore();
  const dispatch = useDispatch();

  const token = store.getState().user.token;

  return (
    <header>
      <Link to="/"><img src={logo} className="logo" alt="Argent Bank logo" /></Link>
      <div className="sign__in">
        {token &&
          <>
            <div className="user">
              <img src={user} alt="User logo" />
              <Link to="/profile"><p> {store.getState().user.firstName} </p></Link>
            </div>
            <div className="logout">
              <img src={logout} alt="Sign Out"></img>
              <Link to="/" reloadDocument><p onClick={() => dispatch(deletedUser())}>Sign Out</p></Link>
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