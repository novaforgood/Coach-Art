import React from "react";
import { useLocation } from "react-router-dom";
import ReceiptCard from "../components/ReimbursementForm/ReceiptCard.tsx";
import ReimbursementDetails from "../components/ReimbursementForm/ReimbursementDetails.tsx";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/Header.tsx";
import "../styles/global.css";

const ReimbursementReview: React.FC = () => {
  const location = useLocation();
  const { userData, receiptData } = location.state;

  const receipts = [
    {
      id: 1,
      total: 100.02,
      expense: "Expense #1",
      activity: "Activity #1",
      item: "Sock",
      additional: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 2,
      total: 122.33,
      expense: "Expense #1",
      activity: "Activity #1",
      item: "Shoe",
      additional: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 3,
      total: 100.0,
      expense: "Expense #1",
      activity: "Activity #1",
      item: "Glove",
      additional: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 4,
      total: 100.99,
      expense: "Expense #1",
      activity: "Activity #1",
      item: "Mitten",
      additional: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  const grandTotal = receipts.reduce(
    (total, receipt) => total + receipt.total,
    0
  );
  const numReceipts = receipts.length;

  const h2 = {
    fontSize: "24px",
    fontWeight: "400",
    margin: 0,
  };

  const p = {
    fontSize: "16px",
  };

  const editButton = {
    padding: "0px",
    textTransform: "none",
    color: "#000000",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const submitButton = {
    padding: "10px",
    textTransform: "none",
    color: "#FFFFFF",
    backgroundColor: "#B3B3B3",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    marginTop: "20px",
    marginBottom: "20px",
  };
  const editDetailButton = {
    margin: "10px",
    textTransform: "none",
    color: "#B3B3B3",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <Box className="outer-box">
      <Header></Header>
      <Box style={{ margin: 100 }}>
        <Typography
          style={{
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Reimbursement Form Review
        </Typography>
        <Button sx={editButton}>
          <ArrowBackIcon style={{ fontSize: "20px", fontWeight: "400" }} /> Edit
          Receipts
        </Button>
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "70%" }}>
            <Box
              sx={{
                height: "90vh",
                width: "auto",
                overflowY: "auto",
                paddingLeft: 2,
                paddingRight: 2,
                marginRight: "50px",
              }}
            >
              {Object.values(receiptData.receipts).map(
                (receipt: any, index) => (
                  <Box key={receipt.id} sx={{ marginBottom: "16px" }}>
                    <Typography>Receipt {index + 1}</Typography>
                    <Typography>
                      Expense Category: {receipt.expenseCategory}
                    </Typography>
                    <Typography>
                      Activity Category: {receipt.activityCategory}
                    </Typography>
                    <Typography>
                      Items Purchased: {receipt.itemsPurchasedDescription}
                    </Typography>
                    <Typography>
                      Additional Information: {receipt.additionalInformation}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>
          <Box sx={{ width: "400px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={h2}>
                <b> Grand Total: </b> ${grandTotal.toFixed(2)}
              </Typography>
              <Typography style={p}>
                <i>{numReceipts} Receipts</i>
              </Typography>
            </Box>
            <Typography style={p}>
              <b>Date: </b> MM/DD/YY
            </Typography>
            <ReimbursementDetails
              reimbursement={{
                name: "John Doe",
                email: "john@gmail.com",
                streetAddress: "51 Ashford Drive",
                zip: "22042",
                city: "Falls Church",
                state: "VA",
                paymentMethod: "paperCheck",
              }}
            />
            <Box style={{ display: "flex" }}>
              <Button sx={submitButton}>Submit Receipt(s)</Button>
              <Button sx={editDetailButton}>Edit Details</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReimbursementReview;
