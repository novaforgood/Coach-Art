import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkCard from "../components/SupplyForm/LinkCard.tsx";
import SupplyDetails from "../components/SupplyForm/SupplyDetails.tsx";
import Header from "../components/Header.tsx";

const SupplyReview: React.FC = () => {
  const links = [
    {
      id: 1,
      total: 100.02,
      name: "KINSPORY Deluxe Art Supplies Kit for Kids, Bahahaha",
      link: "https://www.amazon.com/KINSPORY-Portable-Childrens-Coloring-Activity/dp/B08X4ZQZ3Z",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa non dolor posuere, non molestie sem porttitor. Integer eros urna, ullamcorper at leo ut, vestibulum gravida ligula. Praesent non.",
    },
    {
      id: 2,
      total: 100.02,
      name: "KINSPORY Deluxe Art Supplies Kit for Kids, Bahahaha",
      link: "https://www.amazon.com/KINSPORY-Portable-Childrens-Coloring-Activity/dp/B08X4ZQZ3Z",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa non dolor posuere, non molestie sem porttitor. Integer eros urna, ullamcorper at leo ut, vestibulum gravida ligula. Praesent non.",
    },
    {
      id: 3,
      total: 100.02,
      name: "KINSPORY Deluxe Art Supplies Kit for Kids, Bahahaha",
      link: "https://www.amazon.com/KINSPORY-Portable-Childrens-Coloring-Activity/dp/B08X4ZQZ3Z",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa non dolor posuere, non molestie sem porttitor. Integer eros urna, ullamcorper at leo ut, vestibulum gravida ligula. Praesent non.",
    },
  ];

  const grandTotal = links.reduce((total, link) => total + link.total, 0);
  const numLinks = links.length;

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
    <>
      <Header></Header>
      <Box style={{ margin: 100, marginTop: 80 }}>
        <Typography
          style={{
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Supply Request Review
        </Typography>
        <Button sx={editButton}>
          <ArrowBackIcon style={{ fontSize: "20px", fontWeight: "400" }} /> Edit
          Links
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
              {links.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </Box>
          </Box>
          <Box sx={{ width: "400px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={h2}>
                <b> Grand Total: </b> ${grandTotal.toFixed(2)}
              </Typography>
              <Typography style={p}>
                <i>{numLinks} Receipts</i>
              </Typography>
            </Box>
            <Typography style={p}>
              <b>Date: </b> MM/DD/YY
            </Typography>
            <SupplyDetails
              reimbursement={{
                name: "John Doe",
                email: "john@gmail.com",
                streetAddress: "51 Ashford Drive",
                zip: "22042",
                city: "Falls Church",
                state: "VA",
              }}
            />
            <Box style={{ display: "flex" }}>
              <Button sx={submitButton}>Submit Receipt(s)</Button>
              <Button sx={editDetailButton}>Edit Links</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SupplyReview;
