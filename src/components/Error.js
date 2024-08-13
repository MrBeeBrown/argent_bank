import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/circle-user-solid.svg'

const Error = () => {
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
        <div className='error'>
          <h1>Error 404</h1>
          <p>Page not found.</p>
          <p>Please check the URL in the address bar and try again.</p>
        </div>
      </main>
      <footer>
        <p>Copyright {new Date().getFullYear()} Argent Bank</p>
      </footer>
    </div>
  );
}

export default Error;