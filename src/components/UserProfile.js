import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { savedFirstName, savedLastName } from '../features/userSlice';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


/**
 * A functional component that displays a user's profile information, 
 * including their name, bank account details, and available balance.
 *
 * @return {JSX.Element} The JSX element representing the user's profile.
 */
const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const userToken = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const submitChange = async () => {

    /* const regExCheck = /[0-9|._]+/; */

    if (firstName && lastName) {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      const data = await response.json();
      if (data.status === 200) {
        dispatch(savedFirstName(data.body.firstName));
        dispatch(savedLastName(data.body.lastName));
        setMessage(data.message)
        setError('');
      } else {
        setError(data.message);
      }
    } else {
      setError("Firstname and Lastname must not be empty !")
    }
  }

  return (
    <div>
      <Header />
      <main>
        <div className='profile_welcome_content'>
          <p className='profile_welcome'>Welcome back</p>
          <div className="profile_input">
            <input type="text" name="firstName" placeholder={useSelector(state => state.user.firstName)} onChange={(event) => setFirstName(event.target.value)} />
            <input type="text" name="lastName" placeholder={useSelector(state => state.user.lastName)} onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className="profile_button">
            <p onClick={submitChange}>Save</p>
            <Link to={"/profile"}><p>Cancel</p></Link>
          </div>
          <div className="update__message">
            <p>{message}</p>
          </div>
          <div className="update__error">
            <p>{error}</p>
          </div>
          <div className='profile_transactions'>
            <div className='profile_bank_account'>
              <p>Argent Bank Checking (x8349)</p>
              <p className='profile_balance'>$2,082.79</p>
              <p>Available Balance</p>
            </div>
            <button type="button" className="profile_view_transactions">View transactions</button>
          </div>
          <div className='profile_transactions'>
            <div className='profile_bank_account'>
              <p>Argent Bank Savings (x6712)</p>
              <p className='profile_balance'>$10,928.42</p>
              <p>Available Balance</p>
            </div>
            <button type="button" className="profile_view_transactions">View transactions</button>
          </div>
          <div className='profile_transactions'>
            <div className='profile_bank_account'>
              <p>Argent Bank Credit Card (x8349)</p>
              <p className='profile_balance'>$184.30</p>
              <p>Current Balance</p>
            </div>
            <button type="button" className="profile_view_transactions">View transactions</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default UserProfile;