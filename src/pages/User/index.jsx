import { useState } from 'react';

import AccountContent from '../../components/AccountContent';

function User() {
  let [edit, setEdit] = useState(false);

  return (
    <main id='User'>
      {edit ? (
        <div className='header'>
          <h1>Welcome back</h1>
          <div className='edit-input'>
            <input type='text' id='fisrt-name' placeholder='Tony' />
            <input type='text' id='last-name' placeholder='Jarvis' />
          </div>
          <div className='button-container'>
            <button onClick={() => setEdit(!edit)}>Save</button>
            <button onClick={() => setEdit(!edit)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis !
          </h1>
          <div className='button-container'>
            <button onClick={() => setEdit(!edit)}>Edit Name</button>
          </div>
        </div>
      )}

      <h2 className='sr-only'>Accounts</h2>
      <section className='content-container'>
        <AccountContent
          title='Checking (x8349)'
          amount='$2,082.79'
          description='Available'
        />
        <AccountContent
          title='Savings (x6712)'
          amount='$10,928.42'
          description='Available'
        />
        <AccountContent
          title='Credit Card (x8349)'
          amount='$184.30'
          description='Current'
        />
      </section>
    </main>
  );
}

export default User;
