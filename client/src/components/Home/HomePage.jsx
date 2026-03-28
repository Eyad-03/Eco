import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import { Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import api from "../../api";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const res = await api.get("/categories");
      if (res.status !== 200) {
        toast.error(res.data.message);
      }

      setCategories(res.data.categories);
      toast.success(res.data.message);
    } catch (err) {}
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const smartphones = [
    {
      id: 1,
      name: "Iphone 11",
      price: "₹32999",
      oldPrice: "₹74999",
      save: "₹32999",
      img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Galaxy M13 (4GB | 64GB)",
      price: "₹10499",
      oldPrice: "₹14999",
      save: "₹4500",
      img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Galaxy M33 (4GB | 64GB)",
      price: "₹16999",
      oldPrice: "₹24999",
      save: "₹8000",
      img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Galaxy M53 (4GB | 64GB)",
      price: "₹31999",
      oldPrice: "₹40999",
      save: "₹9000",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      name: "Galaxy S22 Ultra",
      price: "₹67999",
      oldPrice: "₹85999",
      save: "₹18000",
      img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <>
      <NavBar />
      <Box
        sx={{
          bgcolor: "#ffffff",
          minHeight: "100vh",
          pb: 5,
          marginBottom: "90px",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            sx={{
              position: "relative",
              bgcolor: "#1a237e",
              borderRadius: 4,
              height: 300,
              display: "flex",
              alignItems: "center",
              px: 6,
              color: "white",
              overflow: "hidden",
            }}
          >
            <Box sx={{ zIndex: 2 }}>
              <Typography variant="h6">
                Best Deal Online on smart watches
              </Typography>
              <Typography variant="h2" fontWeight="bold">
                SMART WEARABLE.
              </Typography>
              <Typography variant="h5">UP TO 80% OFF</Typography>
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                left: 10,
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                right: 10,
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#535353",
                borderBottom: "2px solid #008ecc",
                paddingBottom: "8px",
              }}
            >
              Grab the best deal on{" "}
              <span style={{ color: "#008ecc" }}>Smartphones</span>
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {smartphones.map((phone) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={phone.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    position: "relative",
                    textAlign: "center",
                    p: 1,
                  }}
                >
                  <Chip
                    label="56% OFF"
                    size="small"
                    color="primary"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      borderRadius: 1,
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="140"
                    image={phone.img}
                    sx={{ objectFit: "contain", mt: 2 }}
                  />
                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      noWrap
                      display="block"
                    >
                      {phone.name}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {phone.price}{" "}
                      <small
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        {phone.oldPrice}
                      </small>
                    </Typography>
                    <Typography variant="caption" color="success.main">
                      Save - {phone.save}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 15 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#535353",
                borderBottom: "2px solid #008ecc",
                paddingBottom: "8px",
              }}
            >
              Shop From <span style={{ color: "#008ecc" }}>Top Categories</span>
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={0}
            justifyContent="space-between"
            sx={{ flexWrap: "wrap" }}
          >
            {categories.map((cat) => (
              <Box
                key={cat.catid}
                sx={{ textAlign: "center" }}
                onClick={() => navigate(`/productspage/${cat.catid}`)}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "white",
                    border: "1px solid #e0e0e0",
                    boxShadow: 1,
                    mb: 1,
                  }}
                  src={cat.thumbnail}
                />
                <Typography variant="caption" fontWeight="medium">
                  {cat.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default HomePage;
