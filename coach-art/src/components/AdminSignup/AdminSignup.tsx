import React, { useState } from "react";
import { Box, TextField, Button, Link } from "@mui/material";
import { write } from "../../firebase.tsx";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import TextInput from "../TextInput.tsx";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const allFieldsValid =
    firstName &&
    lastName &&
    password &&
    confirmPassword &&
    email &&
    username &&
    password === confirmPassword;

  const navigate = useNavigate();

  const linkDestination = allFieldsValid
    ? "/admin/confirmation"
    : "/admin/signup";

  const auth = getAuth();

  const handleSubmit = () => {
    if (allFieldsValid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          try {
            console.log("email is", email);
            write("admin/" + userCredential.user.uid, {
              firstName: firstName,
              lastName: lastName,
              email: email,
              username: username,
              approved: "pending",
            });
            navigate("/admin/confirmation");
            //logadmin?
          } catch (error) {
            console.error("Write to firebase failed: ", error);
          }
        })
        .catch((error) => {
          console.error("createUserWithEmailAndPassword failed:", error);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "5000px",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "3%",
        borderRadius: "0 5px 5px 5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "3vh",
          width: "500px",
          padding: "2%",
          marginBottom: "3%",
          maxWidth: "3000px",
        }}
      >
        <Typography
          fontSize="30px"
          fontWeight="600"
          lineHeight={1.5}
          align="center"
        >
          Admin Portal Sign Up
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          justifyContent: "center",
          alignItems: "center",
          align: "center",
          marginBottom: "3%",
        }}
      >
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="First Name"
          fullWidth
          onChange={handleFirstNameChange}
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Last Name"
          fullWidth
          onChange={handleLastNameChange}
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Email"
          fullWidth
          onChange={handleEmailChange}
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Username"
          fullWidth
          onChange={handleUsernameChange}
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Password"
          onChange={handlePasswordChange}
          fullWidth
          type="password" // hides password text
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
          fullWidth
          type="password" // hides password text
        />
        <Button
          variant="text"
          sx={{
            width: "30%",
            height: "10%",
            fontSize: "1.5rem",
            borderRadius: "5px",
            borderWidth: "2px",
            color: "black",
            alignSelf: "center",
            textTransform: "none",
            padding: "4%",
            marginBottom: "3%",
            marginTop: "5%",
            backgroundColor: "#5c5e60",
            borderColor: "black",
          }}
          onClick={handleSubmit}
        >
          <Link href={linkDestination} underline="none" color="inherit">
            <Typography
              fontSize="20px"
              fontWeight="200"
              lineHeight={1.5}
              align="center"
              color="white"
            >
              Sign Up
            </Typography>
          </Link>
        </Button>
        <Link
          href="/admin" //navigates to admin login
          underline="always"
          color="inherit"
        >
          <Typography
            fontSize="10px"
            fontWeight="100"
            lineHeight={1.5}
            align="center"
            color="black"
          >
            Already have an account? Login
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default AdminSignup;
