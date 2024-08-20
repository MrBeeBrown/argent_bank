import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import accountServices from "../services/account.services";

/**
 * A functional component representing a user's profile page.
 * 
 * This component displays the user's name, bank account information, 
 * and provides options to view transactions and edit the user's name.
 * 
 * @return {JSX.Element} The JSX element representing the user's profile page.
 */
const UserProfile = () => {

  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); */

  return (
    <div>
      <Header />
      <main>
        <div className='profile_welcome_content'>
          <p className='profile_welcome'>Welcome back</p>
          <div className="profile_input">
            <input type="text" name="firstName" placeholder={accountServices.getFirstName()} />
            <input type="text" name="lastName" placeholder={accountServices.getLastName()} />
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