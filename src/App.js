import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profils from './components/Profils';
import Error from './components/Error';

/**
 * A React functional component that serves as the main application entry point.
 * It configures client-side routing using React Router and renders the corresponding components based on the URL path.
 *
 * @return {JSX.Element} A JSX element representing the application with routing configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profils" element={<Profils />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
