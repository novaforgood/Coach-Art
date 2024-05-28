import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormInstr({ header, body, nav, buttonLabel }) {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      width="100%"
    >
      <Box style={{ flex: "0 0 70%", gap: "2%" }}>
        <Typography
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "3%",
          }}
        >
          {header}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2%" }}>
          {body}
        </Typography>
        <Button
          style={{ backgroundColor: "#b3b3b3" }}
          variant="contained"
          onClick={() => {
            navigate(nav);
          }}
        >
          {buttonLabel}
        </Button>
      </Box>
      <Box style={{ flex: "0 0 30%" }}>
        {/* This is just a placeholder picture, eventually pass it in as a prop */}
        <img
          src="coachart_about_map.png"
          alt="Placeholder"
          style={{ width: "300px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
