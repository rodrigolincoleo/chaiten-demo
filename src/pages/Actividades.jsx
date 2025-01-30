import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

// Lista de iconos locales
const icons = [
  { name: 'Rafting', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/bote.png?updatedAt=1737734981603' },
  { name: 'Cabalgatas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/caballo.png?updatedAt=1737734981533' },
  { name: 'Pesca Deportiva', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/cana-de-pescar.png?updatedAt=1737734981645' },
  { name: 'Termas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/jacuzzi.png?updatedAt=1737734981693' },
  { name: 'Kayak', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/kayak.png?updatedAt=1737734981524' },
  { name: 'Montañismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/montana-hallasan.png?updatedAt=1737734981592' },
  { name: 'Birdwatching', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/pajaro.png?updatedAt=1737734981841' },
  { name: 'Senderismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/senderismo.png?updatedAt=1737734984321' },
  { name: 'Geoturismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/turismo.png?updatedAt=1737734984321' },
];

export default function IconGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
    id="actividades"
      sx={{
        minHeight: '100vh',
        background: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: isMobile ? 2 : 6, // Padding reducido en móviles
      }}
    >
      <Box sx={{ maxWidth: isMobile ? '90%' : '60%', textAlign: 'center' }}>
        <Grid container spacing={4} justifyContent="center">
          {icons.map((icon, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={icon.src} alt={icon.name} style={{ width: '80px', height: '80px' }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {icon.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
