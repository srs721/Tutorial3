import React from 'react';
import RegistrationForm from './RegistrationForm';
import UserProfilePage from './UserProfilePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
