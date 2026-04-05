import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
function AdminProtectRoutes({ children }) {
  const { user, loading } = useContext(UserContext);
  console.log("user from manager prtocted routes", user);
  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default AdminProtectRoutes;
