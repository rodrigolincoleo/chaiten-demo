import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

// Coordenadas de ubicación
const mapCenter = {
  lat: -41.9692,  // Latitud de referencia (Hornopirén, Chile)
  lng: -72.4691,  // Longitud de referencia
};

// API Key de Google Maps (sustituye con tu propia clave)
const GOOGLE_MAPS_API_KEY = 'TU_API_KEY_AQUI';

export default function Ubicacion() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="ubicacion"
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Ubicación
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Columna del mapa */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: isMobile ? '100%' : '500px',
              height: isMobile ? '300px' : '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=15dJMLdu5FCGgKBccNXb_1RAbNAEc4fM&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
          </Box>
        </Grid>

        {/* Columna del texto */}
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Información al Norte */}
          <Box sx={{ maxWidth: isMobile ? '100%' : '400px', mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
              Al Norte
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              Ciudad de Chaitén 10 km<br />
              Santa Bárbara 12 km<br />
              Caleta Gonzalo 56 km<br />
              Playas Santa Bárbara y Morro Vilcún 12 km<br />
              Parque Nacional Pumalín Sendero de Los Alerces 43 km<br />
            </Typography>
          </Box>

          {/* Información al Sur */}
          <Box sx={{ maxWidth: isMobile ? '100%' : '400px' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
              Al Sur
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              El Amarillo 12 km<br />
              Termas El Amarillo 12 km<br />
              Parque Nacional Pumalín 12 km<br />
              Río Yelcho<br />
              Lago Yelcho 46 km<br />
              Parque Nacional Corcovado<br />
              Villa Santa Lucía<br />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
