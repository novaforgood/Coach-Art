import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ReimbursementForm from './pages/ReimbursementForm.tsx';
import AdminLoginPage from './pages/AdminLoginPage.tsx';
import ResetPasswordPage from './pages/ResetPasswordPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/reimbursement" Component={ReimbursementForm} />
        <Route path="/admin" Component={AdminLoginPage} />
        <Route path="/admin/resetpassword" Component={ResetPasswordPage} />
      </Routes>
    </Router>
  );
};

export default App;