import React from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Box, Button, 
  Card, CardContent, CardMedia, Chip, IconButton, Avatar, Stack 
} from '@mui/material';
import { Grid } from '@mui/material';// Using Grid2 for the latest MUI standards
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

function HomePage ()  {
  // Mock Data
  const smartphones = [
    { id: 1, name: "Galaxy S22 Ultra", price: "₹32999", oldPrice: "₹74999", save: "₹32999", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Galaxy M13 (4GB | 64GB)", price: "₹10499", oldPrice: "₹14999", save: "₹4500", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Galaxy M33 (4GB | 64GB)", price: "₹16999", oldPrice: "₹24999", save: "₹8000", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Galaxy M53 (4GB | 64GB)", price: "₹31999", oldPrice: "₹40999", save: "₹9000", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Galaxy S22 Ultra", price: "₹67999", oldPrice: "₹85999", save: "₹18000", img: "https://via.placeholder.com/150" },
  ];

  const categories = ["Mobile", "Cosmetics", "Electronics", "Furniture", "Watches", "Decor", "Accessories"];

  return (
    <>
    <NavBar/>
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', pb: 5, marginBottom:"90px" }}>
      {/* 1. HERO BANNER */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ 
          position: 'relative', 
          bgcolor: '#1a237e', 
          borderRadius: 4, 
          height: 300, 
          display: 'flex', 
          alignItems: 'center', 
          px: 6,
          color: 'white',
          overflow: 'hidden'
        }}>
          <Box sx={{ zIndex: 2 }}>
            <Typography variant="h6">Best Deal Online on smart watches</Typography>
            <Typography variant="h2" fontWeight="bold">SMART WEARABLE.</Typography>
            <Typography variant="h5">UP TO 80% OFF</Typography>
          </Box>
          
          {/* Slider Arrows */}
          <IconButton sx={{ position: 'absolute', left: 10, color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}><ArrowBackIosIcon /></IconButton>
          <IconButton sx={{ position: 'absolute', right: 10, color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}><ArrowForwardIosIcon /></IconButton>
        </Box>
      </Container>

      {/* 2. SMARTPHONES SECTION */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#535353',borderBottom:"2px solid #008ecc",paddingBottom:"8px"}}>
            Grab the best deal on <span style={{ color: '#008ecc' }}>Smartphones</span>
          </Typography>
          
        </Stack>

        <Grid container spacing={2}>
          {smartphones.map((phone) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={phone.id}>
              <Card sx={{ borderRadius: 3, position: 'relative', textAlign: 'center', p: 1 }}>
                <Chip 
                  label="56% OFF" 
                  size="small" 
                  color="primary" 
                  sx={{ position: 'absolute', top: 10, right: 10, borderRadius: 1 }} 
                />
                <CardMedia
                  component="img"
                  height="140"
                  image={phone.img}
                  sx={{ objectFit: 'contain', mt: 2 }}
                />
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography variant="caption" fontWeight="bold" noWrap display="block">{phone.name}</Typography>
                  <Typography variant="body2" fontWeight="bold">{phone.price} <small style={{ textDecoration: 'line-through', color: 'gray' }}>{phone.oldPrice}</small></Typography>
                  <Typography variant="caption" color="success.main">Save - {phone.save}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. CATEGORIES SECTION */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#535353',borderBottom:"2px solid #008ecc",paddingBottom:"8px"}}>
            Shop From <span style={{ color: '#008ecc', }}>Top Categories</span>
          </Typography>
          
        </Stack>

        <Stack direction="row" spacing={0} justifyContent="space-between" sx={{ flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Box key={cat} sx={{ textAlign: 'center' }}>
              <Avatar 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'white', 
                  border: '1px solid #e0e0e0',
                  boxShadow: 1,
                  mb: 1
                }}
                src="https://via.placeholder.com/80"
              />
              <Typography variant="caption" fontWeight="medium">{cat}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default HomePage;