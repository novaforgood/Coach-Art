// AboutPage.tsx
import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';

const AdminDashboardPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '55vh',
        marginBottom: '3%',
        borderRadius: '0 5px 5px 5px',
      }}
    >
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '3vh',
        // backgroundColor: '#f0f0f0',
        padding: '2%',
        marginBottom: '3%',
      }}
      >
        <Typography fontSize="30px" fontWeight="600" lineHeight={1.5}>Dashboard</Typography>
        
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;