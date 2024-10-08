import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deletedUser } from "../features/userSlice";
import logo from '../assets/argentBankLogo.png';
import user from '../assets/circle-user-solid.svg';
import logout from '../assets/right-from-bracket-solid.svg';

/**
 * Renders the header component of the application, displaying the logo and user authentication status.
 *
 * @return {JSX.Element} The rendered header component.
 */

const Header = () => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);
  const firstName = useSelector(state => state.user.firstName);

  return (
    <header>
      <Link to="/"><img src={logo} className="logo" alt="Argent Bank logo" /></Link>
      <div className="sign__in">
        {token &&
          <>
            <div className="user">
              <img src={user} alt="User logo" />
              <Link to="/profile" ><p> {firstName} </p></Link>
            </div>
            <div className="logout">
              <img src={logout} alt="Sign Out"></img>
              <Link to="/" ><p onClick={() => dispatch(deletedUser())}>Sign Out</p></Link>
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

export default Header;