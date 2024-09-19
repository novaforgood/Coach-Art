// AboutPage.tsx
import React from "react";
import { Typography, Box } from "@mui/material";
import FormInstr from "../../components/FormInstr.tsx";
import Header from "../../components/Header.tsx";

const AdminConfirmationPage: React.FC = () => {
  return (
    <>
      <Header admin=""></Header>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        height="100vh"
        width="100vw"
        marginTop="30px"
        marginLeft="30px"
      >
        <FormInstr
          header="Admin Request Submitted"
          body={
            <Typography>
              Your request to be an admin has been submitted. You will hear back
              from us shortly if approved.
            </Typography>
          }
          nav={"/"}
          buttonLabel="Return Home"
        />
      </Box>
    </>
  );
};

export default AdminConfirmationPage;
