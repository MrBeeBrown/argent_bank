import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/circle-user-solid.svg'

/**
 * A functional component that renders the login page of the Argent Bank application.
 *
 * @return {JSX.Element} The JSX element representing the login page.
 */
const Login = () => {
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
        <div className='login'>
          <div className='login__form'>
            <img src={user} alt="Sign In" />
            <p>Sign In</p>
            <form>
              <label htmlFor="username" className='login__label'>Username</label>
              <input type="text" id="username" name="username" autoComplete="username"
                required />
              <label htmlFor="password" className='password__label'>Password</label>
              <input type="password" id="password" name="password" autoComplete="current-password"
                required />
              <div className='login__remember'>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <input className='login__button' type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright {new Date().getFullYear()} Argent Bank</p>
      </footer>
    </div>
  );
}

export default Login;