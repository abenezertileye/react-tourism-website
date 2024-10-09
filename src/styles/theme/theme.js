const theme = {
    colors: {
      primary: '#FFBC00',     // Primary color (Yellow)
      white: '#FFFFFF',       // White
      black: '#000000',       // Black
      grey: '#808080',  
      accent1: '#FFE600'
    },
    typography: {
      title: {
        large: {
          fontSize: '2rem',   // Adjust size as needed
          color: '#FFFFFF',   // White
        },
        medium: {
          fontSize: '1.5rem', // Adjust size as needed
          color: '#000000',   // Black (you can adjust depending on preference)
        },
        small: {
          fontSize: '1rem',
          color: ['#000000', '#FFFFFF'], // Both Black and White
        },
      },
      body: {
        large: {
          fontSize: '1.25rem', // Adjust size as needed
          color: '#000000',    // Black
        },
        medium: {
          fontSize: '1rem',    // Adjust size as needed
          color: ['#FFFFFF', '#000000'], // White and Black
        },
        small: {
          fontSize: '0.875rem', // Adjust size as needed
          color: ['#FFFFFF', '#808080'], // White and Grey
        },
      },
    },
   
     };
  
  export default theme;
  