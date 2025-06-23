import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TwoColumnLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id='flora'
      sx={{
        marginY: "5%",
        marginX: isMobile ? "5%" : "20%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Primera columna con la imagen */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {
              xs: "none", // Oculta en móvil
              md: "flex", // Muestra en desktop/tablet
            },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/25.jpg?updatedAt=1737734993495"
            alt="Paisaje"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
          <img
            src="https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/35VERT.jpg?updatedAt=1750698582018"
            alt="Paisaje 2"
            style={{
              width: "80%",
              height: "80%",
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
          <Typography variant="body1" sx={{ textAlign: isMobile ? "center" : "justify", color: "#333", mb: 3 }}>
            La vegetación es principalmente bosque templado lluvioso valdiviano, caracterizado por su exuberancia y especies endémicas.<br /><br />
            <b>Árboles y plantas destacadas:</b>
            <ul>
              <li><b>Alerce</b> (<i>Fitzroya cupressoides</i>): especie milenaria en peligro de extinción, muy emblemática de la zona.</li>
              <li><b>Coigüe</b> (<i>Nothofagus dombeyi</i>): uno de los árboles dominantes del bosque.</li>
              <li><b>Tepa, tineo y canelo</b>: especies frecuentes en los sectores más húmedos.</li>
              <li><b>Nalca</b> (<i>Gunnera tinctoria</i>): planta de hojas enormes típica de la zona sur de Chile.</li>
              <li><b>Helechos y musgos</b>: abundantes debido a la humedad constante.</li>
            </ul>
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
            El aislamiento y conservación del entorno permiten la existencia de especies nativas y algunas endémicas.<br /><br />
            <b>Mamíferos:</b>
            <ul>
              <li><b>Puma</b> (<i>Puma concolor</i>): difícil de ver, pero presente en áreas protegidas.</li>
              <li><b>Zorro chilote</b> (<i>Lycalopex fulvipes</i>): especie endémica de la zona sur.</li>
              <li><b>Monito del monte</b> (<i>Dromiciops gliroides</i>): marsupial único en el mundo, considerado un “fósil viviente”.</li>
              <li><b>Coipo</b> y <b>guiña</b> (gato silvestre): también presentes en los bosques.</li>
            </ul>
            <b>Aves:</b>
            <ul>
              <li><b>Cóndor andino</b>: observable en las zonas cordilleranas.</li>
              <li><b>Chucao</b> y <b>huet-huet</b>: aves terrestres endémicas del bosque valdiviano.</li>
              <li><b>Martín pescador</b>, <b>cisne de cuello negro</b> y <b>garzas</b>: en ríos y lagunas.</li>
              <li><b>Carpintero negro</b> (<i>Campephilus magellanicus</i>): ave icónica de los bosques del sur.</li>
            </ul>
            <b>Reptiles y anfibios:</b>
            <ul>
              <li><b>Ranita de Darwin</b> (<i>Rhinoderma darwinii</i>): especie en peligro de extinción, muy particular por su sistema de incubación.</li>
              <li>Lagartijas del género <i>Liolaemus</i>.</li>
            </ul>
            <b>Peces y fauna marina (en la costa cercana):</b>
            <ul>
              <li>Delfines, toninas, nutrias de mar.</li>
              <li>Salmónidos (introducidos) y peces nativos como el puye y la trucha chilena.</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnLayout;
