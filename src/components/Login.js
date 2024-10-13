import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import user from '../assets/circle-user-solid.svg';
import Header from './Header';
import Footer from './Footer';
import { savedToken } from '../features/userSlice';




/**
 * Handles the rendering and functionality of the login page, including form submission and error handling.
 *
 * @return {JSX.Element} The JSX element representing the login page.
 */
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  /**
   * Handles the login functionality by sending a POST request to the server with the provided email and password.
   * If the login is successful, it dispatches the saved token and navigates to the profile page.
   * If the login fails, it sets the error message.
   *
   * @param {Event} event - The event object triggered by the form submission.
   * @return {Promise<void>} A promise that resolves when the login functionality is complete.
   */
  const handleLogin = async (event) => {

    event.preventDefault();

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status === 200) {
      dispatch(savedToken(data.body.token));
      setError('');
      navigate('/profile');
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className='login'>
          <div className='login__form'>
            <img src={user} alt="Sign In" />
            <p>Sign In</p>
            <form className='signIn__form' onSubmit={handleLogin}>
              <label htmlFor="email" className='email__label'>Email</label>
              <input type="email" id="email" name="email" autoComplete="email"
                required value={email} onChange={(event) => setEmail(event.target.value)} />
              <label htmlFor="password" className='password__label'>Password</label>
              <input type="password" id="password" name="password" autoComplete="current-password"
                required value={password} onChange={(event) => setPassword(event.target.value)} />
              <div className='login__remember'>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <input className='login__button' type="submit" value="Sign In" />
              <div className='signup'>
                <p>Don't have an account <Link to={"/signup"}>Sign Up</Link></p>
              </div>
              <div className='login__error'>
                <p>{error}</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;