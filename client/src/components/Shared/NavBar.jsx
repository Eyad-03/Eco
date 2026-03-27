import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Box, 
  IconButton, 
  Stack, 
  Divider 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Search as SearchIcon, 
  FormatListBulleted as ListIcon, 
  PersonOutline as PersonIcon, 
  ShoppingCartOutlined as CartIcon 
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


function NavBar() {

const navigate =useNavigate();

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
        {/* Left: Logo & Menu */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ bgcolor: '#f3f9fb', borderRadius: 2, p: 0.5 }}>
            <IconButton size="small" sx={{ color: '#008ecc' }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#008ecc', letterSpacing: -0.5 }}>
            MegaMart
          </Typography>
        </Stack>

        {/* Center: Search Bar (Using Box instead of styled) */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            bgcolor: '#f3f9fb', 
            borderRadius: '10px', 
            px: 2, 
            width: { xs: '100%', md: '500px' },
            mx: 4
          }}
        >
          <SearchIcon sx={{ color: '#008ecc', fontSize: 20 }} />
          <InputBase
            placeholder="Search essentials, groceries and more..."
            sx={{ ml: 1, flex: 1, fontSize: '0.875rem',padding:"8px" }}
          />

        </Box>

        {/* Right: Actions */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ cursor: 'pointer' }} onClick={()=>navigate('/login')}  >
            <PersonIcon sx={{ color: '#008ecc', fontSize: 22 }} />
            <Typography  variant="body2" sx={{ fontWeight: 600, color: '#444', display: { xs: 'none', sm: 'block' } }}>
              Sign Up/Sign In
            </Typography>
          </Stack>

          <Divider orientation="vertical" flexItem sx={{ height: 20, my: 'auto' }} />

          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ cursor: 'pointer' }}>
            <CartIcon sx={{ color: '#008ecc', fontSize: 22 }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#444' }}>
              Cart
            </Typography>
          </Stack>
        </Stack>

      </Toolbar>
    </AppBar>
  );
}

export default NavBar;