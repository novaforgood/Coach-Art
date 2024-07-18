import React from "react";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/admin"); //ERROR: saying no routes to /admin even tho there is bruh fix this
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error("sign out error", error);
      });
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default AdminLogout;
