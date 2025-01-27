
import React, { useState } from 'react';
import { Grid, Card, CardMedia, Dialog, Box, Fade } from '@mui/material';
const images = [
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/36.jpg?updatedAt=1737735003141',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/40.jpg?updatedAt=1737735806473',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/28.jpg?updatedAt=1737734993668',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/29.jpg?updatedAt=1737734993871',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/30.jpg?updatedAt=1737735806006',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/32.jpg?updatedAt=1737734994528',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/34.jpg?updatedAt=1737735000681',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/35.jpg?updatedAt=1737735003140',
  'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/39.jpg?updatedAt=1737735000301',
];

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Manejar la apertura de la imagen en el modal
  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  // Cerrar el modal
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Grid
        id='fotos'
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: 3 }}
      >
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: 250,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => handleOpen(img)}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Gallery image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal con transición de fade */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        transitionDuration={500}  // Duración de la animación
      >
        <Box sx={{ position: 'relative', padding: 2 }}>
          <CardMedia
            component="img"
            image={selectedImage}
            alt="Imagen ampliada"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
