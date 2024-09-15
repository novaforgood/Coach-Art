import React, { useContext } from "react";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.tsx";

const AdminLogout = () => {
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
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default AdminLogout;
