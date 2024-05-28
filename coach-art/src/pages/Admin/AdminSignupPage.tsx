import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AdminSignup from "../../components/AdminSignup/AdminSignup.tsx";
import Header from "../../components/Header.tsx";

const AdminSignupPage: React.FC = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [data, setData] = useState([username, password]);

  // const handleDataChange = (newData) => {

  // }
  const navigate = useNavigate();

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
        <AdminSignup
        // data={data}
        // onDataChange={(newData) => handleDataChange(newData)}
        />
      </Box>
    </>
  );
};

export default AdminSignupPage;
