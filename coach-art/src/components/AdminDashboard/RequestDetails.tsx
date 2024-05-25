import React from "react";
import { Box, Typography } from "@mui/material";
import RequestDocument from "./RequestDocument.tsx";
import { PDFViewer } from "@react-pdf/renderer";

const ReimbursementDetails = ({ request }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "10%",
        fontSize: "1.5rem",
        borderRadius: "50px",
        borderWidth: "2px",
        color: "black",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: '2%',
        // paddingInline: '2%',
        // paddingRight: '2%',
        marginBottom: "1%",
        marginTop: "2%",
        marginLeft: "2%",
        marginRight: "12%",
        // backgroundColor: '#5c5e60',
        borderColor: "black",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Reimbursement Details
      </Typography>
      <Typography variant="body1">INSERT PDF HERE !</Typography>
      <PDFViewer>
        <RequestDocument />
      </PDFViewer>
      {/*<RequestDocument />*/}
    </Box>
  );
};

export default ReimbursementDetails;
