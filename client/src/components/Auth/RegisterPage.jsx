import style from "../Style/LoginPage.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import cat from "../../image/cat.png";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";
import { useState, useContext } from "react";
function Register() {
  const { register } = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };

  return (
    <>
      <div className={style.splitbackground}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          sx={{
            width: "100%",
            maxWidth: "380px",
            height: "500px",
            alignItems: "center",
            margin: { xs: "auto", md: "110px 0px 0px 160px" },

            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "3rem",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={3}
            fontFamily="inria sans"
          >
            Register
          </Typography>

          <TextField
            label="name"
            type="text"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            margin="normal"
            sx={{
              width: { xs: "90%", sm: "400px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "rgba(149, 149, 149, 0.33)",
              },
            }}
          />

          <TextField
            label="Email"
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            margin="normal"
            sx={{
              width: {
                xs: "90%",
                sm: "400px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "rgba(149, 149, 149, 0.33)",
              },
            }}
          />

          <TextField
            label="password"
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            margin="normal"
            sx={{
              width: { xs: "90%", sm: "400px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "rgba(149, 149, 149, 0.33)",
              },
            }}
          />

          <Button
            type="submit"
            margin="normal"
            sx={{
              background: "#337FFF",
              padding: "10px 25px",
              borderRadius: "12px",
              color: "white",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            Login in
          </Button>

          <Link to="/login" style={{ color: "#337FFF", marginTop: "8px" }}>
            Sign in
          </Link>

          <Box sx={{ marginTop: "28px", display: "flex", gap: "30px" }}>
            <FcGoogle size={"30px"} />
            <ImFacebook size={"30px"} color="#337FFF" />
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={cat} style={{ marginTop: "150px" }} />
        </Box>
      </div>
    </>
  );
}

export default Register;
