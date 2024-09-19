// ReimbursementForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "../components/ReimbursementForm/FormComponent.tsx";
import ReceiptCount from "../components/ReimbursementForm/ReceiptCount.tsx";
import Typography from "@mui/material/Typography";
import Header from "../components/Header.tsx";
import UserInfo from "../components/ReimbursementForm/UserInfo.tsx";

const ReimbursementForm: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>({
    id: uuidv4(),
    name: "",
    email: "",
    streetAddress: "",
    zipCode: "",
    city: "",
    state: "",
    date: "",
  });
  const [receiptCount, setReceiptCount] = useState(1);
  const [activeReceiptIndex, setActiveReceiptIndex] = useState(0); //was 1 CHANGED
  const [formData, setFormData] = useState<Array<any>>([
    {
      id: uuidv4(),
      expenseCategory: "",
      activityCategory: "",
      itemsPurchasedDescription: "",
      additionalInformation: "",
      cost: 0,
    },
  ]);

  const receiptCountArray = Array.from(
    { length: receiptCount },
    (_, index) => index
  );

  const handleAddReceipt = () => {
    setReceiptCount(receiptCount + 1);
    //setActiveReceiptIndex(receiptCount + 1); CHANGED
    setActiveReceiptIndex(receiptCount);
    setFormData([
      ...formData,
      {
        id: uuidv4(),
        expenseCategory: "",
        activityCategory: "",
        itemsPurchasedDescription: "",
        additionalInformation: "",
        cost: 0,
      },
    ]);
    console.log(receiptCount + 1);
  };

  const handleChangeReceipt = (index) => {
    setActiveReceiptIndex(index); //CHANGED from index + 1
    console.log(index + 1);
  };
  const handleUserInfoChange = (newData) => {
    setUserData(newData);
    console.log(userData);
  };

  const handleFormChange = (index, newData) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], ...newData };
    setFormData(updatedFormData);
    console.log(formData[activeReceiptIndex]);
  };

  const handleSubmit = () => {
    const receiptData = {
      receipts: formData.reduce((acc, receipt) => {
        acc[receipt.id] = receipt; //need id
        return acc;
      }, {}),
    };

    navigate("/review", { state: { userData, receiptData } });
  };

  return (
    <>
      <Header admin=""></Header>
      <Box sx={{ padding: "3%" }}>
        <Box>
          <Typography
            fontSize="36px"
            fontWeight="700"
            marginTop="3%"
            marginLeft="3%"
          >
            Reimbursement Form
          </Typography>
          <Typography
            fontSize="24px"
            fontWeight="400"
            marginTop="1.5%"
            marginLeft="3%"
          >
            Receipt Upload
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="400"
            marginLeft="3%"
            lineHeight={1.5}
          >
            Please be sure to include ALL receipts for which you wish to be
            reimbursed. Use the "Add Receipt" button to submit multiple
            receipts. Accepted formats: JPG, PDF, DOC, PNG
          </Typography>

          <Box sx={{ marginTop: "1%" }}>
            <UserInfo
              data={userData || {}}
              onDataChange={(newData) => handleUserInfoChange(newData)}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "1%" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {receiptCountArray.map((index) => (
              <Box key={index} sx={{ marginLeft: index === 0 ? "3%" : "0" }}>
                <ReceiptCount
                  label="Receipt"
                  index={index}
                  activeIndex={activeReceiptIndex}
                  onClick={handleChangeReceipt}
                />
              </Box>
            ))}
          </Box>
          {/* <FormComponent data={formData[activeReceiptIndex] || {}} onDataChange={(newData) => handleFormChange(activeReceiptIndex, newData)} /> */}
          <FormComponent
            key={activeReceiptIndex} // Add key prop to force rerender when activeReceiptIndex changes
            data={formData[activeReceiptIndex] || {}}
            onDataChange={(newData) =>
              handleFormChange(activeReceiptIndex, newData)
            }
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "2%",
            marginRight: "2.75%",
          }}
        >
          <Button
            style={{ backgroundColor: "#b3b3b3" }}
            variant="contained"
            sx={{ textTransform: "none", marginRight: "1%" }}
            onClick={handleAddReceipt}
          >
            Add Receipt
          </Button>
          <Button
            style={{ backgroundColor: "#b3b3b3" }}
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleSubmit}
          >
            Review
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ReimbursementForm;
