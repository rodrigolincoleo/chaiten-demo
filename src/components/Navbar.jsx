import { AppBar, Toolbar, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

function Navbar({navBg}) {
  const [aNavBg,setANavBg]=useState();
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setANavBg(window.scrollY > window.innerHeight * 0.9 ? 'white' : `url(${navBg})`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: `url(${navBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <Toolbar>


        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Patagonia Verde
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 150, mr: 2 }}>
          <Select
            displayEmpty
            sx={{
              color: navBg === 'white' ? 'black' : 'white', // Cambia el color del texto según el fondo
              backgroundColor: 'transparent',  // Hace el fondo transparente
              borderBottom: 'none',  // Quita la línea inferior por defecto
              '&::before': { borderBottom: 'none !important' }, // Elimina la línea antes del focus
              '&::after': { borderBottom: 'none !important' },  // Elimina la línea después del focus
              '&:hover::before': { borderBottom: 'none !important' }, // Elimina la línea al pasar el mouse
              '&:focus::before': { borderBottom: 'none !important' }, // Elimina la línea en el foco
              '& .MuiSelect-icon': {
                color: navBg === 'white' ? 'black' : 'white',  // Cambia el color del icono del desplegable
              },
            }}
          >

            <MenuItem><Button color="inherit" component={Link} to="caracteristicas" smooth={true} duration={1000} sx={{ color: 'black' }}>Características</Button></MenuItem>
            <MenuItem><Button color="inherit" component={Link} to="flora" smooth={true} duration={1000} sx={{ color: 'black' }}>Flora y fauna</Button></MenuItem>
            <MenuItem><Button color="inherit" component={Link} to="actividades" smooth={true} duration={1000} sx={{ color: 'black' }}>Actividades</Button></MenuItem>
            <MenuItem><Button color="inherit" component={Link} to="about" smooth={true} duration={1000} sx={{ color: 'black' }} value='' >El Proyecto</Button></MenuItem>
            
          </Select>
        </FormControl>
        <Button color="inherit" component={Link} to="masterplan" smooth={true} duration={1000} sx={{ color: navBg === 'white' ? 'black' : 'white' }}>Masterplan</Button>
        <Button color="inherit" component={Link} to="fotos" smooth={true} duration={1000} sx={{ color: navBg === 'white' ? 'black' : 'white' }}>Fotos</Button>
        <Button color="inherit" component={Link} to="video" smooth={true} duration={1000} sx={{ color: navBg === 'white' ? 'black' : 'white' }}>Videos</Button>
        <Button color="inherit" component={Link} to="ubicacion" smooth={true} duration={1000} sx={{ color: navBg === 'white' ? 'black' : 'white' }}>Ubicación</Button>
        <Button color="inherit" component={Link} to="contact" smooth={true} duration={500} sx={{ color: navBg === 'white' ? 'black' : 'white' }}>Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);
