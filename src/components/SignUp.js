import React, { useState } from 'react';
import { Link } from "react-router-dom";
import user from '../assets/circle-user-solid.svg';
import Header from './Header';
import Footer from './Footer';


/**
 * Handles the rendering and functionality of the login page, including form submission and error handling.
 *
 * @return {JSX.Element} The JSX element representing the login page.
 */
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');


  /**
   * Handles the login functionality by sending a POST request to the server with the provided email and password.
   * If the login is successful, it dispatches the saved token and navigates to the profile page.
   * If the login fails, it sets the error message.
   *
   * @param {Event} event - The event object triggered by the form submission.
   * @return {Promise<void>} A promise that resolves when the login functionality is complete.
   */
  const handleSignup = async (event) => {

    event.preventDefault();

    const response = await fetch('http://localhost:3001/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });

    const data = await response.json();
    if (data.status === 200) {
      setMessage(data.message)
      setError('');
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className='login'>
          <div className='signUp__form'>
            <img src={user} alt="Sign In" />
            <p>Sign Up</p>
            <form className='signUp' onSubmit={handleSignup}>
              <label htmlFor="firstName" className='firstName__label'>FirstName</label>
              <input type="text" id="firstName" name="firstName" autoComplete="name"
                required value={firstName} onChange={(event) => setFirstName(event.target.value)} />
              <label htmlFor="lastName" className='lastName__label'>LastName</label>
              <input type="text" id="lastName" name="lastName" autoComplete="family-name"
                required value={lastName} onChange={(event) => setLastName(event.target.value)} />
              <label htmlFor="email" className='email__label'>Email</label>
              <input type="email" id="email" name="email" autoComplete="email"
                required value={email} onChange={(event) => setEmail(event.target.value)} />
              <label htmlFor="password" className='password__label'>Password</label>
              <input type="password" id="password" name="password" autoComplete="current-password"
                required value={password} onChange={(event) => setPassword(event.target.value)} />
              <input className='login__button' type="submit" value="Sign Up" />
              <div className='signup'>
                <p>Already have an account <Link to={"/login"}>Sign In</Link></p>
              </div>
              <div className='login__error'>
                <p>{error}</p>
              </div>
              <div className='signup__message'>
                <p>{message}</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Signup;