import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';

export default function About() {
  return (
    <Box 
      id='about'
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 5,
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, marginX: '30%' }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2e7d32' }}
        >
          Descubre la Patagonia Verde cerca de Chaitén
        </Typography>

        <Typography 
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'center', color: '#4f4f4f', mb: 4 }}
        >
          En el corazón del sur de Chile, la Patagonia Verde se despliega como un rincón de naturaleza pura, 
          cautivando a quienes la visitan con su belleza inigualable. Ubicada en las cercanías de Chaitén, 
          esta región es un verdadero paraíso para los amantes de los paisajes únicos y la tranquilidad.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', color: '#2e7d32' }}
            >
              Naturaleza en su estado más puro
            </Typography>
            <Typography variant="body1" sx={{ color: '#4f4f4f' }}>
              La Patagonia Verde debe su nombre a la abundancia de bosques nativos que cubren sus colinas y valles. 
              Estos bosques, formados por especies como el alerce, el coigüe y el arrayán, crean un mosaico de tonos verdes 
              que acompaña a los ríos y lagos cristalinos que serpentean por la región.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', color: '#2e7d32' }}
            >
              Ríos, lagos y costas de ensueño
            </Typography>
            <Typography variant="body1" sx={{ color: '#4f4f4f' }}>
              El agua es protagonista en la Patagonia Verde. Ríos caudalosos como el Yelcho y lagos de aguas tranquilas 
              como el Lago Blanco invitan a actividades como la pesca, el kayak y la contemplación de su serenidad.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', color: '#2e7d32' }}
            >
              Vida rural y tradiciones
            </Typography>
            <Typography variant="body1" sx={{ color: '#4f4f4f' }}>
              La vida en la Patagonia Verde conserva una fuerte conexión con sus tradiciones rurales. Las pequeñas localidades 
              de la zona son conocidas por su hospitalidad, con productos locales como quesos y mermeladas artesanales.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', color: '#2e7d32' }}
            >
              Senderos y aventura
            </Typography>
            <Typography variant="body1" sx={{ color: '#4f4f4f' }}>
              La región también es un destino ideal para los amantes del trekking. Senderos que atraviesan bosques conducen a 
              miradores naturales con vistas impresionantes de la Patagonia Verde.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', color: '#2e7d32', textAlign: 'center' }}
            >
              Un destino para desconectarse y reconectar
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#4f4f4f' }}>
              La Patagonia Verde cerca de Chaitén es más que un lugar de visita: es una experiencia que invita a desconectarse del 
              ritmo acelerado de la vida moderna y a reconectar con la naturaleza.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
