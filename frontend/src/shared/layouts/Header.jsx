// import { useAuth } from '../contexts/AuthContext';
// import useCurrentCompanyData from '../hooks/useCompany/useCurrentCompanyData';
import { useGlobalContext } from '../context/GlobalContext';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Logout, Settings } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { cloneElement, useState } from 'react';

const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: document.querySelector('main') ?? undefined
    });

    return cloneElement(children, {
        elevation: trigger ? 2 : 0,
    });
};

const paperProps = {
    elevation: 0,
    sx: {
        width: '200px',
        overflow: 'hidden',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 2,
        '& .MuiAvatar-root': {
            width: 60,
            height: 60,
            marginTop: '-40px'
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
};

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'width'
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: '100%',
    display: 'flex'
}));

const Header = () => {
    const { dispatch, menuOpen } = useGlobalContext();
    const toggleDrawer = () => dispatch({ type: 'toggleMenu' });
    // const { logoff } = useAuth();
    // const { data: company } = useCurrentCompanyData();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ElevationScroll >
            <Box >
                <AppBar >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton color='secondary' onClick={toggleDrawer} >
                            {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
                        </IconButton>
                        <Box>
                            <Box>
                                <Tooltip title={'Configurações'}>
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>
                                            <Avatar />
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={paperProps}
                            >
                                <Box >
                                    <Box
                                        height='64px'
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            marginTop: '-10px'
                                        }}>

                                    </Box>
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='space-around'
                                        height='100px'
                                    >
                                        <Avatar />
                                        <Box textAlign='center'>
                                            <Typography variant='caption4'>
                                                User
                                            </Typography>
                                            <Typography>
                                                {/* {company?.name} */}
                                                {'Zona Sul'}

                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    {'Configurações'}
                                </MenuItem>
                                <MenuItem onClick={() => console.log('logoff')}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    {'logout'}
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ElevationScroll>
    );
};

export default Header;