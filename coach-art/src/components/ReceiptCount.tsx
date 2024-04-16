import React from 'react';
import { Box, Button } from '@mui/material';

const ReceiptCount = ({ label, index = 0, onClick}) => {
    return (
        <Box sx={{marginTop: '1%'}}>
            <Button
                variant="outlined"
                sx={{ borderRadius: '0 0 0 0', color: 'black', backgroundColor: '#f0f0f0', border: 'none', alignSelf: 'center', textTransform: 'none', 
                '&:hover': {
                    border: 'none',
                    backgroundColor: '#e0e0e0'
                }
                }}
                onClick={() => onClick(index)}
            >
            {label} {index + 1}
            </Button>
        </Box>
    );
};


export default ReceiptCount;