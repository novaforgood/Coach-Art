// ReimbursementForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { write } from "../firebase.tsx";
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
    aptSuite: "",
    city: "",
    state: "",
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

  const handleSubmit = async () => {
    const receiptData = {
      receipts: formData.reduce((acc, receipt) => {
        acc[receipt.id] = receipt; //need id
        return acc;
      }, {}),
    };

    try {
      write("reimbursementRequests/" + userData.id, {
        userData,
        receiptData,
      });
      navigate("/review", { state: { userData, receiptData } });
    } catch (error) {
      console.error("Write to firebase failed: ", error);
    }
  };

  return (
    <>
      <Header></Header>
      <Box>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            quis lectus nulla at volutpat diam ut venenatis tellus.
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
        <Button sx={{ textTransform: "none" }} onClick={handleAddReceipt}>
          Add Receipt
        </Button>
        <Button sx={{ textTransform: "none" }} onClick={handleSubmit}>
          Review
        </Button>
      </Box>
    </>
  );
};

export default ReimbursementForm;
