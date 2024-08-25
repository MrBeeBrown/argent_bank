import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savedId, savedFirstName, savedLastName, savedEmail } from '../features/userSlice';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

/**
 * A React component that renders the user profile page.
 *
 * @return {JSX.Element} The JSX element representing the user profile page.
 */
const Profile = () => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const userToken = useSelector(state => state.user.token);

  /**
   * Retrieves and updates user data from the server.
   *
   * @return {Promise<void>} Resolves when user data has been updated.
   */
  const userData = async () => {


    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    });

    const data = await response.json();

    if (data.status === 200) {
      dispatch(savedId(data.body.id));
      dispatch(savedFirstName(data.body.firstName));
      dispatch(savedLastName(data.body.lastName));
      dispatch(savedEmail(data.body.email));
    } else {
      setError(data.message);
    }
  }

  const userId = useSelector(state => state.user.id);
  if (!userId) {
    userData();
  }

  return (
    <>
      <Header />
      <main>
        <div className='welcome_content'>
          <p className='welcome_message'>Welcome back<br />{useSelector(state => state.user.firstName)} {useSelector(state => state.user.lastName)} !</p>
          <Link to={"/user_profile"}><p className='edit_name'>Edit Name</p></Link>
          {error &&
            <p className='error_message'>{error}</p>
          }
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