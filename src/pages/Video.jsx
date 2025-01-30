import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';

export default function VideoSection() {
  const [loadVideo, setLoadVideo] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setLoadVideo(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      id="video"
      sx={{
        textAlign: 'center',
        py: 5,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: isMobile ? 2 : 0, // Reduce el padding en móviles
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Video
        </Typography>
        <Box
          sx={{
            position: 'relative',
            paddingBottom: '56.25%', // Proporción 16:9
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            background: '#000',
            borderRadius: 2,
          }}
        >
          {loadVideo && (
            <iframe
              width="100%"
              height="100%"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              src="https://www.youtube.com/embed/cI3UlIBLjfA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Container>
    </Box>
  );
}
