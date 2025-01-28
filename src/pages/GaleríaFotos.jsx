import { Box } from "@mui/material";
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

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
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen ampliada

  // Función para abrir el modal con la imagen seleccionada
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{background:'#f4f4f4'}}>
      <Box sx={{ marginX: '30%' }}>
        <Container
          fluid
          style={{
            height: "100vh", // Altura completa de la pantalla
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row className="g-3">
            {images.map((image, index) => (
              <Col key={index} md={4} className="text-center">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleImageClick(image)}
                />
              </Col>
            ))}
          </Row>

          {/* Modal a pantalla completa */}
          {selectedImage && (
            <Modal show onHide={handleClose} fullscreen centered>
              <Modal.Body className="d-flex justify-content-center align-items-center">
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "8px",
                  }}
                />
              </Modal.Body>
            </Modal>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default ImageGrid;
