import React from "react";
import { Box, Typography } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";

interface SupplyDetailsProps {
  reimbursement: {
    name: string;
    email: string;
    streetAddress: string;
    zip: string;
    city: string;
    state: string;
  };
}

const ListItem = styled.li`
  margin-top: 12px;
`;

const SupplyDetails: React.FC<SupplyDetailsProps> = ({ reimbursement }) => {
  const h2 = {
    fontSize: "24px",
    fontWeight: "400",
    margin: 0,
  };

  const p = {
    fontSize: "16px",
    fontWeight: "400",
  };

  const cardStyle = {
    backgroundColor: "#F5F5F5",
    padding: "40px",
    borderRadius: "15px",
    marginTop: "15px",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const radioStyle = {
    paddingTop: 0,
    paddingBottom: 0,
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box style={cardStyle}>
      <Typography style={h2}>
        <b>Reimbursement Details</b>
      </Typography>
      <ul style={listStyle}>
        <ListItem>
          <Typography style={p}>
            <b>Name: </b> {reimbursement.name}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={p}>
            <b>Email: </b>
            {reimbursement.email}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={p}>
            <b>Shipping Address</b>
          </Typography>
          <Typography style={p}>{reimbursement.streetAddress}</Typography>
          <Typography style={p}>
            {reimbursement.zip} {reimbursement.city}, {reimbursement.state}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Are you a CoachArt parent/volunteer?</Typography>
          <RadioGroup>
            <FormControlLabel
              value="true"
              control={<Radio style={radioStyle} />}
              label="Yes"
              style={p}
            />

            <FormControlLabel
              value="false"
              control={<Radio style={radioStyle} />}
              label="No"
              style={p}
            />
          </RadioGroup>
        </ListItem>
      </ul>
    </Box>
  );
};

export default SupplyDetails;
