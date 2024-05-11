import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { Request } from '../../constants.tsx';

const ReimbursementItem = ({reimbursement, index}) => {
    return (
        // <Button
        //         variant="text"
                
        // >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '10%',
                    fontSize: '1.5rem',
                    borderRadius: '50px',
                    borderWidth: '2px',
                    color: 'black',
                    alignSelf: 'center',
                    alignItems: 'center',
                    // padding: '2%',
                    // paddingInline: '2%',
                    // paddingRight: '2%',
                    marginBottom: '1%',
                    marginTop: '2%',
                    marginLeft: '2%',
                    marginRight: '12%',
                    // backgroundColor: '#5c5e60',
                    borderColor: 'black',
                }}
            >
                {index % 2 != 0 ? <CheckBoxIcon sx={{marginRight: '2%'}} fontSize='small'/> : <CheckBoxOutlineBlankIcon sx={{marginRight: '2%'}} fontSize='small'/>}
                {index % 2 == 0 ? <BookmarkBorderOutlinedIcon sx={{marginRight: '2%'}} fontSize='small'/> : <BookmarkOutlinedIcon sx={{marginRight: '2%'}} fontSize='small'/>}
                <Typography sx={{marginRight: '9%'}} fontSize="15px" fontWeight="50" lineHeight={0.5} align='center' color="black">{reimbursement.name}</Typography>
                <Typography sx={{marginRight: '9%'}} fontSize="15px" fontWeight="50" lineHeight={0.5} align='center' color="black">{reimbursement.email}</Typography>
                <Typography sx={{marginRight: '2%'}} fontSize="15px" fontWeight="50" lineHeight={0.5} align='center' color="black">{reimbursement.request}</Typography>
                <Typography sx={{marginRight: '2%'}} fontSize="15px" fontWeight="50" lineHeight={0.5} align='center' color="black">{reimbursement.date}</Typography>
            </Box>
        // </Button>
    );
};

const Reimbursements = ({reimbursements}) => {
  return (
    <Box
        sx={{
        width: '80%',
        marginTop: '10%',
        // marginBottom: '10%',
        // padding: '4%'
        borderRadius: '15px',
        backgroundColor: '#f0f0f0'
        }}
    >
        {reimbursements.map((reimbursement, index) => (
            <ReimbursementItem index={index} reimbursement={reimbursement}/>
        ))}
    </Box>
  );
};

export default Reimbursements;