import React from "react";
import { Box, Typography } from "@mui/material";
import FormInstr from "../components/FormInstr.tsx";
import Header from "../components/Header.tsx";
import "../styles/global.css";

const ReimbursementConfirmation: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        height="100vh"
        width="100vw"
        marginTop="30px"
        marginLeft="30px"
        gap="30px"
      >
        <FormInstr
          header="Thank you for submitting your reimbursement!"
          body={
            <Typography>
              Your receipts will be reviewed by a CoachArt staff and if
              approved, you will receive a reimbursement shortly.
            </Typography>
          }
          nav="/"
        />
      </Box>
    </>
  );
};

export default ReimbursementConfirmation;
