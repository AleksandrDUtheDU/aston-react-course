import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      textAlign="center"
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 2,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" color="inherit" component="p" display="inline">
          Powered by
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          target="blank"
          to="https://github.com/AleksandrDUtheDU"
          marginLeft={1}
        >
          Aleksandr Dudnik
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
