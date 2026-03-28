import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Container,
} from "@mui/material";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavBar from "./Shared/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Shared/Footer";
import vv from "../image/vv.webp";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { useEffect } from "react";

export default function ProductsPage() {
  const { catid } = useParams();
  const { products, fetchProduct } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter(
    (product) => Number(product.catid) === Number(catid),
  );
  console.log(filteredProducts);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("URL catid:", catid);
  console.log(
    "Products catid:",
    products.map((p) => p.catid),
  );

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            All Collection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover our collection, where technology exist.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <Card
                onClick={() => navigate(`/detailpage/${product.product_id}`)}
                elevation={0}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#f9f9f9",
                  position: "relative",
                }}
              >
                <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ width: "100%", height: "200px", borderRadius: 1 }}
                  />
                </Box>

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 80,
                    right: 16,
                    bgcolor: "white",
                    boxShadow: 1,
                    "&:hover": { bgcolor: "#f0f0f0" },
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </IconButton>

                <CardContent sx={{ bgcolor: "white", pt: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 0.5,
                    }}
                  >
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
      <Footer />
    </>
  );
}
