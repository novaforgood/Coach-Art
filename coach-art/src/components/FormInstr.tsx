import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function FormInstr({ header, body }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      width="100%"
    >
      <Box style={{ flex: "0 0 70%" }}>
        <Typography
          style={{
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          {header}
        </Typography>
        <Typography variant="body1">{body}</Typography>
        <Button style={{ backgroundColor: "#b3b3b3" }} variant="contained">
          Begin
        </Button>
      </Box>
      <Box style={{ flex: "0 0 30%" }}>
        {/* This is just a placeholder picture, eventually pass it in as a prop */}
        <img
          src="coachart_about_map.png"
          alt="Placeholder"
          style={{ width: "300px", height: "auto" }} // Adjust the width as needed
        />
      </Box>
    </Box>
  );
}
