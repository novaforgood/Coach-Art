import React from 'react';
import { styled } from '@mui/system';
import { Box, Select, MenuItem, Typography } from '@mui/material';

const StyledSelect = styled(Select)({
    padding: '1%',
    '&:focus': {
      backgroundColor: 'white', // Change background color on focus
    },
  });

function DropdownSelect({ label, options, value, onChange }) {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
      <Typography fontSize="18px">{label}</Typography>
      <StyledSelect
        value={value}
        onChange={onChange}
        sx={{width: '60%', height: '50%', fontSize: '1.2rem', borderRadius: '12px', color: 'black', borderColor: 'black'}}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
}

export default DropdownSelect;