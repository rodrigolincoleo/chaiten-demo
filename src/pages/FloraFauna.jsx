import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
const imageURL = "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/25.jpg?updatedAt=1737734993495"

export default function Flora() {
  return (

    <Box sx={{
      height: '100vh',
      marginTop: '5%',
      
    }}>
      <Box sx=
      {{
        marginX:'15%',
        display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

      }}>
        <Row id='flora' className='d-flex justify-content-center align-item-center '>

          {/* Primera columna - Imagen */}
          <Col item xxl={5} className='d-flex justify-content-center align-item-center '>

            <Box
              component="img"
              src={imageURL}
              alt="Flora del lugar"
              sx={{

                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(80%)',  // Alternativa rápida para oscurecer
              }}
            />

          </Col>
          <Col xxl={2} style={{ width: "10%", height: "100" }}></Col> {/* Gutter porcentual */}
          {/* Segunda columna - Texto dividido en dos filas */}
          <Col xxl={5} className='d-block justify-content-center align-item-center'>

            {/* Primera fila - Flora */}
            <Box sx={{ width: 400, }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32', marginTop: 10 }}>
                Flora
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333', }}>
                En cuanto a la biodiversidad del lugar existe un bosque donde uno de los íconos es el alerce,
                árbol que puede vivir hasta 4.000 años y alcanzar más de 50 metros de altura. Abundan también árboles como
                lenga, coigüe, ñirre, canelo, mañío, luma, tepa, ulmo, ciruelillo, entre otras especies. La presencia de
                flores como los Copihues (flor nacional) es característica de sus bosques, representan las especies que
                queremos conservar con este proyecto.
              </Typography>
            </Box>

            {/* Segunda fila - Fauna */}
            <Box sx={{ width: 400 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#0277bd', marginTop: 2, }}>
                Fauna
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
                En el mar es común avistar aves acuáticas como, garzas, cisnes de cuello negro y martín pescador,
                además de toninas, cormoranes, pingüinos. En el bosque se pueden ver aves como carpinteros negros, chucao,
                hued-hued y rayadito, y hábitat de mamíferos más difíciles de ver como el pudú, zorro, gato colocolo, guiña,
                puma entre otros.
              </Typography>
            </Box>

          </Col>

        </Row>
      </Box>
    </Box>
  );
}
