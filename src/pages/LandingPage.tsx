import React from "react";
import { Box, Typography } from "@mui/material";
import FormInstr from "../components/FormInstr.tsx";
import Header from "../components/Header.tsx";
import "../styles/global.css";

const LandingPage: React.FC = () => {
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
        gap="30px"
      >
        <FormInstr
          header="Reimbursement Request Form"
          body={
            <Typography>
              Please submit this form if you have purchased an item on your
              behalf and need a reimbursement from CoachArt.
              <ol>
                <li>
                  Collect all receipts to be submitted (Accepted Formats:
                  Screenshots, JPG, PDF, DOC, PNG).
                </li>
                <li>Read each question and provide complete answers.</li>
                <li>
                  Check your calculations, and ensure you are within budget for
                  your request.
                </li>
                <li>
                  Make sure to click SUBMIT on the final screen to complete the
                  form.
                </li>
              </ol>
            </Typography>
          }
          nav="/reimbursement"
          buttonLabel="Begin"
        />
      </Box>
    </>
  );
};

export default LandingPage;
