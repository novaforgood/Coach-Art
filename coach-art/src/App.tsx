import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReimbursementForm from "./pages/ReimbursementForm.tsx";
import AdminLoginPage from "./pages/Admin/AdminLoginPage.tsx";
import AdminSignupPage from "./pages/Admin/AdminSignupPage.tsx";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";
import ReimbursementReview from "./pages/ReimbursementReviewPage.tsx";
import SupplyReview from "./pages/SupplyReviewPage.tsx";
import ReimbursementConfirmation from "./pages/ReimbursementConfirmation.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import AdminConfirmationPage from "./pages/Admin/AdminConfirmationPage.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdminLogout from "./components/AdminLogin/AdminLogout.tsx";
import AuthProvider, {
  AuthIsSignedIn,
} from "./components/AdminLogin/AuthContext.tsx";

const queryClient = new QueryClient();

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
    //<PDFViewer>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            {/**protected pages */}
            <AuthIsSignedIn>
              <Routes>
                <Route path="/logout" element={<AdminLogout />} />
                <Route path="/admin/home" element={<AdminDashboardPage />} />
              </Routes>
            </AuthIsSignedIn>
            {/**unprotected pages */}
            <Routes>
              <Route path="/reimbursement" Component={ReimbursementForm} />
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/admin/signup" Component={AdminSignupPage} />
              <Route
                path="/admin/resetpassword"
                Component={ResetPasswordPage}
              />
              <Route
                path="/admin/confirmation"
                Component={AdminConfirmationPage}
              />
              <Route path="/review" Component={ReimbursementReview} />
              <Route path="/supply-review" Component={SupplyReview} />
              <Route
                path="/reimbursement-confirmation"
                Component={ReimbursementConfirmation}
              />
              <Route path="/" Component={LandingPage} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
    //</PDFViewer>
  );
};

export default App;
