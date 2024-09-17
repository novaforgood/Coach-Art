import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

interface ReceiptCardProps {
  receipt: {
    id: string;
    cost: number;
    expenseCategory: string;
    activityCategory: string;
    itemsPurchasedDescription: string;
    additionalInformation: string;
    uri: string;
  };
  receiptNum;
}

const ListItem = styled.li`
  margin-top: 12px;
`;

const ReceiptCard: React.FC<ReceiptCardProps> = ({ receipt, receiptNum }) => {
  const cardStyle = {
    padding: "20px",
    marginBottom: "50px",
  };
  const titleStyle = {
    marginBottom: 0,
    display: "flex",
    justifyContent: "space-between",
  };
  const h2 = {
    fontSize: "24px",
    fontWeight: "400",
    margin: 0,
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  return (
    <div className="receipt-card" style={cardStyle}>
      <div style={{ display: "flex" }}>
        <img
          //src="https://via.placeholder.com/180"
          src={receipt.uri}
          alt="receipt"
          style={{
            marginRight: "25px",
            objectFit: "cover",
            height: "206px",
            width: "184px",
            borderRadius: "5px",
          }}
        />
        <div style={{ flexGrow: 1 }}>
          <div style={titleStyle}>
            <Typography style={h2}>Receipt {receiptNum}</Typography>
            <Typography style={h2}>
              ${Number(receipt.cost).toFixed(2)}
            </Typography>
          </div>
          <ul style={listStyle}>
            <ListItem>
              <Typography>
                <b>Expense Category: </b>
                {receipt.expenseCategory}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>Activity Category: </b>
                {receipt.activityCategory}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>Item Description: </b>
                {receipt.itemsPurchasedDescription}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>Additional Category: </b>
                {receipt.additionalInformation}
              </Typography>
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceiptCard;
