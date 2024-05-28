import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import AdminPortal from "../components/AdminLogin/AdminPortal.tsx";
import Header from "../components/Header.tsx";

const AdminLoginPage: React.FC = () => {
  return (
    <>
      <Header admin=""></Header>
      <Box>
        <AdminPortal />
      </Box>
    </>
  );
};

export default AdminLoginPage;
