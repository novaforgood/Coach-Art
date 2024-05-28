// AboutPage.tsx
import React from "react";
import { Typography } from "@mui/material";
import FormInstr from "../../components/FormInstr.tsx";
import Header from "../../components/Header.tsx";

const AdminConfirmationPage: React.FC = () => {
  return (
    <>
      <Header admin=""></Header>
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
    </>
  );
};

export default AdminConfirmationPage;
