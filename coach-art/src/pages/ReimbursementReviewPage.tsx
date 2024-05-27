import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { write } from "../firebase.tsx";
import ReceiptCard from "../components/ReimbursementForm/ReceiptCard.tsx";
import ReimbursementDetails from "../components/ReimbursementForm/ReimbursementDetails.tsx";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/Header.tsx";
import "../styles/global.css";

interface Receipt {
  activityCategory: string;
  additionalInformation: string;
  cost: string;
  expenseCategory: string;
  id: string;
  itemsPurchasedDescription: string;
  uri: string;
}
interface User {
  name: string;
  email: string;
  streetAddress: string;
  zipCode: string;
  city: string;
  state: string;
  date: string;
}

const ReimbursementReview: React.FC = () => {
  const location = useLocation();
  const {
    userData,
    receiptData,
  }: { receiptData: { [key: string]: Receipt }; userData: any } =
    location.state;
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(getDate());

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  /*
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
  */
  const handleSubmit = async () => {
    try {
      write("reimbursementRequests/" + userData.id, {
        userData,
        receiptData,
      });
      navigate("/reimbursement-confirmation");
    } catch (error) {
      console.error("Write to firebase failed: ", error);
    }
  };

  const grandTotal = Object.values(receiptData.receipts).reduce(
    (total, receipt: Receipt) => {
      const cost = receipt.cost ? Number(receipt.cost) : 0;
      total += cost;
      return total;
    },
    0
  );
  const numReceipts = Object.values(receiptData.receipts).length;

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
                  // <Box key={receipt.id} sx={{ marginBottom: "16px" }}>
                  //   <Typography>Receipt {index + 1}</Typography>
                  //   <Typography>
                  //     Expense Category: {receipt.expenseCategory}
                  //   </Typography>
                  //   <Typography>
                  //     Activity Category: {receipt.activityCategory}
                  //   </Typography>
                  //   <Typography>
                  //     Items Purchased: {receipt.itemsPurchasedDescription}
                  //   </Typography>
                  //   <Typography>
                  //     Additional Information: {receipt.additionalInformation}
                  //   </Typography>
                  // </Box>
                  <ReceiptCard
                    key={receipt.id}
                    receipt={receipt}
                    receiptNum={index + 1}
                  />
                )
              )}
            </Box>
          </Box>
          <Box sx={{ width: "400px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={h2}>
                <b> Grand Total: </b> ${Number(grandTotal).toFixed(2)}
              </Typography>
              <Typography style={p}>
                <i>{numReceipts} Receipts</i>
              </Typography>
            </Box>
            <Typography style={p}>
              <b>Date: </b> {currentDate}
            </Typography>
            <ReimbursementDetails
              reimbursement={{
                name: userData.name,
                email: userData.email,
                streetAddress: userData.streetAddress,
                zip: userData.zipCode,
                city: userData.city,
                state: userData.state,
                paymentMethod: "paperCheck",
              }}
            />
            <Box style={{ display: "flex" }}>
              <Button sx={submitButton} onClick={handleSubmit}>
                Submit Receipt(s)
              </Button>
              <Button sx={editDetailButton}>Edit Details</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReimbursementReview;
