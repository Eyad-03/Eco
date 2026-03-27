import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Rating, 
  Button, 
  IconButton, 
  Paper, 
  Divider,
  Stack
} from '@mui/material';

import { Grid } from '@mui/material';
import Footer from './Shared/Footer';
import NavBar from './Shared/NavBar';
import cc from '../image/cc.webp'

// Mock data for the flavors
const flavors = [
  { id: 'orange', label: 'Orange', img: 'https://via.placeholder.com/40/FFA500' },
  { id: 'blueberry', label: 'Blueberry', img: 'https://via.placeholder.com/40/0000FF' },
  { id: 'lime', label: 'Lime', img: 'https://via.placeholder.com/40/00FF00' },
];

const DetailPage = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('orange');

  return (
    <>
   <NavBar/>
    <Box sx={{ flexGrow: 1, p: 4, maxWidth: 1200, margin: 'auto auto 90px auto' }}>
      <Grid container spacing={6} alignItems="center">
        
        {/* Left Side: Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              bgcolor: '#85cbf5', // Light beige background from image
              borderRadius: 4, 
              display: 'flex', 
              justifyContent: 'center', 
              p: 8 
            }}
          >
            <Box 
              component="img"
              src={cc} // Replace with your actual bottle image
              alt="Red Seal Vitamin C"
              sx={{ maxHeight: 400, width: 'auto' }}
            />
          </Paper>
        </Grid>

        {/* Right Side: Product Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#1A2E44', fontFamily: 'serif' }}>
              Vitamin C-100ML-Original
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating value={4.5} precision={0.5} readOnly size="small" />
            </Stack>

            <Typography variant="h4" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
              $40.99
            </Typography>

            <Divider />

            <Box>
              <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#555' }}>
                Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, 
                including the maintenance of healthy skin, blood vessels, bones, and cartilage. 
                It also helps with wound healing and acts as an antioxidant. 
              </Typography>
            </Box>

            <Divider />


            {/* Action Button (Optional, not in image but standard) */}
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: '#1A2E44', 
                color: 'white', 
                py: 1.5, 
                borderRadius: 2,
                '&:hover': { bgcolor: '#2c4a6b' } 
              }}
            >
              Add to Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
     </>
  );
};

export default DetailPage;