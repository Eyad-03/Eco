import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
function UserProtectRoutes({ children }) {
  const { user, loading } = useContext(UserContext);
  console.log("user from user prtocted routes", user);
  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (user.role !== "user") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default UserProtectRoutes;
