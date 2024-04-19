import React, {useState} from 'react';
import { Box, TextField, Button, Link } from '@mui/material';
import TextInput from '../TextInput.tsx';
import Typography from '@mui/material/Typography';

const AdminPortal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '5000px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '3%',
        borderRadius: '0 5px 5px 5px',
      }}
    >
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '3vh',
        width: '500px',
        padding: '2%',
        marginBottom: '3%',
        maxWidth: '3000px',
      }}
      >
        <Typography fontSize="30px" fontWeight="600" lineHeight={1.5} align='center'>Admin Portal</Typography>
      </Box>

        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            // maxWidth: '2000px',
            width: '500px',
            justifyContent: 'center',
            alignItems: 'center',
            align: 'center',
            marginBottom: '3%',
        }}
        >
            <TextField
                hiddenLabel
                variant="filled"
                margin="normal"
                size="small"
                placeholder="Username"
                fullWidth
                onChange={handleUsernameChange}
            />
            <TextField
                hiddenLabel
                variant="filled"
                margin="normal"
                size="small"
                placeholder="Password"
                onChange={handlePasswordChange}
                fullWidth
                type="password" // hides password text
            />
            <Link href="/admin/resetpassword" // TODO: rename/update
                underline='always' color="inherit"
            >
                <Typography fontSize="10px" fontWeight="100" lineHeight={1.5} align='center' color="black">Forgot Password?</Typography>
            </Link>
            <Button
                variant="text"
                sx={{ width: '30%', height: '20%', fontSize: '1.5rem', borderRadius: '5px', borderWidth: '2px', color: 'black', alignSelf: 'center',
                textTransform: 'none', padding: '4%', marginBottom: '3%', marginTop: '5%', backgroundColor: '#5c5e60', borderColor: 'black'
                }}
            >
                <Link href="/admin/dashboard" // TODO: rename/update
                underline='none' color="inherit"
                >
                    <Typography fontSize="20px" fontWeight="200" lineHeight={1.5} align='center' color="white">Sign In</Typography>
                </Link>
            </Button>
        </Box>
    </Box>
  );
};


export default AdminPortal;