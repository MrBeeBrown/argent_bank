import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Error = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='error'>
          <h1>Error 404</h1>
          <p>Page not found.</p>
          <p>Please check the URL in the address bar and try again.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Error;