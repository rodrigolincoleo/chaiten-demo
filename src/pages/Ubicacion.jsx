import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{
                width: isMobile ? '100%' : '500px',
                height: isMobile ? '300px' : '400px',
                borderRadius: '8px',
              }}
              center={mapCenter}
              zoom={12}
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </Grid>

        {/* Columna del texto */}
        <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center">
          {/* Información al Norte */}
          <Box sx={{ maxWidth: isMobile ? '90%' : '400px' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Al Norte
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              Puerto Montt 65 km, 60 min.<br />
              Contao 25 km, 25 min<br />
              Playas de Rolecha, Chauchil y Lleguimán, 15 km, 20 min<br />
              Las cuevas de Poe en el sector de Lleguimán, 5 km, 8 min<br />
              Iglesia San Nicolás de Tolentino, una construcción de alerce que data del año 1890, 20 min.
            </Typography>
          </Box>

          {/* Información al Sur */}
          <Box sx={{ maxWidth: isMobile ? '90%' : '400px', mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Al Sur
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              Hornopirén 20 min<br />
              Cerro la Silla en el sector de Hualaihué Estero, 3 km, 5 min<br />
              Alerce más antiguo del mundo 20 min<br />
              Cascadas de Río Negro 25 min<br />
              Caleta e Isla el Manzano 30 min<br />
              Parque Nacional Hornopirén 20 min<br />
              Termas de Llancahué, 40 min<br />
              Termas de Pichicolo, 25 min<br />
              Termas de Cahuelmo, 2 hr.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
