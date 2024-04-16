import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ReimbursementForm from './pages/ReimbursementForm.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/reimbursement" Component={ReimbursementForm} />
      </Routes>
    </Router>
  );
};

export default App;