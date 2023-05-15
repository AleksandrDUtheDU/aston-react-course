import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { LOGIN, REGIST, HOME } from "../../shared/Routes";

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to={HOME}
            color="inherit"
            sx={{ flexGrow: 2, textDecoration: "none" }}
          >
            USERNAME API
          </Typography>
          <Box>
            <Button
              component={Link}
              to={LOGIN}
              color="inherit"
              startIcon={<LoginIcon />}
              sx={{ marginLeft: 1, fontSize: 16 }}
              // onClick={mobileOpen ? this.handleDrawerToggle : null}
            >
              Вход
            </Button>
            <Button
              component={Link}
              to={REGIST}
              color="inherit"
              startIcon={<AccountCircleIcon />}
              sx={{ marginLeft: 1, fontSize: 16 }}
              // onClick={mobileOpen ? this.handleDrawerToggle : null}
            >
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
