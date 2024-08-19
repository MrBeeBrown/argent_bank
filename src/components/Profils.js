import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Profils = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='welcome_content'>
          <p className='welcome_message'>Welcome back<br />{localStorage.getItem('username')}</p>
          <button type="button" className='edit_name'>Edit Name</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profils;