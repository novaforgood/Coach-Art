import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ReimbursementForm from './pages/ReimbursementForm.tsx';
import AdminLoginPage from './pages/Admin/AdminLoginPage.tsx';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage.tsx'
import ResetPasswordPage from './pages/ResetPasswordPage.tsx';
import ReimbursementReview from "./pages/ReimbursementReviewPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/reimbursement" Component={ReimbursementForm} />
        <Route path="/admin" Component={AdminLoginPage} />
        <Route path="/admin/home" Component={AdminDashboardPage} />
        <Route path="/admin/resetpassword" Component={ResetPasswordPage} />
        <Route path="/review" Component={ReimbursementReview} />
      </Routes>
    </Router>
  );
};

export default App;
