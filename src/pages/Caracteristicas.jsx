import { Grid, Card, CardMedia, Typography, Box, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const features = [
    { icon: 'https://ik.imagekit.io/k244xcphl/assets/icons/proteccion.png?updatedAt=1737734982065', text: 'Acceso controlado - cámaras de seguridad' },
    { icon: 'https://ik.imagekit.io/k244xcphl/assets/icons/lloviendo.png?updatedAt=1737734981689', text: 'Emplazada en una zona de fuentes hídricas de alta pureza, entrada al parque nacional Pumalin' },
    { icon: 'https://ik.imagekit.io/k244xcphl/assets/icons/parque.png?updatedAt=1737734981907', text: 'Disfruta de bosques, aguas termales,  ríos, flora y fauna características del sur de Chile.' },
    { icon: 'https://ik.imagekit.io/k244xcphl/assets/icons/velero.png?updatedAt=1737734984114', text: 'Conectividad con senderos de trekking, miradores de avistamiento de aves, playas y puertos de la zona.' },
];

export default function Caracteristicas() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id="caracteristicas"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                position: 'relative',
                backgroundImage: `url(https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/4.jpg?updatedAt=1737735966234)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1,
                },
            }}
        >
            <Box
                sx={{
                    maxWidth: isMobile ? '90%' : '60%',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                    py: 4,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', mb: 3 }}>
                    Características
                </Typography>

                <Grid container spacing={2}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card
                                sx={{
                                    height: 200,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    p: 2,
                                    position: 'relative',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={feature.icon}
                                    alt={feature.text}
                                    sx={{
                                        height: '80px',
                                        width: '80px',
                                        objectFit: 'contain',
                                        mb: 1,
                                        filter: 'invert(100%) brightness(100%)',
                                    }}
                                />
                                <Typography variant="h6" sx={{ color: 'white' }}>
                                    {feature.text}
                                </Typography>

                                {/* Líneas separadoras visibles solo en pantallas grandes */}
                                {!isMobile && (index === 0 || index === 2) && (
                                    <Divider
                                        orientation="vertical"
                                        sx={{
                                            position: 'absolute',
                                            right: 0,
                                            top: '10%',
                                            height: '80%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                            width: '2px',
                                        }}
                                    />
                                )}
                                {!isMobile && index < 2 && (
                                    <Divider
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '10%',
                                            width: '80%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                            height: '2px',
                                        }}
                                    />
                                )}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
