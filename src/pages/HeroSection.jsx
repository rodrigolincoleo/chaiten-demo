import { Box, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

export default function HeroSection({ setNavbarBg }) {


    // Configuración del carrusel
    const settings = {
        dots: true,               // Muestra indicadores
        infinite: true,           // Desplazamiento infinito
        speed: 1000,              // Velocidad de transición
        slidesToShow: 1,          // Mostrar una imagen a la vez
        slidesToScroll: 1,        // Desplazar una imagen a la vez
        autoplay: true,           // Reproducción automática
        autoplaySpeed: 5000,      // Tiempo entre transiciones
        arrows: true,             // Flechas de navegación
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
            text: "La Patagonia Verde debe su nombre a la abundancia de bosques nativos que cubren sus colinas y valles. Estos bosques, formados por especies como el alerce, el coigüe y el arrayán, crean un mosaico de tonos verdes que acompaña a los ríos y lagos cristalinos que serpentean por la región. Es un lugar donde la biodiversidad florece y donde cada rincón guarda un secreto por descubrir."
        },
        {
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/4.jpg?updatedAt=1737735966234',
            title: "Ríos, lagos y costas de ensueño",
            text: "El agua es protagonista en la Patagonia Verde. Ríos caudalosos como el Yelcho y lagos de aguas tranquilas como el Lago Blanco invitan a actividades como la pesca, el kayak y el simple deleite de contemplar su serenidad. Además, las costas de la región ofrecen vistas espectaculares del océano Pacífico, donde playas poco exploradas y acantilados imponentes completan el paisaje."
        },
        {
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/12.jpg?updatedAt=1737734993378',
            title: "Vida rural y tradiciones",
            text: "La vida en la Patagonia Verde conserva una fuerte conexión con sus tradiciones rurales. Las pequeñas localidades de la zona son conocidas por su hospitalidad y calidez. Aquí, los visitantes pueden disfrutar de productos locales como quesos, mermeladas y platos típicos preparados con ingredientes frescos de la región."
        },{
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/14.jpg?updatedAt=1737734993189',
            title: "Senderos y aventura",
            text: "La región también es un destino ideal para los amantes del trekking y la exploración. Senderos que atraviesan bosques y conducen a miradores naturales ofrecen vistas impresionantes de la Patagonia Verde. Cada paso en estos caminos revela una nueva perspectiva de este entorno prístino y vibrante."
        },{
            image: 'https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/21.jpg?updatedAt=1737734992991',
            title: "Un destino para desconectarse y reconectar",
            text: "La Patagonia Verde cerca de Chaitén es mucho más que un lugar de visita: es una experiencia que invita a desconectarse del ritmo acelerado de la vida moderna y a reconectar con la naturaleza. Ya sea que busques aventura o tranquilidad, este rincón del mundo tiene algo especial para ofrecer."
        },
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
                            height: '90vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',  
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed',
                            display: 'flex',
                            alignContent: 'center',
                        }}
                    >
                        <Box sx={{
                            p: 4, borderRadius: 2,
                            maxWidth: '600px',
                            display: 'block',
                            justifySelf: 'center',
                        }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>{slide.title}</Typography>
                            <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>{slide.text}</Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
