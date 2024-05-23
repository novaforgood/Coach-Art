import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UserInfo = ({}) => {
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
            // onChange later
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
            // onChange later
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
            // onChange later
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
            // onChange later
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
            // onChange later
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
            // onChange later
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
