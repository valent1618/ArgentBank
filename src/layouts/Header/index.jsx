import { NavLink, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { user } from '../../app/selectors';
import { logout } from '../../features/user';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSignOut,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/argentBankLogo.png';

function Header() {
  const { token, firstName } = useSelector(user);
  const dispatch = useDispatch();

  return (
    <nav className='header-nav'>
      <Link className='main-nav-logo' to='/'>
        <img src={logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {token != null ? (
        <div className='main-nav'>
          <NavLink to='/user' id='userLink'>
            <FontAwesomeIcon icon={faUserCircle} />
            {firstName}
          </NavLink>
          <Link to='/' onClick={() => dispatch(logout())}>
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </Link>
        </div>
      ) : (
        <div className='main-nav'>
          <NavLink to='./sign-up'>
            <FontAwesomeIcon icon={faSignIn} />
            Sign Up
          </NavLink>
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
