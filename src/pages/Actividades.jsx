import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
// Lista de iconos locales
const icons = [
  { name: 'Rafting', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/bote.png?updatedAt=1737734981603'},
  { name: 'Cabalgatas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/caballo.png?updatedAt=1737734981533' },
  { name: 'Pesca Deportiva', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/cana-de-pescar.png?updatedAt=1737734981645' },
  { name: 'Termas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/jacuzzi.png?updatedAt=1737734981693' },
  { name: 'Kayak', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/kayak.png?updatedAt=1737734981524' },
  { name: 'Montañismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/montana-hallasan.png?updatedAt=1737734981592'},
  { name: 'Birdwatching ', src:'https://ik.imagekit.io/k244xcphl/assets/icons/pajaro.png?updatedAt=1737734981841'},
  { name: 'Senderismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/senderismo.png?updatedAt=1737734984321'},
  { name: 'Geoturismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/turismo.png?updatedAt=1737734984321' },
];

export default function IconGrid() {
  return (
    <Box id="actividades" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f4f4' }} className=''>
    <Typography variant="h4" align="center" gutterBottom margin={4}>
      Panoramas
    </Typography>
    <Grid container justifyContent="center">
      {icons.map((icon, index) => (
        <Grid item xs={12} sm={4} md={4} key={index}>
          <Card
            sx={{
              height: 150,
              textAlign: 'center',
              p: 1,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
            }}
          >
            <CardMedia
              component="img"
              image={icon.src}
              alt={icon.name}
              sx={{
                height: '80px',
                width: '80px',
                margin: 'auto',
                objectFit: 'contain',
              }}
            />
            <Typography variant="h6" mt={1} sx={{ color: '#000' }}>
              {icon.name}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}
