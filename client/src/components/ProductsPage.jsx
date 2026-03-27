import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Container 
} from '@mui/material';
import { Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavBar from './Shared/NavBar';
import Footer from './Shared/Footer';
import vv from '../image/vv.webp'

const products = [
  { id: 1, name: 'Classic Denim Jeans', fit: 'Slim Fit', price: '$49.99', image: vv },
  { id: 2, name: 'Cozy Comfort Hoodie', fit: 'Relaxed Fit', price: '$39.99', image: vv },
  { id: 3, name: 'Classic Polo Shirt', fit: 'Regular Fit', price: '$29.99', image: vv },
  { id: 4, name: 'Chino Pants', fit: 'Slim Fit', price: '$44.99', image: vv },
];

export default function ProductsPage() {
  return (
    <>
    <NavBar/>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Casual Collection
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.
        </Typography>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <Card elevation={0} sx={{ borderRadius: 2, backgroundColor: '#f9f9f9', position: 'relative' }}>
              
              {/* Image Container */}
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
                />
              </Box>

              {/* Floating Cart Button */}
              <IconButton 
                sx={{ 
                  position: 'absolute', 
                  bottom: 80, 
                  right: 16, 
                  bgcolor: 'white',
                  boxShadow: 1,
                  '&:hover': { bgcolor: '#f0f0f0' }
                }}
              >
                <AddShoppingCartIcon fontSize="small" />
              </IconButton>

              {/* Details Section */}
              <CardContent sx={{ bgcolor: 'white', pt: 2 }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    {product.fit}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </>
  );
}