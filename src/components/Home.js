import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/circle-user-solid.svg'
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'

const Home = () => {
  return (
    <div>
      <header>
        <Link to="/"><img src={logo} alt="Argent Bank logo" /></Link>
        <div className="sign__in">
          <img src={user} alt="Sign In" />
          <Link to="/login"><p>Sign In</p></Link>
        </div>
      </header>
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
      <footer>
        <p>Copyright {new Date().getFullYear()} Argent Bank</p>
      </footer>
    </div>
  );
}

export default Home;