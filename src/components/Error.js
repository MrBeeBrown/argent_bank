import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * A React functional component that renders an error page with a 404 status code.
 *
 * @return {JSX.Element} A JSX element representing the 404 error page with Header and Footer.
 */
const Error = () => {
  return (
    <>
      <Header />
      <main>
        <div className='error'>
          <h1>Error 404</h1>
          <p>Page not found.</p>
          <p>Please check the URL in the address bar and try again.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Error;