import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 2,
      }}
    >
      <Typography variant="h6" color="inherit" component="p" display="inline">
        Powered by
      </Typography>
      <Typography
        variant="h6"
        //noWrap
        color="inherit"
        component={Link}
        target="blank"
        to="https://github.com/AleksandrDUtheDU"
        marginLeft={1}
      >
        Aleksandr Dudnik
      </Typography>
    </Box>
  );
}

export default Footer;
