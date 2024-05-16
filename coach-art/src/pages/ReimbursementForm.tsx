// ReimbursementForm.tsx
import React, {useState} from 'react';
import { Box, Button } from '@mui/material';
import FormComponent from '../components/FormComponent.tsx';
import ReceiptCount from '../components/ReceiptCount.tsx';
import Typography from '@mui/material/Typography';

const ReimbursementForm: React.FC = () => {
  const [receiptCount, setReceiptCount] = useState(1);
  const [activeReceiptIndex, setActiveReceiptIndex] = useState(1);
  const [formData, setFormData] = useState<Array<any>>([{}]);

  const receiptCountArray = Array.from({ length: receiptCount }, (_, index) => index);

  const handleAddReceipt = () => {
    setReceiptCount(receiptCount + 1);
    setActiveReceiptIndex(receiptCount + 1);
    setFormData([...formData, {}]);
    console.log(receiptCount + 1);
  };

  const handleChangeReceipt = (index) => {
    setActiveReceiptIndex(index + 1);
    console.log(index + 1);
  };

  const handleFormChange = (index, newData) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = newData;
    setFormData(updatedFormData);
    console.log(formData[activeReceiptIndex]);
  }

  return (
    <Box>
      <Box>
        <Typography fontSize="36px" fontWeight="700" marginTop = "3%" marginLeft="3%">Reimbursement Form</Typography>
        <Typography fontSize="24px" fontWeight="400" marginTop = "1.5%" marginLeft="3%">Receipt Upload</Typography>
        <Typography fontSize="16px" fontWeight="400" marginLeft="3%" lineHeight={1.5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Semper quis lectus nulla at volutpat diam ut venenatis tellus.
        </Typography>
      </Box>
      <Box sx={{marginTop:'1%'}}>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          {receiptCountArray.map((index) => (
            <Box key={index} sx={{ marginLeft: index === 0 ? '3%' : '0'}}>
              <ReceiptCount label="Receipt" index={index} activeIndex={activeReceiptIndex} onClick={handleChangeReceipt}/>
            </Box>
          ))}
        </Box>
        {/* <FormComponent data={formData[activeReceiptIndex] || {}} onDataChange={(newData) => handleFormChange(activeReceiptIndex, newData)} /> */}
        <FormComponent
          key={activeReceiptIndex} // Add key prop to force rerender when activeReceiptIndex changes
          data={formData[activeReceiptIndex] || {}}
          onDataChange={(newData) => handleFormChange(activeReceiptIndex, newData)}
        />
      </Box>
      <Button sx={{textTransform: 'none'}} onClick={handleAddReceipt}>Add Receipt</Button>
    </Box>
  );
};

export default ReimbursementForm;