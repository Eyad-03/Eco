import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Rating,
  Button,
  IconButton,
  Paper,
  Divider,
  Stack,
} from "@mui/material";

import { Grid } from "@mui/material";
import Footer from "./Shared/Footer";
import NavBar from "./Shared/NavBar";
import cc from "../image/cc.webp";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";

const DetailPage = () => {
  const { productId } = useParams();
  const { getProductItem, product } = useContext(ProductContext);

  useEffect(() => {
    getProductItem(productId);
  }, []);
  console.log(product);
  if (!product) {
    return <Typography>Loading product details...</Typography>;
  }
  return (
    <>
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          maxWidth: 1200,
          margin: "auto auto 90px auto",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#e0e6ea",
                borderRadius: 4,
                display: "flex",
                justifyContent: "center",
                p: 8,
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt="Red Seal Vitamin C"
                sx={{ maxHeight: 400, width: "500px" }}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: "#1A2E44", fontFamily: "serif" }}
              >
                {product.name}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </Stack>

              <Typography
                variant="h4"
                sx={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                ${product.price}
              </Typography>

              <Divider />

              <Box>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.6, color: "#555" }}
                >
                  {product.description}
                </Typography>
              </Box>

              <Divider />

              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#1A2E44",
                  color: "white",
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#2c4a6b" },
                }}
              >
                Add to Cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
