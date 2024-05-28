// AboutPage.tsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { read } from "../../firebase.tsx";
import SearchBar from "../../components/AdminDashboard/SearchBar.tsx";
import SideBar from "../../components/AdminDashboard/SideBar.tsx";
import Reimbursements from "../../components/AdminDashboard/Reimbursements.tsx";
import { Request } from "../../constants.tsx";
import Header from "../../components/Header.tsx";

const AdminDashboardPage: React.FC = () => {
  // Search Bar Props
  const [searchReimbursement, setSearchReimbursement] = useState("");

  // Side Bar Props
  const filters = [
    "All",
    "Supply Requests",
    "Reimbursements",
    "Completed",
    "Uncompleted",
    "Flagged",
    "Admin Requests",
  ];
  const [selectedFilter, setSelectedFilter] = useState(-1); // no filter selected (can only select 1 at a time)

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["reimbursements"],
    queryFn: () => {
      return read("/reimbursementRequests/");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const reimbursements = data;

  console.log("reimbursements", reimbursements);

  const handleSearchChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    setSearchReimbursement(event.target.value);
  };

  return (
    <>
      <Header admin="admin1"></Header>{" "}
      {/**eventually pass in logged-in admin prop */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "55vh",
          marginTop: "3%",
          marginBottom: "30%",
          borderRadius: "0 5px 5px 5px",
          spacing: "2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "3vh",
            alignItems: "center",
            // backgroundColor: '#f0f0f0',
            justifyContent: "space-between",
            padding: "2%",
            marginBottom: "6%",
          }}
        >
          <Typography fontSize="35px" fontWeight="600" lineHeight={1.5}>
            Dashboard
          </Typography>
          <SearchBar onChange={handleSearchChange} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "3vh",
            alignItems: "center",
            // backgroundColor: '#f0f0f0',
            justifyContent: "space-between",
            padding: "2%",
            marginTop: "5%",
            marginBottom: "3%",
          }}
        >
          <Box sx={{ flex: 2, marginRight: "2%" }}>
            <SideBar
              filters={filters}
              selected={selectedFilter}
              onChange={setSelectedFilter}
            />
          </Box>

          <Box sx={{ flex: 8, marginTop: "7%" }}>
            <Reimbursements reimbursements={reimbursements} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardPage;
