import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RequestDetails from "./RequestDetails.tsx";
import { Reimbursement } from "../../types/index.ts";

interface ReimbursementItemProps {
  reimbursement: Reimbursement;
  id: string;
  onCompletionToggle: (id: string, completed: boolean) => void;
  onItemClick: () => void;
}

const ReimbursementItem: React.FC<ReimbursementItemProps> = ({
  reimbursement,
  id,
  onCompletionToggle,
  onItemClick,
}) => {
  const handleCompletionToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from propagating to the parent Button
    onCompletionToggle(id, !reimbursement.completed);
  };

  return (
    <Box
      onClick={onItemClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "10px",
        fontSize: "1.5rem",
        borderRadius: "50px",
        borderWidth: "2px",
        color: "black",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1%",
        marginTop: "2%",
        marginLeft: "2%",
        marginRight: "12%",
        borderColor: "black",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        textTransform: "uppercase",
      }}
    >
      <IconButton onClick={handleCompletionToggle} sx={{ marginRight: "2%" }}>
        {reimbursement.completed ? (
          <CheckBoxIcon fontSize="small" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="small" />
        )}
      </IconButton>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        color="black"
      >
        {reimbursement.userData.name}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="50"
        color="black"
      >
        {reimbursement.userData.email}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        color="black"
      >
        {"reimbursement"}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="50"
        color="black"
      >
        {reimbursement.userData.date}
      </Typography>
    </Box>
  );
};

interface ReimbursementsProps {
  reimbursements: Record<string, Reimbursement>;
  onCompletionToggle: (id: string, completed: boolean) => void;
}

const Reimbursements: React.FC<ReimbursementsProps> = ({
  reimbursements,
  onCompletionToggle,
}) => {
  const [selectedReimbursement, setSelectedReimbursement] =
    useState<Reimbursement | null>(null);

  const handleItemClick = (reimbursement: Reimbursement) => {
    setSelectedReimbursement(reimbursement);
  };

  const handleBackClick = () => {
    setSelectedReimbursement(null);
  };

  const sortReimbursements = (a: Reimbursement, b: Reimbursement) => {
    const aarr = a.userData.date.split("/").map((num) => num.padStart(2, "0"));
    const aday = parseInt(aarr[2].concat(aarr[0]).concat(aarr[1]));
    const barr = b.userData.date.split("/").map((num) => num.padStart(2, "0"));
    const bday = parseInt(barr[2].concat(barr[0]).concat(barr[1]));
    return bday - aday;
  };

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: "5%",
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
              color: "#333",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#555",
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
          {Object.entries(reimbursements)
            .sort(([, a], [, b]) => sortReimbursements(a, b))
            .map(([id, reimbursement]) => (
              <ReimbursementItem
                key={id}
                id={id}
                reimbursement={reimbursement}
                onCompletionToggle={onCompletionToggle}
                onItemClick={() => handleItemClick(reimbursement)}
              />
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Reimbursements;
