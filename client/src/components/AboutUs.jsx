import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Image } from "mui-image";
import Banner from "../image/Banner.png";
import NavBar from "./Shared/NavBar";
function AboutUs() {
  return (
    <>
    <NavBar/>
    <Box display="flex">
      <Box margin="150px 0px 0px 200px">
        <Box
          borderRadius="50%"
          sx={{
            backgroundColor: "#337FFF",
            width: "350px",
            height: "350px",
            zIndex: "1",
          }}
        ></Box>
        <Image
          src={Banner}
          width={350}
          height={250}
          zIndex="2"
          sx={{ bottom: "280px", right: "20px" }}
        />
      </Box>

      <Box margin="150px 80px 0px 200px">
        <Typography variant="h2">About Us</Typography>
        <p style={{ fontSize: "18px" }}>
          Welcome to our marketplace, where innovation meets execution. We
          founded this platform with a simple mission: to bridge the gap between
          complex business needs and world-class creative solutions. <br />
          <br />
          Whether you are looking for cutting-edge web development, strategic
          SEO, or a brand identity that stands out, we provide a curated
          ecosystem of services designed to scale your ideas. We believe that
          technology should be a tool for growth, not a barrier, and we are
          dedicated to delivering precision-engineered results for every project
          we touch.
        </p>
      </Box>
    </Box>

    <Box>
        
    </Box>
    </>
  );
}

export default AboutUs;
