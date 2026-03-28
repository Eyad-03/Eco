import React from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import Sidebar from "../Shared/Sidebar.jsx";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

import { PersonOutline as PersonIcon } from "@mui/icons-material";

const AdminLayout = ({ children }) => {
  const { user, logout } = useContext(UserContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#0055CC",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Admin Management Console
          </Typography>

          <Typography onClick={logout} alignItems={"center"}>
            Log out
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;
