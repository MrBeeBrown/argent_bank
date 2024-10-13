import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import Signup from './components/SignUp';
import Error from './components/Error';

/**
 * A React functional component that serves as the main application entry point.
 * It configures client-side routing using React Router and renders the corresponding components based on the URL path.
 *
 * @return {JSX.Element} A JSX element representing the application with routing configuration.
 */
function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/user_profile" element={<UserProfile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
