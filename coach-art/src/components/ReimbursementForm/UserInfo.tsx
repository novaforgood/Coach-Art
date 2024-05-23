import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const UserInfo = ({ data, onDataChange }) => {
  const [name, setName] = useState(data.name || "");
  const [email, setEmail] = useState(data.email || "");
  const [streetAddress, setStreetAddress] = useState(data.streetAddress || "");
  const [aptSuite, setAptSuite] = useState(data.aptSuite || "");
  const [city, setCity] = useState(data.city || "");
  const [state, setState] = useState(data.state || "");

  const handleNameChange = (event) => {
    setName(event.target.value);
    onDataChange({ ...data, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    onDataChange({ ...data, email: event.target.value });
  };

  const handleStreetAddressChange = (event) => {
    setStreetAddress(event.target.value);
    onDataChange({ ...data, streetAddress: event.target.value });
  };

  const handleAptSuiteChange = (event) => {
    setAptSuite(event.target.value);
    onDataChange({ ...data, aptSuite: event.target.value });
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    onDataChange({ ...data, city: event.target.value });
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    onDataChange({ ...data, state: event.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "auto",
        backgroundColor: "#f0f0f0",
        padding: "2%",
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "3%",
        borderRadius: "0 5px 5px 5px",
        gap: "2%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "1%",
          gap: "1%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Name:</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="Name"
            sx={{ flex: 2 }}
            onChange={handleNameChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Email:</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="Email"
            sx={{ flex: 2 }}
            onChange={handleEmailChange}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "1%",
          gap: "1%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Street Address:</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="330 De Neve Dr"
            sx={{ flex: 2 }}
            onChange={handleStreetAddressChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Apt/Suite (optional):</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="Apt, suite, etc"
            sx={{ flex: 2 }}
            onChange={handleAptSuiteChange}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "1%",
          gap: "1%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>City:</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="City"
            sx={{ flex: 2 }}
            onChange={handleCityChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>State:</Typography>
          <TextField
            hiddenLabel
            variant="filled"
            margin="normal"
            size="small"
            placeholder="State"
            sx={{ flex: 2 }}
            onChange={handleStateChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
