// import WSAgroIcon from '../assets/icons/wsagroicon.svg';
// import WSIcon from '../assets/icons/wsicon.svg';
import { useGlobalContext } from '../context/GlobalContext';
import { Assessment } from '@mui/icons-material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import SensorsIcon from '@mui/icons-material/Sensors';
import TocIcon from '@mui/icons-material/Toc';
import { alpha, Divider, SvgIcon, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
import Toolbar from '@mui/material/Toolbar';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = ({ menuOpen }) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
                height: theme.spacing(5),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {menuOpen
                    ?
                    <img src={Assessment} style={{ height: theme.spacing(6) }} />
                    :
                    <img src={Assessment} style={{ height: theme.spacing(5) }} />}
            </Box>
            <Divider />
        </>
    );
};

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'width'
})(({ theme, open, width }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        width: width,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
        }),
    },
}));

const CustomIcon = styled(SvgIcon, {
    shouldForwardProp: (prop) => prop !== 'active'
})(({ theme, active }) => ({
    color: theme.palette.primary.main,
    transition: theme.transitions.create(['background-color', 'opacity'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
    }),
}));

const MenuItem = ({ to, label, icon, childs = [], isChild }) => {

    const { menuOpen, dispatch } = useGlobalContext();
    const theme = useTheme();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const isActive = pathname === '/' ? to === pathname : pathname.replace('/', '') === to;

    const handleClick = () => {
        setOpen(!open);
        if (!menuOpen && childs.length) {
            dispatch({ type: 'toggleMenu' });
        }
    };

    useEffect(() => {
        if (!menuOpen) {
            setOpen(false);
        }
    }, [menuOpen]);

    return <>
        <ListItemButton {...(to && { component: Link, to: to })} onClick={handleClick} sx={{
            backgroundColor: isActive ? alpha(theme.palette.primary.main, 0.2) : undefined,
            '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            },
            ...(isChild && {
                pl: 4,
            })
        }}>
            <Tooltip arrow title={label}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                    <CustomIcon component={icon} active={isActive} />
                </ListItemIcon>
            </Tooltip>
            <ListItemText primary={label} sx={{ pl: 4 }} />

            {childs?.length > 0 && (
                <Tooltip arrow title={open ? 'Recolher item' : 'Expandir item'}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                </Tooltip>
            )}
        </ListItemButton>
        <Divider />
        {childs?.length > 0 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {childs.map((child, index) => (
                        <MenuItem sx={{ pl: 4 }} key={index} isChild={true} {...child.props} />
                    ))}
                </List>
            </Collapse>
        )}
    </>;
};

const Menu = () => {
    const { menuOpen, menuWidth } = useGlobalContext();
    // const { t } = useTranslation();

    return (
        <Drawer variant="permanent" open={menuOpen} width={menuWidth}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
            </Toolbar>
            <Logo menuOpen={menuOpen} />
            <List component="nav" disablePadding>
                <MenuItem
                    to='/'
                    label={'Pagina inicial'}
                    icon={HomeIcon}
                />
                <MenuItem
                    to='reports'
                    label={'Salomel'}
                    icon={Assessment}
                />
                <MenuItem
                    label={'Alef'}
                    icon={ContentPasteIcon}
                    childs={[
                        <MenuItem
                            to='herd/cows'
                            label={'não diga'}
                            icon={TocIcon}
                            key='herd/cows'
                        />
                    ]}
                />
                <MenuItem
                    to='members'
                    label={'Membros'}
                    icon={SensorsIcon}
                />
            </List>
        </Drawer>
    );
};

export default Menu;
