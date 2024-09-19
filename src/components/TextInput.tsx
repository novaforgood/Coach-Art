import React from 'react';
import { TextField } from '@mui/material';

function TextInput({ label, value, onChange, placeholder, rows }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth // Take full width of the parent container
      margin="normal" // Add some margin for spacing
      placeholder={placeholder}
      rows={rows}
      multiline
    />
  );
}

export default TextInput;