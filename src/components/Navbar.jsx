import { AppBar, Toolbar, Typography, Button, FormControl, Select, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

function Navbar({ navBg }) {
  const [aNavBg, setANavBg] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'none',
      mx: 1,
      color: aNavBg === 'white' ? 'black' : 'white',
    },
  };

  const menuItemStyles = {
    backgroundColor: 'transparent',
    '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.3)' },
    '&:focus': { backgroundColor: 'rgba(128, 128, 128, 0.3)' },
    '&.Mui-selected': { backgroundColor: 'rgba(128, 128, 128, 0.3) !important' },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: aNavBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo y Título */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://ik.imagekit.io/k244xcphl/assets/Logo%20Patagonia%20verde.png?updatedAt=1737999642871"
            alt="Logo Patagonia Verde"
            sx={{ width: 40, height: 40, mr: 1 }}
          />
          <Typography
            variant="h6"
            sx={{
              color: aNavBg === 'white' ? 'black' : 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              letterSpacing: '0.1rem',
            }}
          >
            Patagonia Verde
          </Typography>
        </Box>

        {/* Menú Desktop / Mobile */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon sx={{ color: aNavBg === 'white' ? 'black' : 'white' }} />
            </IconButton>

            {/* Drawer para móviles */}
            <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
              <List>
                {['caracteristicas', 'flora', 'actividades', 'about', 'masterplan', 'fotos', 'video', 'ubicacion', 'contact'].map((section) => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton component={Link} to={section} smooth duration={1000} onClick={() => setMobileOpen(false)}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl variant="standard" sx={{ minWidth: 150, mr: 2 }}>
              <Select displayEmpty sx={{ backgroundColor: 'transparent' }}>
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="caracteristicas">Características</Button></MenuItem>
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="flora">Flora y fauna</Button></MenuItem>
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="actividades">Actividades</Button></MenuItem>
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="about">El Proyecto</Button></MenuItem>
              </Select>
            </FormControl>
            <Button {...buttonProps} to="masterplan">Masterplan</Button>
            <Button {...buttonProps} to="fotos">Fotos</Button>
            <Button {...buttonProps} to="video">Videos</Button>
            <Button {...buttonProps} to="ubicacion">Ubicación</Button>
            <Button {...buttonProps} to="contact">Contacto</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);
