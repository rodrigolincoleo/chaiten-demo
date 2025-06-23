import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export default function Masterplan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="masterplan"
      sx={{
        marginX: isMobile ? '5%' : '20%', // Márgenes reducidos en móviles
        textAlign: 'center',
        py: 5,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Masterplan
      </Typography>

      <Box
        component="iframe"
        src="https://www.lanube360.com/patagonia-verde/"
        title="Masterplan Interactivo"
        sx={{
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: isMobile ? '60vh' : '100%', // Altura reducida en móviles
        }}
      />
    </Box>
  );
}
