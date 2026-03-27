import React from 'react';
import { Box, Container, Grid, Typography, Link, List, ListItem, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  const blueBackground = '#008ecc'; // Matching the image's vibrant blue

  const listStyle = {
    padding: 0,
    '& .MuiListItem-root': {
      paddingLeft: 0,
      paddingTop: 4,
      paddingBottom: 0,
      color: '#fff',
      fontSize: '0.9rem',
      display: 'list-item',
      listStyleType: 'disc',
      marginLeft: '20px',
    },
  };

  const headerStyle = {
    color: '#fff',
    fontWeight: 600,
    pb: 1,
    borderBottom: '2px solid rgba(255,255,255,0.3)',
    display: 'inline-block',
    mb: 2
  };

  return (
    <Box sx={{ bgcolor: blueBackground, color: '#fff', pt: 8, pb: 4, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={15}>
          
          {/* Column 1: Brand & Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
              MegaMart
            </Typography>
            
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Contact Us</Typography>
            
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <WhatsAppIcon />
                <Box>
                  <Typography variant="caption" display="block">Whats App</Typography>
                  <Typography variant="body2">+1 202-918-2132</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <CallIcon />
                <Box>
                  <Typography variant="caption" display="block">Call Us</Typography>
                  <Typography variant="body2">+1 202-918-2132</Typography>
                </Box>
              </Stack>
            </Stack>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>Download App</Typography>
            <Stack direction="row" spacing={1}>
                {/* Simplified App Store Placeholders */}
                <Box component="img" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" sx={{ height: 40 }} />
                <Box component="img" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" sx={{ height: 40 }} />
            </Stack>
          </Grid>

          {/* Column 2: Popular Categories */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={headerStyle}>Most Popular Categories</Typography>
            <List sx={listStyle}>
              {['Staples', 'Beverages',  'Baby Care', 'Vegetables & Fruits', 'Snacks & Foods', 'Dairy & Bakery'].map((text) => (
                <ListItem key={text}><Typography variant="body2">{text}</Typography></ListItem>
              ))}
            </List>
          </Grid>

          {/* Column 3: Customer Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={headerStyle}>Customer Services</Typography>
            <List sx={listStyle}>
              {['About Us', 'Terms & Conditions', 'FAQ', 'Privacy Policy', 'E-waste Policy', 'Cancellation & Return Policy'].map((text) => (
                <ListItem key={text}><Typography variant="body2">{text}</Typography></ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 8, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2022 All rights reserved. Reliance Retail Ltd.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;