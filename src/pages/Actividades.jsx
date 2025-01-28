import { Box } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
// Lista de iconos locales
const icons = [
  { name: 'Rafting', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/bote.png?updatedAt=1737734981603' },
  { name: 'Cabalgatas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/caballo.png?updatedAt=1737734981533' },
  { name: 'Pesca Deportiva', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/cana-de-pescar.png?updatedAt=1737734981645' },
  { name: 'Termas', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/jacuzzi.png?updatedAt=1737734981693' },
  { name: 'Kayak', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/kayak.png?updatedAt=1737734981524' },
  { name: 'Montañismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/montana-hallasan.png?updatedAt=1737734981592' },
  { name: 'Birdwatching ', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/pajaro.png?updatedAt=1737734981841' },
  { name: 'Senderismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/senderismo.png?updatedAt=1737734984321' },
  { name: 'Geoturismo', src: 'https://ik.imagekit.io/k244xcphl/assets/icons/turismo.png?updatedAt=1737734984321' },
];

export default function IconGrid() {
  return (
    <Box sx={{ height: '100vh', 
    background: '#f4f4f4', 
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    }}>
      <Box
      sx=
      {{
        marginX:'30%'
      }}>
        <Row >
          {icons.map((icon, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="text-center ">
              <img src={icon.src} alt={icon.name} style={{ width: '10vh', height: '10vh' }} />
              <h5>{icon.name}</h5>
            </Col>
          ))}
        </Row>
      </Box>
    </Box>
  );
}
