import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
const imageURL = "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/25.jpg?updatedAt=1737734993495"

export default function Flora() {
  return (
    <Box 
    id='flora'
    sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={2} alignItems="center">
        
        {/* Primera columna - Imagen */}
        <Grid item xs={12} md={6}>
        <Box
  sx={{
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 2,
    boxShadow: 3,
    overflow: 'hidden',
  }}
>
  <Box
    component="img"
    src={imageURL}
    alt="Flora del lugar"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(80%)',  // Alternativa rápida para oscurecer
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, // Coloca el filtro encima de la imagen
    }}
  />
</Box>
        </Grid>

        {/* Segunda columna - Texto dividido en dos filas */}
        <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center">
          
          {/* Primera fila - Flora */}
          <Box sx={{ width: 400 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32', marginTop:10 }}>
              Flora
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              En cuanto a la biodiversidad del lugar existe un bosque donde uno de los íconos es el alerce, 
              árbol que puede vivir hasta 4.000 años y alcanzar más de 50 metros de altura. Abundan también árboles como 
              lenga, coigüe, ñirre, canelo, mañío, luma, tepa, ulmo, ciruelillo, entre otras especies. La presencia de 
              flores como los Copihues (flor nacional) es característica de sus bosques, representan las especies que 
              queremos conservar con este proyecto.
            </Typography>
          </Box>

          {/* Segunda fila - Fauna */}
          <Box sx={{ width: 400 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#0277bd', marginTop:10 }}>
              Fauna
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
              En el mar es común avistar aves acuáticas como, garzas, cisnes de cuello negro y martín pescador, 
              además de toninas, cormoranes, pingüinos. En el bosque se pueden ver aves como carpinteros negros, chucao, 
              hued-hued y rayadito, y hábitat de mamíferos más difíciles de ver como el pudú, zorro, gato colocolo, guiña, 
              puma entre otros.
            </Typography>
          </Box>

        </Grid>

      </Grid>
    </Box>
  );
}
