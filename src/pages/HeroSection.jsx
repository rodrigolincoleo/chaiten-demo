import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

export default function HeroSection({ setNavbarBg }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setNavbarBg(slides[newIndex].image);
        }
    };

    // Contenidos del carrusel
    const slides = [
        {
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/1.jpg?updatedAt=1737734988247',
            title: "Descubre la Patagonia Verde cerca de Chaitén",
            text: "En el corazón del sur de Chile, la Patagonia Verde se despliega como un rincón de naturaleza pura, cautivando a quienes la visitan con su belleza inigualable. Ubicada en las cercanías de Chaitén, esta región es un verdadero paraíso para los amantes de los paisajes únicos y la tranquilidad."
        },
        {
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/7.jpg?updatedAt=1737735002161',
            title: "Naturaleza en su estado más puro",
            text: "La Patagonia Verde debe su nombre a la abundancia de bosques nativos que cubren sus colinas y valles..."
        },
        {
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/4.jpg?updatedAt=1737735966234',
            title: "Ríos, lagos y costas de ensueño",
            text: "El agua es protagonista en la Patagonia Verde. Ríos caudalosos como el Yelcho y lagos de aguas tranquilas como el Lago Blanco..."
        }
    ];

    return (
        <Box
            id="home"
            sx={{
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Slider {...settings} style={{ width: '100%', height: '100%' }}>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                            display: 'flex',
                            alignContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100vh',
                                borderRadius: 2,
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                
                                sx={{ fontWeight: 'bold', mb: 2 }}
                            >
                                {slide.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ whiteSpace: 'pre-line', 
                                    textAlign: 'center' ,
                                }}
                            >
                                {slide.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
