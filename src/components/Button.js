// src/components/Button.js
import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ onClick, children, variant = 'contained', color = 'primary' }) => {
  return <Button variant={variant} color={color} onClick={onClick}>{children}</Button>;
};

export default MyButton;
