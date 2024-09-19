import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onChange}) => {
  return (
    <Box
        sx={{
        width: '500px'
        }}
    >
        <TextField
            label="Search"
            variant="outlined"
            margin="normal"
            size="small"
            onChange={onChange}
            fullWidth
            InputProps={{
                startAdornment: (
                <SearchIcon />
                ),
            }}
        />
    </Box>
  );
};

export default SearchBar;
