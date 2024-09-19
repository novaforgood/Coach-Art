import React from "react";
import { Box } from "@mui/material";
import AdminLogin from "../../components/AdminLogin/AdminLogin.tsx";
import Header from "../../components/Header.tsx";

const AdminLoginPage: React.FC = () => {
  return (
    <>
      <Header admin=""></Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "55vh",
          marginBottom: "3%",
          borderRadius: "0 5px 5px 5px",
        }}
      >
        <AdminLogin />
      </Box>
    </>
  );
};

export default AdminLoginPage;
