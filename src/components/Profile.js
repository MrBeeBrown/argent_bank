import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import accountServices from '../services/account.services';

/**
 * A React component that renders the user profile page.
 *
 * @return {JSX.Element} The JSX element representing the user profile page.
 */
const Profile = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  /**
   * Retrieves and updates user data from the server.
   *
   * @return {Promise<void>} Resolves when user data has been updated.
   */
  const userData = async () => {

    const userToken = accountServices.getToken();

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    });

    const data = await response.json();

    if (data.status === 200) {
      setId(data.body.id);
      setEmail(data.body.email);
      setFirstName(data.body.firstName);
      setLastName(data.body.lastName);
      accountServices.saveId(id);
      accountServices.saveEmail(email);
      accountServices.saveFirstName(firstName);
      accountServices.saveLastName(lastName);
    }
  }

  const userId = accountServices.getId();
  if (!userId) {
    userData();
  }

  return (
    <>
      <Header {...{ firstName }} />
      <main>
        <div className='welcome_content'>
          <p className='welcome_message'>Welcome back<br />{firstName} {lastName} !</p>
          <Link to={"/user_profile"}><p className='edit_name'>Edit Name</p></Link>
          <div className='transactions'>
            <div className='bank_account'>
              <p>Argent Bank Checking (x8349)</p>
              <p className='balance'>$2,082.79</p>
              <p>Available Balance</p>
            </div>
            <button type="button" className="view_transactions">View transactions</button>
          </div>
          <div className='transactions'>
            <div className='bank_account'>
              <p>Argent Bank Savings (x6712)</p>
              <p className='balance'>$10,928.42</p>
              <p>Available Balance</p>
            </div>
            <button type="button" className="view_transactions">View transactions</button>
          </div>
          <div className='transactions'>
            <div className='bank_account'>
              <p>Argent Bank Credit Card (x8349)</p>
              <p className='balance'>$184.30</p>
              <p>Current Balance</p>
            </div>
            <button type="button" className="view_transactions">View transactions</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;