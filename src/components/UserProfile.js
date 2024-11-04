import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAPI } from "../features/userSlice";
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

  const dispatch = useDispatch();
  const { firstName, lastName, status, error } = useSelector((state) => state.user);

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const updateUser = () => {
    dispatch(updateUserAPI({ firstName: newFirstName, lastName: newLastName }));
  };

  return (
    <div>
      <Header />
      <main>
        <div className='profile_welcome_content'>
          <p className='profile_welcome'>Welcome back</p>
          <div className="profile_input">
            <input type="text" name="firstName" placeholder={firstName} onChange={(e) => setNewFirstName(e.target.value)} />
            <input type="text" name="lastName" placeholder={lastName} onChange={(e) => setNewLastName(e.target.value)} />
          </div>
          <div className="profile_button">
            <p onClick={updateUser}>Save</p>
            <Link to={"/profile"}><p>Cancel</p></Link>
            {status === "loading" && <p>Updating...</p>}
            {status === "failed" && <p>Error: {error}</p>}
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