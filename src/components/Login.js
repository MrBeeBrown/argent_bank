import React, { useState } from 'react';
import user from '../assets/circle-user-solid.svg';
import Header from './Header';
import Footer from './Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/profils';
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className='login'>
          <div className='login__form'>
            <img src={user} alt="Sign In" />
            <p>Sign In</p>
            <form onSubmit={handleLogin}>
              <label htmlFor="username" className='login__label'>Username</label>
              <input type="email" id="username" name="username" autoComplete="username"
                required value={email} onChange={(event) => setEmail(event.target.value)} />
              <label htmlFor="password" className='password__label'>Password</label>
              <input type="password" id="password" name="password" autoComplete="current-password"
                required value={password} onChange={(event) => setPassword(event.target.value)} />
              <div className='login__remember'>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <input className='login__button' type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;