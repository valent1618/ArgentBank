import PropTypes from 'prop-types';

function AccountContent({ title, amount, description }) {
  return (
    <div className='account-content'>
      <div>
        <h3 className='account-title'>Argent Bank {title}</h3>
        <p className='account-amount'>{amount}</p>
        <p className='account-amount-description'>{description} Balance</p>
      </div>
      <button className='transaction-button'>View transactions</button>
    </div>
  );
}

export default AccountContent;

AccountContent.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};
