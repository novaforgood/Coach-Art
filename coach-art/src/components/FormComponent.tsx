// FormComponent.tsx
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import DropdownSelect from '../components/Dropdown.tsx';
import TextInput from './TextInput.tsx';

const FormComponent = () => {
  const [expenseCategory, setExpenseCategory] = useState('');
  const [activityCategory, setActivityCategory] = useState('');
  const [itemsPurchasedDescription, setItemsPurchasedDescription] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  const handleExpenseCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
  };

  const handleActivityCategoryChange = (event) => {
    setActivityCategory(event.target.value);
  };

  const handleItemsPurchasedChange = (event) => {
    setItemsPurchasedDescription(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const expenseCategoryOptions = [
    { label: 'EC Option 1', value: 'ecoption1' },
    { label: 'EC Option 2', value: 'ecoption2' },
    { label: 'EC Option 3', value: 'ecoption3' }
  ];

  const activityCategoryOptions = [
    { label: 'AC Option 1', value: 'acoption1' },
    { label: 'AC Option 2', value: 'acoption2' },
    { label: 'AC Option 3', value: 'acoption3' }
  ];

  const itemsPurchasedOptions = [
    { label: 'IP Option 1', value: 'ipoption1' },
    { label: 'IP Option 2', value: 'ipoption2' },
    { label: 'IP Option 3', value: 'ipoption3' }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '55vh',
        backgroundColor: '#f0f0f0',
        padding: '2%',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '3%',
        borderRadius: '0 5px 5px 5px',
      }}
    >
      <Button
        variant="outlined"
        sx={{ width: '100%', height: '40%', fontSize: '1.2rem', borderRadius: '5px', borderWidth: '2px', color: 'black', borderColor: 'black', alignSelf: 'center', textTransform: 'none',
          '&:hover': {
            backgroundColor: '#e0e0e0',
            borderColor: 'black'
          },
        }}
      >
        Upload Receipt
      </Button>
      <Box id="hello"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: '2%'
          }}
        >
          <DropdownSelect
            label="Expense Category"
            options={expenseCategoryOptions}
            value={expenseCategory}
            onChange={handleExpenseCategoryChange}
          />
          <DropdownSelect
            label="Activity Category"
            options={activityCategoryOptions}
            value={activityCategory}
            onChange={handleActivityCategoryChange}
          />
          <DropdownSelect
            label="Description of Items Purchased"
            options={itemsPurchasedOptions}
            value={itemsPurchasedDescription}
            onChange={handleItemsPurchasedChange}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            marginTop: '2%'
          }}
        >
          <Typography fontSize="18px" fontWeight="400">Additional Information</Typography>
          <Typography fontSize="16px" fontWeight="400">Please tell us more! Include name of Student(s)+ Class subject(s)</Typography>
          <TextInput
            label="Type here"
            value={textInputValue}
            onChange={handleTextInputChange}
            placeholder='ie. Cooking lessons with Carlos, Teen Acting Club, ...'
            rows={8}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FormComponent;