import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TwoColumnLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        marginY: "5%",
        marginX: isMobile ? "5%" : "20%", // Márgenes reducidos en móviles
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Primera columna con la imagen */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/25.jpg?updatedAt=1737734993495"
            alt="Paisaje"
            style={{
              width: isMobile ? "100%" : "80%",
              height: isMobile ? "auto" : "80%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Grid>

        {/* Segunda columna con los textos */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Flora */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#2e7d32",
              marginTop: isMobile ? 2 : 10,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Flora
          </Typography>
          <Typography variant="body1" sx={{ textAlign: isMobile ? "center" : "justify", color: "#333" }}>
            En cuanto a la biodiversidad del lugar existe un bosque donde uno de los íconos es el alerce, árbol que puede
            vivir hasta 4.000 años y alcanzar más de 50 metros de altura. Abundan también árboles como lenga, coigüe, ñirre,
            canelo, mañío, luma, tepa, ulmo, ciruelillo, entre otras especies. La presencia de flores como los Copihues (flor
            nacional) es característica de sus bosques, representan las especies que queremos conservar con este proyecto.
          </Typography>

          {/* Fauna */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#0277bd",
              marginTop: isMobile ? 2 : 5,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Fauna
          </Typography>
          <Typography variant="body1" sx={{ textAlign: isMobile ? "center" : "justify", color: "#333" }}>
            En el mar es común avistar aves acuáticas como, garzas, cisnes de cuello negro y martín pescador, además de
            toninas, cormoranes, pingüinos. En el bosque se pueden ver aves como carpinteros negros, chucao, hued-hued y
            rayadito, y hábitat de mamíferos más difíciles de ver como el pudú, zorro, gato colocolo, guiña, puma entre
            otros.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnLayout;
