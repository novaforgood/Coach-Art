import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReimbursementForm from "./pages/ReimbursementForm.tsx";
import AdminLoginPage from "./pages/Admin/AdminLoginPage.tsx";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";
import ReimbursementReview from "./pages/ReimbursementReviewPage.tsx";
import SupplyReview from "./pages/SupplyReviewPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const colors = {
  navyBlue: "#101C52",
  grey: "#606060",
  tangerine: "#EA781E",
};

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    text: {
      primary: colors.navyBlue,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/reimbursement" Component={ReimbursementForm} />
          <Route path="/admin" Component={AdminLoginPage} />
          <Route path="/admin/home" Component={AdminDashboardPage} />
          <Route path="/admin/resetpassword" Component={ResetPasswordPage} />
          <Route path="/review" Component={ReimbursementReview} />
          <Route path="/supply-review" Component={SupplyReview} />
          <Route path="/" Component={LandingPage} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
