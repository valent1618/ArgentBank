import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useStore, useSelector } from 'react-redux';
import { user } from '../../app/selectors';
import { getUser, updateUser } from '../../features/user';

import bankAccounts from '../../data/bankAccounts';
import formatAmount from '../../utils/formatAmount';
import PATTERN from '../../utils/patternName';

import Loader from '../../components/Loader';
import AccountContent from '../../components/AccountContent';

function User() {
  const store = useStore();
  const { token, firstName, lastName } = useSelector(user);

  let [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    token != null ? getUser(store, token) : navigate('/');
  }, [store, token, navigate]);

  return (
    <main id='User'>
      {firstName === null ? (
        <Loader />
      ) : edit ? (
        <div className='header'>
          <h1>Welcome back</h1>
          <div className='edit-input'>
            <input
              type='text'
              id='first-name'
              placeholder={firstName}
              pattern={PATTERN}
              required
            />
            <input
              type='text'
              id='last-name'
              placeholder={lastName}
              pattern={PATTERN}
              required
            />
          </div>
          <p className='errorText hide'>Enter valid names</p>
          <div className='button-container'>
            <button
              onClick={() => updateUser(store, token, setEdit)}
              id='saveButton'
            >
              Save
            </button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName} !`}
          </h1>
          <div className='button-container'>
            <button onClick={() => setEdit(true)}>Edit Name</button>
          </div>
        </div>
      )}

      <h2 className='sr-only'>Accounts</h2>
      <section className='content-container'>
        {bankAccounts.map((account) => (
          <AccountContent
            title={account.title}
            amount={formatAmount(account.amount)}
            description={account.description}
            key={`Bank-Account-${account.title}`}
          />
        ))}
      </section>
    </main>
  );
}

export default User;
