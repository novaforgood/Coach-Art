import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const SideBarItem = ({index, filter, selected, onChange}) => {
    const mark_selected = selected ? '#c0c0c0' : 'white';
    const handleClick = () => {
        console.log(selected);
        console.log(index);
        onChange(index);
    };
    return (
        <Button
                variant="text"
                sx={{
                    width: '80%',
                    // height: '10%',
                    fontSize: '1.5rem',
                    borderRadius: '50px',
                    borderWidth: '2px',
                    color: 'black',
                    alignSelf: 'center',
                    padding: '4%',
                    marginBottom: '2%',
                    marginTop: '2%',
                    backgroundColor: mark_selected
                }}
                onClick={handleClick}
                
        >
            <Typography fontSize="15px" fontWeight="50" lineHeight={0.5} align='center' color="black">{filter}</Typography>
        </Button>
    );
};

const SideBar = ({filters, selected, onChange}) => {
  return (
    <Box
        sx={{
        width: '250px',
        marginTop: '5%'
        // backgroundColor: '#f0f0f0'
        }}
    >
        {filters.map((filter, index) => (
            <SideBarItem index={index} filter={filter} selected={selected == index} onChange={onChange}/>
        ))}
    </Box>
  );
};

export default SideBar;
