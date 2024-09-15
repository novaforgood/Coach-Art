import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import AdminLogin from "../../components/AdminLogin/AdminLogin.tsx";
import Header from "../../components/Header.tsx";

const AdminLoginPage: React.FC = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [data, setData] = useState([username, password]);

  // const handleDataChange = (newData) => {

  // }

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
        <AdminLogin
        // data={data}
        // onDataChange={(newData) => handleDataChange(newData)}
        />
      </Box>
    </>
  );
};

export default AdminLoginPage;
