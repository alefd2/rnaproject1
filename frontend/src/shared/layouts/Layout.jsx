import Header from "./Header";
import Menu from './Menu';
// import { DrawerMenu } from "./DrawerMenu";
import { Home } from "../../pages/Home/index";
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container, Toolbar } from "@mui/material";



export const Layout = () => {
    const { pathname } = useLocation();
    return (

        <>
            <Box sx={{ display: 'flex' }}>
                <Header />
                {/* <DrawerMenu /> */}
                <Menu />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.background.default
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                        <Home />
                        <Outlet />
                    </Container>
                </Box>
            </Box>

        </>
    );
}