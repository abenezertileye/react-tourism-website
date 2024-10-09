import React from 'react';
import Button from '@mui/material/Button';
import theme from '../styles/theme/theme';  // Import your custom theme object

const CustomButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: '150px',
        backgroundColor: theme.colors.primary,  // Use the primary color from your custom theme
        borderRadius: '30px',  // Set border radius
        padding: '10px 20px',  // Adjust padding for better size
        color: theme.colors.black,  // Set text color to white from your custom theme
        '&:hover': {
          backgroundColor: theme.colors.accent1,  // Change background color on hover
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
