// src/components/WelcomeForm.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const industries = ['Technology', 'Finance', 'Healthcare', 'Education'];

const WelcomeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    industry: '',
    locationNumber: '',
  });

  const handleChange = (field) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    // Validate the form data if needed
    onSubmit(formData);
  };

  const locationNumberOptions = [1, 10, 50, 150, '150+'];
  const filteredLocationNumberOptions = locationNumberOptions.filter(
    (number) => number !== formData.locationNumber
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <TextField
          label="Your Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.name}
          onChange={handleChange('name')}
        />
        <TextField
          label="Company Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.companyName}
          onChange={handleChange('companyName')}
        />
        <TextField
          select
          label="Select Industry"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.industry}
          onChange={handleChange('industry')}
        >
          {industries.map((industry) => (
            <MenuItem key={industry} value={industry}>
              {industry}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Location Number"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.locationNumber}
          onChange={handleChange('locationNumber')}
        >
          {filteredLocationNumberOptions.map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Continue
        </Button>
      </CardContent>
      <Tabs value={0} centered>
        <Tab label={`Selected Location: ${formData.locationNumber}`} />
      </Tabs>
    </Card>
  );
};

export default WelcomeForm;
