import { Typography, Box } from '@mui/material';
import React from 'react';


export default function Links() {
    return (
        <Box
id='links'
            sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4' }}>
            <Box
                
                direction="column"
                justifySelf='center'>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Links
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>
                    Hornopirén 20 min.<br />
                    Cerro la Silla en el sector de Hualaihué Estero, 3 km, 5 min.<br />
                    Alerce más antiguo del mundo 20 min.<br />
                    Cascadas de Río Negro 25 min.<br />
                    Caleta e Isla el Manzano 30 min.<br />
                    Parque Nacional Hornopirén 20 min.<br />
                    Termas de Llancahué, 40 min.<br />
                    Termas de Pichicolo, 25 min.<br />
                    Termas de Cahuelmo, 2 hr.
                </Typography>
            </Box>
        </Box >
    );
}
