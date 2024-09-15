import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import RequestDocument from "./RequestDocument.tsx";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

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
      <Typography variant="h4" gutterBottom>
        Reimbursement Details
      </Typography>
      <PDFViewer width="500" height="325">
        <RequestDocument request={request} />
      </PDFViewer>
      <PDFDownloadLink
        document={<RequestDocument request={request} />}
        fileName={
          request.userData.date + "_" + request.userData.name + "_invoice.pdf"
        } //"invoice.pdf"
      >
        <Box
          sx={{
            margin: "10px",
            color: "#333",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#555",
            },
          }}
        >
          <Button
            sx={{
              width: "80%",
              // height: '10%',
              fontSize: "1.5rem",
              borderRadius: "50px",
              borderWidth: "2px",
              color: "black",
              alignSelf: "center",
              padding: "4%",
              marginBottom: "2%",
              marginTop: "2%",
            }}
          >
            <GetAppIcon />
            Download
          </Button>
        </Box>
      </PDFDownloadLink>
      {/*<RequestDocument />*/}
    </Box>
  );
};

export default ReimbursementDetails;
