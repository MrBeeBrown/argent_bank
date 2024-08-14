import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';
import user from '../assets/circle-user-solid.svg';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerComponent = () => {
  return (
    <div>
      <header>
        <Link to="/"><img src={logo} alt="Argent Bank logo" /></Link>
        <div className="sign__in">
          <img src={user} alt="Sign In" />
          <Link to="/login"><p>Sign In</p></Link>
        </div>
      </header>
      <div className='swagger-ui'>
        <SwaggerUI url="../swagger/swagger.yaml" />
      </div>
      <footer>
        <p>Copyright {new Date().getFullYear()} Argent Bank</p>
      </footer>
    </div>
  );
};

export default SwaggerComponent;