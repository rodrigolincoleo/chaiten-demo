import { Grid, Typography, Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

// Coordenadas de ubicación (puedes ajustarlas según tu proyecto)
const mapCenter = {
    lat: -41.9692,  // Latitud de referencia (Hornopirén, Chile)
    lng: -72.4691,  // Longitud de referencia
};

// API Key de Google Maps (sustituye con tu propia clave)
const GOOGLE_MAPS_API_KEY = '';

export default function Ubicacion() {
    return (
        <Box
            id="ubicacion"
            sx={{ 
                p: 4, 
                display:'block',
                alignItems:"center",
                justifyContent:'center',

            }}>
            <Grid container spacing={2}   >

                {/* Primera columna - Mapa de Google */}
                <Grid item xs={12} md={4}>
                    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
             
                    </LoadScript>
                </Grid>

                {/* Segunda columna - Texto dividido en dos filas */}
                <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" >

                    {/* Primera fila - Al Norte */}
                    <Box sx={{ width: 400 }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Al Norte
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
                            Puerto Montt 65 km, 60 min.<br />
                            Contao 25 km, 25 min<br />
                            Playas de Rolecha, Chauchil y Lleguimán, 15 km, 20 min<br />
                            Las cuevas de Poe en el sector de Lleguimán, 5 km, 8 min<br />
                            Iglesia San Nicolás de Tolentino, una construcción de alerce que data del año 1890, 20 min.
                        </Typography>
                    </Box>

                    {/* Segunda fila - Al Sur */}
                    <Box sx={{ width: 400 }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop:5}}>
                            Al Sur
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
                            Hornopirén 20 min<br />
                            Cerro la Silla en el sector de Hualaihué Estero, 3 km, 5 min<br />
                            Alerce más antiguo del mundo 20 min<br />
                            Cascadas de Río Negro 25 min<br />
                            Caleta e Isla el Manzano 30 min<br />
                            Parque Nacional Hornopirén 20 min<br />
                            Termas de Llancahué, 40 min<br />
                            Termas de Pichicolo, 25 min<br />
                            Termas de Cahuelmo, 2 hr.
                        </Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
}
