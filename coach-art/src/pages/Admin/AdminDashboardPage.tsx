import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { read, updateData } from "../../firebase.tsx";
import SearchBar from "../../components/AdminDashboard/SearchBar.tsx";
import SideBar from "../../components/AdminDashboard/SideBar.tsx";
import Reimbursements from "../../components/AdminDashboard/Reimbursements.tsx";
import Header from "../../components/Header.tsx";
import AdminLogout from "../../components/AdminLogin/AdminLogout.tsx";
import AdminRequests from "../../components/AdminDashboard/AdminRequests.tsx";
import { Admin, Reimbursement, FilteredData } from "../../types";

const AdminDashboardPage: React.FC = () => {
  const [searchReimbursement, setSearchReimbursement] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(-1);
  const queryClient = useQueryClient();

  interface UpdateAdminStatusParams {
    adminId: string;
    status: string;
  }

  //type FilteredData = Record<string, Admin | Reimbursement>;
  const filters = ["All", "Completed", "Not Completed", "Admin Requests"];

  const {
    isLoading,
    isError,
    data: reimbursements,
    error,
  } = useQuery({
    queryKey: ["reimbursements"],
    queryFn: () => read("/reimbursementRequests/"),
  });

  const { data: adminRequests } = useQuery({
    queryKey: ["adminRequests"],
    queryFn: () => read("/admin/"),
  });

  const updateReimbursementMutation = useMutation({
    mutationFn: (updatedReimbursement: { id: string } & Object) =>
      updateData(
        `/reimbursementRequests/${updatedReimbursement.id}`,
        updatedReimbursement
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reimbursements"] });
    },
  });

  const updateAdminStatusMutation = useMutation({
    mutationFn: ({ adminId, status }: UpdateAdminStatusParams) =>
      updateData(`/admin/${adminId}`, { approved: status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminRequests"] });
    },
  });

  const handleSearchChange = (event) => {
    setSearchReimbursement(event.target.value);
  };

  const handleCompletionToggle = (reimbursementId, newCompletionStatus) => {
    const updatedReimbursement = {
      ...reimbursements[reimbursementId],
      id: reimbursementId,
      completed: newCompletionStatus,
    };
    updateReimbursementMutation.mutate(updatedReimbursement);
  };

  const handleAdminStatusUpdate = (adminId, status) => {
    updateAdminStatusMutation.mutate({ adminId, status });
  };

  const filteredData: FilteredData = useMemo(() => {
    if (selectedFilter === 3) {
      // Admin Requests
      return adminRequests
        ? Object.entries(adminRequests as Record<string, Admin>)
            .filter(([, admin]) => admin.approved === "pending")
            .reduce<Record<string, Admin>>((acc, [id, admin]) => {
              acc[id] = admin;
              return acc;
            }, {})
        : {};
    } else {
      if (!reimbursements) return {};

      return Object.entries(reimbursements as Record<string, Reimbursement>)
        .filter(([, reimbursement]) => {
          const matchesSearch = reimbursement.userData.name
            .toLowerCase()
            .includes(searchReimbursement.toLowerCase());

          let matchesFilter = true;
          if (selectedFilter === 1) {
            // Completed
            matchesFilter = reimbursement.completed === true;
          } else if (selectedFilter === 2) {
            // Uncompleted
            matchesFilter = reimbursement.completed === false;
          }

          return matchesSearch && matchesFilter;
        })
        .reduce<Record<string, Reimbursement>>((acc, [id, reimbursement]) => {
          acc[id] = reimbursement;
          return acc;
        }, {});
    }
  }, [reimbursements, adminRequests, searchReimbursement, selectedFilter]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!reimbursements) return <div>No data available</div>;

  return (
    <>
      <Header admin="admin" />
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
            <AdminLogout />
          </Box>

          <Box sx={{ flex: 8, marginTop: "7%" }}>
            {selectedFilter === 3 ? (
              <AdminRequests
                adminRequests={filteredData as Record<string, Admin>}
                onStatusUpdate={handleAdminStatusUpdate}
              />
            ) : (
              <Reimbursements
                reimbursements={filteredData as Record<string, Reimbursement>}
                onCompletionToggle={handleCompletionToggle}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardPage;
// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { useQuery } from "@tanstack/react-query";
// import { read } from "../../firebase.tsx";
// import SearchBar from "../../components/AdminDashboard/SearchBar.tsx";
// import SideBar from "../../components/AdminDashboard/SideBar.tsx";
// import Reimbursements from "../../components/AdminDashboard/Reimbursements.tsx";
// import { Request } from "../../constants.tsx";
// import Header from "../../components/Header.tsx";
// import AdminLogout from "../../components/AdminLogin/AdminLogout.tsx";

// const AdminDashboardPage: React.FC = () => {
//   // Search Bar Props
//   const [searchReimbursement, setSearchReimbursement] = useState("");

//   // Side Bar Props
//   const filters = [
//     "All",
//     "Supply Requests",
//     "Reimbursements",
//     "Completed",
//     "Uncompleted",
//     "Flagged",
//     "Admin Requests",
//   ];
//   const [selectedFilter, setSelectedFilter] = useState(-1); // no filter selected (can only select 1 at a time)

//   const { isLoading, isError, data, error } = useQuery({
//     queryKey: ["reimbursements"],
//     queryFn: () => {
//       return read("/reimbursementRequests/");
//     },
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     return <div>No data available</div>;
//   }

//   const reimbursements = data;

//   console.log("reimbursements", reimbursements);

//   const handleSearchChange = (event) => {
//     console.log(event);
//     console.log(event.target.value);
//     setSearchReimbursement(event.target.value);
//   };

//   return (
//     <>
//       <Header admin="admin"></Header>{" "}
//       {/**eventually pass in logged-in admin prop */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           height: "55vh",
//           marginTop: "3%",
//           marginBottom: "30%",
//           borderRadius: "0 5px 5px 5px",
//           spacing: "2",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             height: "3vh",
//             alignItems: "center",
//             // backgroundColor: '#f0f0f0',
//             justifyContent: "space-between",
//             padding: "2%",
//             marginBottom: "6%",
//           }}
//         >
//           <Typography fontSize="35px" fontWeight="600" lineHeight={1.5}>
//             Dashboard
//           </Typography>

//           <SearchBar onChange={handleSearchChange} />
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             height: "3vh",
//             alignItems: "center",
//             // backgroundColor: '#f0f0f0',
//             justifyContent: "space-between",
//             padding: "2%",
//             marginTop: "5%",
//             marginBottom: "3%",
//           }}
//         >
//           <Box sx={{ flex: 2, marginRight: "2%" }}>
//             <SideBar
//               filters={filters}
//               selected={selectedFilter}
//               onChange={setSelectedFilter}
//             />
//             <AdminLogout></AdminLogout>
//           </Box>

//           <Box sx={{ flex: 8, marginTop: "7%" }}>
//             <Reimbursements reimbursements={reimbursements} />
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdminDashboardPage;
