import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import accountServices from "../services/account.services";


/**
 * A functional component that displays a user's profile information, 
 * including their name, bank account details, and available balance.
 *
 * @return {JSX.Element} The JSX element representing the user's profile.
 */
const UserProfile = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setFirstName(accountServices.getFirstName());
    setLastName(accountServices.getLastName());
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className='profile_welcome_content'>
          <p className='profile_welcome'>Welcome back</p>
          <div className="profile_input">
            <input type="text" name="firstName" placeholder={firstName} />
            <input type="text" name="lastName" placeholder={lastName} />
          </div>
          <div className="profile_button">
            <p>Save</p>
            <Link to={"/profile"}><p>Cancel</p></Link>
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