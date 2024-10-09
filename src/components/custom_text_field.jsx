import React from 'react';
import TextField from '@mui/material/TextField';
import theme from '../styles/theme/theme';

const CustomTextField = ({ label }) => {
  return (
    <TextField
      variant="outlined" // Use outlined variant for border
      label={label} // Set the label
      InputLabelProps={{
        style: { color: 'black' }, // Set label color to black
      }}
      sx={{
        width: '250px',
        borderRadius: '30px', // Set border radius
        '& .MuiOutlinedInput-root': {
          borderRadius: '30px', // Ensure input field has the same border radius
          '& fieldset': {
            borderColor: theme.colors.primary,
            borderWidth: '3px', // Maintain thicker border on hover
            // Set border color to primary
          },
          '&:hover fieldset': {
            borderColor: theme.colors.primary,
            borderWidth: '3px',          },
          '&.Mui-focused fieldset': {
            borderColor: theme.colors.primary,
            borderWidth: '3px',  // Maintain primary color when focused
          },
        },
      }}
    />
  );
};

export default CustomTextField;
