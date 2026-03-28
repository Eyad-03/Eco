import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Image } from "mui-image";
import contact from "../image/contact.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavBar from "./Shared/NavBar";

function ContactUs() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 10 },
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              padding: 6,
              borderRadius: 4,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Image src={contact} />
            </Box>

            <Stack spacing={4} sx={{ flex: 1 }}>
              <Box>
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight="bold"
                  letterSpacing={2}
                >
                  Get in touch
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  color="text.primary"
                  sx={{ mb: 1 }}
                >
                  Contact Us
                </Typography>
                <Divider
                  sx={{
                    width: "60px",
                    borderBottomWidth: 4,
                    borderRadius: 2,
                    borderColor: "primary.main",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  textTransform="uppercase"
                >
                  Email
                </Typography>
                <Typography variant="h6" fontWeight={500}>
                  hi@green.com
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  textTransform="uppercase"
                >
                  Location
                </Typography>
                <Typography variant="h6" fontWeight={500}>
                  New York, California, Ohio
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                {[
                  { icon: <FaFacebook />, link: "#" },
                  { icon: <FaInstagram />, link: "#" },
                  { icon: <FaXTwitter />, link: "#" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ContactUs;
