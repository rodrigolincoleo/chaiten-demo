import { AppBar, Toolbar, Typography, Button, FormControl, Select, MenuItem, Box } from '@mui/material';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

function Navbar({ navBg }) {
  const [aNavBg, setANavBg] = useState();
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setANavBg(window.scrollY > window.innerHeight * 0.9 ? 'white' : `url(${navBg})`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonProps = {
    component: Link,
    smooth: true,
    duration: 1000,
    sx: {
      fontSize: '1rem',  // Tamaño de letra del botón
      fontWeight: 'bold',
      textTransform: 'none',  // Para evitar mayúsculas automáticas
      mx: 1,  // Margen horizontal para espaciar botones
      color: (theme) => (aNavBg === 'white' ? 'black' : 'white'),
    },
  };
  const buttonProps2 = {
    component: Link,
    smooth: true,
    duration: 1000,
    sx: {
      fontSize: '1rem',  // Tamaño de letra del botón
      fontWeight: 'bold',
      textTransform: 'none',  // Para evitar mayúsculas automáticas
      mx: 1,  // Margen horizontal para espaciar botones
      color: (theme) => (aNavBg === 'white' ? 'black' : 'white'),
    },
  };
  const menuItemStyles = {
    backgroundColor: 'transparent',  // Fondo transparente por defecto
    '&:hover': {
      backgroundColor: 'rgba(128, 128, 128, 0.3)',  // Gris transparente al pasar el mouse
    },
    '&:focus': {
      backgroundColor: 'rgba(128, 128, 128, 0.3)',  // Gris transparente cuando está en foco
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(128, 128, 128, 0.3) !important',  // Gris transparente si está seleccionado
    },
  };
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: `url(${navBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 0.3s ease-in-out',
        display: 'flex', 
        justifyItems: 'center',
        alignItems: 'center'
      }}
    >
      <Toolbar sx={{ marginX: '30%', display: 'flex', justifyItems: 'center', }}>
        <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
          <Box
            component="img"
            src="https://ik.imagekit.io/k244xcphl/assets/Logo%20Patagonia%20verde.png?updatedAt=1737999642871"
            alt="Logo Patagonia Verde"
            sx={{
              width: 40,  // Ajusta el tamaño del logo según sea necesario
              height: 40,
              marginRight: 1,  // Espacio entre el logo y el texto
            }}
          />

          <Typography variant="h6"
            sx={{
              flexGrow: 1,
              color: (theme) => (aNavBg === 'white' ? 'black' : 'white'),
              fontSize: '1rem',  // Ajusta el tamaño de la fuente
              fontWeight: 'bold',  // Ajusta el grosor de la fuente
              letterSpacing: '0.1rem', // Ajusta el espaciado entre letras
            }}>
            Patagonia Verde
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyItems: 'center' }}>
          <FormControl variant="standard" sx={{ minWidth: 150, mr: 2 }}>
            <Select
              displayEmpty
              sx={{
                backgroundColor: 'transparent', // Fondo inicial transparente
                transition: 'background-color 0.3s ease-in-out', // Transición suave

                // Elimina la línea inferior predeterminada en todas las interacciones
                '&::before': { borderBottom: 'none !important' },
                '&::after': { borderBottom: 'none !important' },
                '&:hover::before': { borderBottom: 'none !important' },
                '&:focus::before': { borderBottom: 'none !important' },

                // Aplica fondo gris claro al pasar el mouse o al estar enfocado
                '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)' }, // Gris con transparencia en hover
                '&:focus': { backgroundColor: 'rgba(128, 128, 128, 0.3)' }, // Gris más oscuro en focus

                // Estiliza el icono del desplegable basado en el fondo
                '& .MuiSelect-icon': {
                  color: navBg === 'white' ? 'black' : 'white',
                },
              }}
            >

              <MenuItem sx={menuItemStyles}><Button {...buttonProps2} to="caracteristicas">Características</Button></MenuItem>
              <MenuItem sx={menuItemStyles}><Button {...buttonProps2} to="flora">Flora y fauna</Button></MenuItem>
              <MenuItem sx={menuItemStyles}><Button {...buttonProps2} to="actividades">Actividades</Button></MenuItem>
              <MenuItem sx={menuItemStyles}><Button {...buttonProps2} to="about" >El Proyecto</Button></MenuItem>

            </Select>
          </FormControl>
          <Button color="inherit" {...buttonProps} to="masterplan" {...buttonProps} >Masterplan</Button>
          <Button color="inherit" {...buttonProps} to="fotos"  {...buttonProps} >Fotos</Button>
          <Button color="inherit" {...buttonProps} to="video" >Videos</Button>
          <Button color="inherit" {...buttonProps} to="ubicacion" >Ubicación</Button>
          <Button color="inherit" {...buttonProps} to="contact" >Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>


  );
}

export default React.memo(Navbar);
