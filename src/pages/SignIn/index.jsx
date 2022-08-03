import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  return (
    <main id='SignIn'>
      <section className='sign-in-content'>
        <div className='sign-in-title'>
          <FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' />
          <h1>Sign In</h1>
        </div>
        <form>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button className='sign-in-button'>Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
