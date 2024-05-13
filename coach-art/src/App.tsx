import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ReimbursementReview from "./pages/ReimbursementReviewPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/review" Component={ReimbursementReview} />
        <Route path="/landing-page" Component={LandingPage} />
      </Routes>
    </Router>
  );
};

export default App;
