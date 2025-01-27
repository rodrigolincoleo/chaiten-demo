import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function About() {
  return (
    <Box
      id='about'
      sx={{
        position: 'relative',  // Permite posicionar elementos dentro
        minHeight: '100vh',    // Ocupa toda la pantalla
        backgroundColor:"#f4f4f4",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" gutterBottom>¿Que es Patagonia Verde?</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique convallis ante. Nunc tempor augue imperdiet aliquam ultrices. Duis vitae enim auctor, viverra ex in, porttitor sapien. Quisque id odio ipsum. Integer vitae consectetur erat. Aenean fermentum, ex et tempor efficitur, leo erat euismod lorem, ac tincidunt velit nibh a nibh. In rutrum odio ut tellus pellentesque, non hendrerit nisl suscipit. Pellentesque nec suscipit mi, quis euismod leo. Sed nec dolor a libero dignissim dapibus et sed risus. Nulla vel diam ut elit fringilla suscipit.

          Nunc eu pellentesque leo. Nulla vel ullamcorper ipsum, ut lacinia diam. Nulla id convallis nunc. Sed interdum sodales dui sed venenatis. Aliquam consequat feugiat elit, in dignissim quam. Fusce sodales in turpis a dapibus. Proin laoreet neque sem, ut suscipit nunc commodo accumsan. Vestibulum odio enim, luctus a auctor ac, interdum blandit felis. In hac habitasse platea dictumst.
        </Typography>
      </Container>
    </Box>
  );
}
