import React, { useState } from "react";
import { Box, Grid, Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";

const images = [
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/36.jpg?updatedAt=1737735003141",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/40.jpg?updatedAt=1737735806473",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/28.jpg?updatedAt=1737734993668",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/29.jpg?updatedAt=1737734993871",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/30.jpg?updatedAt=1737735806006",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/32.jpg?updatedAt=1737734994528",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/34.jpg?updatedAt=1737735000681",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/35.jpg?updatedAt=1737735003140",
  "https://ik.imagekit.io/k244xcphl/assets/images/Fotos%20Chait%C3%A9n/39.jpg?updatedAt=1737735000301",
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ background: "#f4f4f4", py: 5, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: isMobile ? "90%" : "60%" }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
                onClick={() => setSelectedImage(image)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Modal a pantalla completa */}
        <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)} maxWidth="md">
          <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                borderRadius: "8px",
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ImageGrid;
