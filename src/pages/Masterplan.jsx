import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Masterplan() {
  return (
    <Box 
    id='masterplan'
    sx={{ flexGrow: 1, p: 4, textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Masterplan
      </Typography>
      <Box
        component="iframe"
        src="https://www.lanube360.com/temporales/patagonia-verde7/"
        title="Masterplan Interactivo"
        sx={{
          width: '100%',
          maxWidth: '1000px',
          height: '600px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
    </Box>
  );
}
