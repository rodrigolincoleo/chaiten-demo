import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {
  const [from_name, setFrom_name] = useState('');
  const [from_email, setFrom_email] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChangeName = (e) => {
    setFrom_name(e.target.value);
  };

  const handleChangeMail = (e) => {
    setFrom_email(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_fvn4dus',
      'template_hcc7xab',
      {
        from_name: from_name,
        from_email: from_email,
        to_name: 'Mail Admin',
        message: message,
      },
      'gvsKO-UwjNIWE5sl6'
    ).then(
      (response) => {
        alert('Correo enviado correctamente.');
        setFrom_name('');
        setFrom_email('');
        setMessage('');
      },
      (error) => {
        alert('Error al enviar el correo.', error.text);
      }
    );
  };

  return (
    <Box
      id="contact"
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1000 }}
      >
        {/* Columna de Contacto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contáctanos
          </Typography>
          <Button
            variant="outlined"
            color="success"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/56983780319"
            target="_blank"
            sx={{ mt: 2, mb: 1 }}
          >
            Contáctanos por WhatsApp
          </Button>
          <Typography sx={{ mb: 2 }}>
            +56 9 8378 0319
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<MailOutlineIcon />}
            href="mailto:ventas@parquepatagonia.cl"
            target="_blank"
            sx={{ mb: 1 }}
          >
            Escríbenos
          </Button>
          <Typography>
            ventas@parquepatagonia.cl
          </Typography>
        </Grid>
        {/* Columna de Información de Ventas */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Información de ventas
          </Typography>
          
          <Box
            component="form"
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            <TextField
              label="Tu Nombre"
              name="name"
              value={from_name}
              onChange={handleChangeName}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Tu Correo"
              name="email"
              value={from_email}
              onChange={handleChangeMail}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              value={message}
              onChange={handleChangeMessage}
              variant="outlined"
              fullWidth
              required
            />
            <Button type="submit" variant="contained">
              Enviar Correo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
