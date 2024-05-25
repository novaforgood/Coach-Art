import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import AdminPortal from "../../components/AdminLogin/AdminPortal.tsx";
import Header from "../../components/Header.tsx";

const AdminLoginPage: React.FC = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [data, setData] = useState([username, password]);

  // const handleDataChange = (newData) => {

  // }

  return (
    <>
      <Header></Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "55vh",
          marginBottom: "3%",
          borderRadius: "0 5px 5px 5px",
        }}
      >
        <AdminPortal
        // data={data}
        // onDataChange={(newData) => handleDataChange(newData)}
        />
      </Box>
    </>
  );
};

export default AdminLoginPage;
