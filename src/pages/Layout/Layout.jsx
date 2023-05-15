import { Outlet } from "react-router-dom";
import AppHeader from "../../components/Header/AppHeader";
import Footer from "../../components/Footer/Footer";
function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
