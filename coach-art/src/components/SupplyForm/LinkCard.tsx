import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

interface LinkCardProps {
  link: {
    id: number;
    total: number;
    name: string;
    link: string;
    comment: string;
  };
}

const ListItem = styled.li`
  margin-top: 12px;
`;

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
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

  const editButton = {
    padding: "0px",
    textTransform: "none",
    color: "#000000",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    minWidth: "0px",
    marginTop: "20px",
    marginRight: "12px",
  };

  const removeButton = {
    padding: "0px",
    textTransform: "none",
    color: "#B3B3B3",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    minWidth: "0px",
    marginTop: "20px",
  };

  return (
    <div className="receipt-card" style={cardStyle}>
      <div style={{ display: "flex" }}>
        <img
          src="https://via.placeholder.com/180"
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
            <Typography style={h2}>Receipt {link.id}</Typography>
            <Typography style={h2}>${link.total.toFixed(2)}</Typography>
          </div>
          <ul style={listStyle}>
            <ListItem>
              <Typography>
                <b>Expense Category: </b>
                {link.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>Activity Category: </b>
                {link.link}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>Additional Category: </b>
                {link.comment}
              </Typography>
            </ListItem>
          </ul>
          <Button sx={editButton}>Edit</Button>
          <Button sx={removeButton}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
