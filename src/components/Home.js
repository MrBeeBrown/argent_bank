import React from 'react'
import Header from './Header'
import Footer from './Footer'
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'

/**
 * A functional component representing the Home page of the Argent Bank application.
 * 
 * @return {JSX.Element} The JSX element representing the Home page with Header and Footer.
 */
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="cover">
          <div className='cover__content'>
            <p className='bold__text__cover'>No fees.</p>
            <p className='bold__text__cover'>No minimum deposit.</p>
            <p className='bold__text__cover'>High interest rates.</p>
            <p className='normal__text__cover'>Open a savings account with Argent Bank today !</p>
          </div>
        </div>
        <div className='content'>
          <div>
            <div className='content__img'>
              <img src={chat} alt="Chat" />
            </div>
            <h2>You are our #1 priority</h2>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
          </div>
          <div>
            <div className='content__img'>
              <img src={money} alt="Money" />
            </div>
            <h2>More savings means higher rates</h2>
            <p>The more you save with us, the higher your interest rate will be!</p>
          </div>
          <div>
            <div className='content__img'>
              <img src={security} alt="Security" />
            </div>
            <h2>Security you can trust</h2>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;