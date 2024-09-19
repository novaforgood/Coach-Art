import React from "react";
import { Box } from "@mui/material";
import AdminSignup from "../../components/AdminSignup/AdminSignup.tsx";
import Header from "../../components/Header.tsx";

const AdminSignupPage: React.FC = () => {
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
        <AdminSignup />
      </Box>
    </>
  );
};

export default AdminSignupPage;
