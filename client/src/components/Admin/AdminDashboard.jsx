import AdminLayout from "./AdminLayout.jsx";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

function AdminDashboard() {
  return (
    <AdminLayout>
      <Typography variant="h4" gutterBottom>
        Welcome, Admin
      </Typography>
      <p>This is where you will manage your Smart Wearables and Smartphones.</p>
    </AdminLayout>
  );
}

export default AdminDashboard;
