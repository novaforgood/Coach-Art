import React, {useState} from 'react';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import AdminPortal from '../components/AdminLogin/AdminPortal.tsx';

const AdminLoginPage: React.FC = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [data, setData] = useState([username, password]);

  // const handleDataChange = (newData) => {
    
  // }

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
        backgroundColor: '#f0f0f0',
        padding: '2%',
        marginBottom: '3%',
      }}
      >
        <Typography fontSize="16px" fontWeight="400" lineHeight={1.5}>COACHART</Typography>
      </Box>
    <AdminPortal
      // data={data}
      // onDataChange={(newData) => handleDataChange(newData)}
    />
    </Box>
  );
};

export default AdminLoginPage;