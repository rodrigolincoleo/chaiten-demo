import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const TwoColumnLayout = () => {
  return (
    <Box  sx=
      {{
        marginY:'5%',
        marginX:'20%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {/* Primera columna con la imagen */}
      <Grid item xs={12} md={6} sx={{ 
        display: 'flex',
        justifySelf: 'center',
        alignContent: 'center',}}>
        <img
          src="https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/25.jpg?updatedAt=1737734993495"
          alt="Paisaje"
          style={{ width: "80%", height: "80%", objectFit: "cover", borderRadius: "8px" }}
        />
      </Grid>

      {/* Segunda columna con los textos */}
      <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Flora */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#2e7d32", marginTop: 10 }}>
          Flora
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", color: "#333" }}>
          En cuanto a la biodiversidad del lugar existe un bosque donde uno de los íconos es el alerce, árbol que puede
          vivir hasta 4.000 años y alcanzar más de 50 metros de altura. Abundan también árboles como lenga, coigüe, ñirre,
          canelo, mañío, luma, tepa, ulmo, ciruelillo, entre otras especies. La presencia de flores como los Copihues (flor
          nacional) es característica de sus bosques, representan las especies que queremos conservar con este proyecto.
        </Typography>

        {/* Fauna */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0277bd", marginTop: 2 }}
        >
          Fauna
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", color: "#333" }}>
          En el mar es común avistar aves acuáticas como, garzas, cisnes de cuello negro y martín pescador, además de
          toninas, cormoranes, pingüinos. En el bosque se pueden ver aves como carpinteros negros, chucao, hued-hued y
          rayadito, y hábitat de mamíferos más difíciles de ver como el pudú, zorro, gato colocolo, guiña, puma entre
          otros.
        </Typography>
      </Grid>
    </Box>
  );
};

export default TwoColumnLayout;
