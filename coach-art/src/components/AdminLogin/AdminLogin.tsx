import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { read } from "../../firebase.tsx";
import { AuthContext } from "./AuthContext.tsx";

const AdminLogin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const adminObj = await read("admin/" + userCredential.user.uid);

      if (adminObj.approved === "approved") {
        signIn();
        navigate("/admin/home");
      } else if (adminObj.approved === "pending") {
        setError("Your admin account is pending approval.");
      } else if (adminObj.approved === "rejected") {
        setError("Your request for admin access has been rejected.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
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
          Admin Portal Log In
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
          placeholder="Email"
          fullWidth
          onChange={handleEmailChange}
        />
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Password"
          onChange={handlePasswordChange}
          fullWidth
          type="password"
        />
        <Link href="/admin/resetpassword" underline="always" color="inherit">
          <Typography
            fontSize="10px"
            fontWeight="100"
            lineHeight={1.5}
            align="center"
            color="black"
          >
            Forgot Password?
          </Typography>
        </Link>
        {error && (
          <Typography color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="text"
          sx={{
            width: "30%",
            height: "20%",
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
          disabled={loading}
        >
          <Typography
            fontSize="20px"
            fontWeight="200"
            lineHeight={1.5}
            align="center"
            color="white"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;

// import React, { useState, useContext } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { Box, TextField, Button, Link } from "@mui/material";
// import TextInput from "../TextInput.tsx";
// import Typography from "@mui/material/Typography";
// import { read } from "../../firebase.tsx";
// import { AuthContext } from "./AuthContext.tsx";

// const AdminLogin = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const authContext = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         read("admin/" + userCredential.user.uid).then((adminObj) => {
//           if (adminObj.approved === "approved") {
//             //logAdmin(userCredential.user.uid)
//             console.log("auth status b4 signin:", authContext);
//             authContext.signIn();
//             console.log("auth status after:", authContext);
//             navigate("/admin/home");
//           } else if (adminObj.approved === "pending") {
//             alert("Your admin account is pending approval.");
//           } else if (adminObj.approved === "rejected") {
//             alert("Your request for admin access has been rejected.");
//           }
//         });
//       })
//       .catch((error) => {
//         authContext.signOut();
//         navigate("/admin");
//         console.error("error signInWithEmailAndPassword", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         maxWidth: "5000px",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "2%",
//         marginLeft: "3%",
//         marginRight: "3%",
//         marginBottom: "3%",
//         borderRadius: "0 5px 5px 5px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           height: "3vh",
//           width: "500px",
//           padding: "2%",
//           marginBottom: "3%",
//           maxWidth: "3000px",
//         }}
//       >
//         <Typography
//           fontSize="30px"
//           fontWeight="600"
//           lineHeight={1.5}
//           align="center"
//         >
//           Admin Portal Log In
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           width: "500px",
//           justifyContent: "center",
//           alignItems: "center",
//           align: "center",
//           marginBottom: "3%",
//         }}
//       >
//         <TextField
//           hiddenLabel
//           variant="filled"
//           margin="normal"
//           size="small"
//           placeholder="Email"
//           fullWidth
//           onChange={handleEmailChange}
//         />
//         <TextField
//           hiddenLabel
//           variant="filled"
//           margin="normal"
//           size="small"
//           placeholder="Password"
//           onChange={handlePasswordChange}
//           fullWidth
//           type="password" // hides password text
//         />
//         <Link
//           href="/admin/resetpassword" // TODO: rename/update
//           underline="always"
//           color="inherit"
//         >
//           <Typography
//             fontSize="10px"
//             fontWeight="100"
//             lineHeight={1.5}
//             align="center"
//             color="black"
//           >
//             Forgot Password?
//           </Typography>
//         </Link>
//         <Button
//           variant="text"
//           sx={{
//             width: "30%",
//             height: "20%",
//             fontSize: "1.5rem",
//             borderRadius: "5px",
//             borderWidth: "2px",
//             color: "black",
//             alignSelf: "center",
//             textTransform: "none",
//             padding: "4%",
//             marginBottom: "3%",
//             marginTop: "5%",
//             backgroundColor: "#5c5e60",
//             borderColor: "black",
//           }}
//           onClick={handleSubmit}
//         >
//           <Link
//             href="/admin/home" // TODO: rename/update
//             underline="none"
//             color="inherit"
//           >
//             <Typography
//               fontSize="20px"
//               fontWeight="200"
//               lineHeight={1.5}
//               align="center"
//               color="white"
//             >
//               Sign In
//             </Typography>
//           </Link>
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AdminLogin;
