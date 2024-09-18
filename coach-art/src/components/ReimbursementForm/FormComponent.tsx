// FormComponent.tsx
import React, { useState, useRef } from "react";
import ImageFileResizer from "react-image-file-resizer";
import { Button, Typography, Box, TextField } from "@mui/material";
import DropdownSelect from "./Dropdown.tsx";
import TextInput from "../TextInput.tsx";

const FormComponent = ({ data, onDataChange }) => {
  const [expenseCategory, setExpenseCategory] = useState(
    data.expenseCategory || ""
  );
  const [activityCategory, setActivityCategory] = useState(
    data.activityCategory || ""
  );
  const [itemsPurchasedDescription, setItemsPurchasedDescription] = useState(
    data.itemsPurchasedDescription || ""
  );
  const [textInputValue, setTextInputValue] = useState(
    data.additionalInformation || ""
  );
  const [cost, setCost] = useState(data.cost || "");

  const [receiptImage, setReceiptImage] = useState<File>(
    data.receiptImage || null
  );

  const handleExpenseCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
    onDataChange({ ...data, expenseCategory: event.target.value });
  };

  const handleActivityCategoryChange = (event) => {
    setActivityCategory(event.target.value);
    onDataChange({ ...data, activityCategory: event.target.value });
  };

  const handleItemsPurchasedChange = (event) => {
    setItemsPurchasedDescription(event.target.value);
    onDataChange({ ...data, itemsPurchasedDescription: event.target.value });
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
    onDataChange({ ...data, additionalInformation: event.target.value });
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
    onDataChange({ ...data, cost: event.target.value });
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const resizeFile = (file: File): Promise<string> =>
    new Promise((resolve) => {
      ImageFileResizer.imageFileResizer(
        file,
        900,
        900,
        "jpeg",
        100,
        0,
        (uri) => {
          resolve(uri as string);
        },
        "base64"
      );
    });

  const handleReceiptImageChange = async (event) => {
    const file = event.target.files[0];
    const resizedImage = await resizeFile(file);
    //setReceiptImage(resizedImage);
    onDataChange({ ...data, uri: resizedImage });
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const expenseCategoryOptions = [
    { label: "1:1 lesson", value: "1:1 lesson" },
    { label: "Club", value: "Club" },
    {
      label: "Program Partner Scholarship",
      value: "Program Partner Scholarship",
    },
    { label: "Background Check", value: "Background Check" },
    { label: "Other", value: "Other" },
  ];

  const activityCategoryOptions = [
    { label: "Athletics", value: "Athletics" },
    { label: "Culinary Arts", value: "Culinary Arts" },
    { label: "Digital Arts", value: "Digital Arts" },
    { label: "Literary Arts", value: "Literary Arts" },
    { label: "Music", value: "Music" },
    { label: "Performing Arts", value: "Performing Arts" },
    { label: "Science / STEM", value: "Science / STEM" },
    { label: "Textile Arts", value: "Textile Arts" },
    { label: "Visual Art", value: "Visual Art" },
    { label: "Other", value: "Other" },
  ];

  const itemsPurchasedOptions = [
    {
      label: "Groceries/Culinary Tools or Equipment",
      value: "Groceries/Culinary Tools or Equipment",
    },
    { label: "Arts & Crafts", value: "Arts & Crafts" },
    { label: "Athletic Equipment", value: "Athletic Equipment" },
    {
      label: "Music, Electronics, & Accessories",
      value: "Music, Electronics, & Accessories",
    },
    {
      label: "Books & Teaching Materials",
      value: "Books & Teaching Materials",
    },
    {
      label: "Parking Pass OR Pre-approved Uber/Lyft (tip not included)",
      value: "Parking Pass OR Pre-approved Uber/Lyft (tip not included)",
    },
    { label: "Other", value: "Other" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "55vh",
        backgroundColor: "#f0f0f0",
        padding: "2%",
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "3%",
        borderRadius: "0 5px 5px 5px",
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        hidden
        onChange={handleReceiptImageChange}
        accept=".jpg, .jpeg, .pdf, .doc, .docx, .png"
      />
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          height: "40%",
          fontSize: "1.2rem",
          borderRadius: "5px",
          borderWidth: "2px",
          color: "black",
          borderColor: "black",
          alignSelf: "center",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            borderColor: "black",
          },
        }}
        onClick={handleButtonClick}
      >
        Upload Receipt
      </Button>

      <Box
        id="hello"
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "2%",
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
            display: "flex",
            flexDirection: "column",
            width: "80%",
            marginTop: "2%",
          }}
        >
          <Typography fontSize="18px" fontWeight="400">
            Additional Information
          </Typography>
          <Typography fontSize="16px" fontWeight="400">
            Please tell us more! Include name of Student(s) + Class subject(s)
          </Typography>
          <TextInput
            label="Type here"
            value={textInputValue}
            onChange={handleTextInputChange}
            placeholder="ie. Cooking lessons with Carlos, Teen Acting Club, ..."
            rows={8}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1%" }}>
        <Typography sx={{ marginRight: 2 }}>Receipt Amount:</Typography>
        <TextField
          hiddenLabel
          variant="filled"
          margin="normal"
          size="small"
          placeholder="Enter total cost"
          value={cost}
          sx={{ width: "150px" }}
          onChange={handleCostChange}
        />
      </Box>
    </Box>
  );
};

export default FormComponent;
