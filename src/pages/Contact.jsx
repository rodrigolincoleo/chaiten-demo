import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [from_name, setFrom_name] = useState();
  const [from_email, setFrom_email] = useState();
  const [message, setMessage] = useState();


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
      'service_fvn4dus',  // Reemplaza con tu Service ID de EmailJS
      'template_hcc7xab', // Reemplaza con tu Template ID de EmailJS
      {
        from_name: from_name,
        from_email: from_email,
        to_name: 'Mail Admin',
        message: message,

      },
      'gvsKO-UwjNIWE5sl6'   // Reemplaza con tu Public Key de EmailJS
    ).then(
      (response) => {
        alert('Correo enviado correctamente.');
        setFrom_name('');
        setFrom_email('');
        setMessage(''); // Limpiar formulario
      },
      (error) => {
        alert('Error al enviar el correo.', error.text);
      }
    );
  };

  return (
    <Box
      id="contact"
      sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,  // Espacio entre los elementos del formulario
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
    </Box>
  );
}
