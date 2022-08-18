import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useStore, useSelector } from 'react-redux';
import { user } from '../../app/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { signUp } from '../../features/user';

import PATTERN_NAME from '../../utils/patternName';

function SignUp() {
  const store = useStore();
  const { token } = useSelector(user);

  const navigate = useNavigate();

  useEffect(() => {
    token != null && navigate('/user');
  }, [token, navigate]);

  return (
    <main id='SignUp'>
      <section className='sign-up-content'>
        <div className='sign-up-title'>
          <FontAwesomeIcon icon={faSignIn} className='sign-up-icon' />
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={(e) => signUp(e, store, navigate)}>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required maxLength='64' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              required
              minLength='8'
              maxLength='64'
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='firstName'
              id='firstName'
              required
              pattern={PATTERN_NAME}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='lastName'
              id='lastName'
              required
              pattern={PATTERN_NAME}
            />
          </div>
          <div className='input-connect'>
            <input type='checkbox' id='connect-me' />
            <label htmlFor='connect-me'>Connect me</label>
          </div>
          <button className='sign-up-button'>Sign Up</button>
          <p className='errorText hide'>
            This user already exist, <Link to='/sign-in'>log in</Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
