import React, { useContext } from "react";
import { getAuth } from "firebase/auth";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.tsx";

const AdminLogout: React.FC = () => {
  const auth = getAuth();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        authContext.signOut();
        navigate("/admin");
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error("sign out error", error);
      });
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Button
        onClick={handleLogout}
        variant="text"
        sx={{
          width: "80%",
          fontSize: "1.5rem",
          borderRadius: "50px",
          borderWidth: "2px",
          color: "black",
          alignSelf: "center",
          padding: "4%",
          marginBottom: "2%",
          marginTop: "2%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          textTransform: "uppercase",
        }}
      >
        <Typography
          fontSize="15px"
          fontWeight="500"
          lineHeight={0.5}
          align="center"
          color="black"
        >
          Logout
        </Typography>
      </Button>
    </Box>
  );
};

export default AdminLogout;
