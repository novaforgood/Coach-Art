import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { Admin } from "../../types";

interface AdminRequestsProps {
  adminRequests: Record<string, Admin>;
  onStatusUpdate: (adminId: string, status: string) => void;
}

const AdminRequestItem: React.FC<{
  admin: Admin;
  id: string;
  onStatusUpdate: (adminId: string, status: string) => void;
}> = ({ admin, id, onStatusUpdate }) => {
  return (
    <Box
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
        textTransform: "uppercase",
      }}
    >
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        color="black"
      >
        {`${admin.firstName} ${admin.lastName}`}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="50"
        color="black"
      >
        {admin.email}
      </Typography>
      <Typography
        sx={{ flex: 1, marginLeft: "2%" }}
        fontSize="15px"
        fontWeight="500"
        color="black"
      >
        {admin.username}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
        <Button
          onClick={() => onStatusUpdate(id, "approved")}
          sx={{
            fontSize: "12px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "green",
            marginRight: "10px",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          Approve
        </Button>
        <Button
          onClick={() => onStatusUpdate(id, "denied")}
          sx={{
            fontSize: "12px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          Deny
        </Button>
      </Box>
    </Box>
  );
};

const AdminRequests: React.FC<AdminRequestsProps> = ({
  adminRequests,
  onStatusUpdate,
}) => {
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
      <Typography fontSize="24px" fontWeight="600" marginBottom="20px">
        Pending Admin Requests
      </Typography>
      <Box
        sx={{
          maxHeight: "60vh",
          overflowY: "auto",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {Object.entries(adminRequests).map(([id, admin]) => (
          <AdminRequestItem
            key={id}
            id={id}
            admin={admin}
            onStatusUpdate={onStatusUpdate}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AdminRequests;
