import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import AppHeader from "../../components/Header/AppHeader";
import Footer from "../../components/Footer/Footer";
function Layout() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
