import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/argentBankLogo.png';

function Header() {
  let userConnected = false;

  return (
    <nav className='header-nav'>
      <Link className='main-nav-logo' to='/'>
        <img src={logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {userConnected ? (
        <div className='main-nav'>
          <NavLink to='/user'>
            <FontAwesomeIcon icon={faUserCircle} />
            Tony
          </NavLink>
          <Link to='/'>
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </Link>
        </div>
      ) : (
        <div className='main-nav'>
          <NavLink to='./sign-in'>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;
