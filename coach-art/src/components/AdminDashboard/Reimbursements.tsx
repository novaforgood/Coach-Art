import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { Request } from "../../constants.tsx";
import RequestDetails from "./RequestDetails.tsx";

const ReimbursementItem = ({ reimbursement, index }) => {
  return (
    //<Button variant="text" sx={{ width: "100%" }} onClick={handleClick}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        //height: "10%",
        padding: "10px",
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
      {/**TODO: this is just for show -- change later to reflect actual */}
      {index % 2 != 0 ? (
        <CheckBoxIcon sx={{ marginRight: "2%" }} fontSize="small" />
      ) : (
        <CheckBoxOutlineBlankIcon sx={{ marginRight: "2%" }} fontSize="small" />
      )}
      {index % 2 == 0 ? (
        <BookmarkBorderOutlinedIcon
          sx={{ marginRight: "2%" }}
          fontSize="small"
        />
      ) : (
        <BookmarkOutlinedIcon sx={{ marginRight: "2%" }} fontSize="small" />
      )}
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        //lineHeight={0.5}
        //align="center"
        color="black"
      >
        {reimbursement.userData.name}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        //fontWeight="50"
        fontWeight="50"
        //lineHeight={0.5}
        //align="center"
        color="black"
      >
        {reimbursement.userData.email}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        //lineHeight={0.5}
        //align="center"
        color="black"
      >
        {reimbursement.request}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="50"
        //lineHeight={0.5}
        //align="center"
        color="black"
      >
        {reimbursement.date}
      </Typography>
    </Box>
    //</Button>
  );
};

const Reimbursements = ({ reimbursements }) => {
  const [selectedReimbursement, setSelectedReimbursement] = useState(null);

  const handleButtonClick = (reimbursement) => {
    //set selected reimbursement
    setSelectedReimbursement(reimbursement);
  };

  const handleBackClick = () => {
    setSelectedReimbursement(null);
  };

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: "5%",
        // marginBottom: '10%',
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
      }}
    >
      {selectedReimbursement ? (
        <Box>
          <Button
            onClick={handleBackClick}
            sx={{
              margin: "10px",
              color: "#333", // Dark gray text
              "&:hover": {
                backgroundColor: "transparent", // No background on hover
                color: "#555", // Slightly lighter gray text on hover
              },
            }}
          >
            Back to List
          </Button>
          <RequestDetails request={selectedReimbursement} />
        </Box>
      ) : (
        <Box
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          {Object.values(reimbursements).map((reimbursement, index) => (
            <Button
              key={index}
              variant="text"
              sx={{ width: "100%", padding: 0 }}
              onClick={() => handleButtonClick(reimbursement)}
            >
              <ReimbursementItem index={index} reimbursement={reimbursement} />
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Reimbursements;
