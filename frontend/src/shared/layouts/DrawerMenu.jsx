// import {
//     FormatListBulletedRounded, Home, Menu
// } from "@mui/icons-material";
// import { useGlobalContext } from "../context/GlobalContext";
// import { Avatar, Divider, Drawer, List, ListItemButton, Typography, useTheme, ListItemIcon, ListItemText, IconButton } from "@mui/material"
// import { Box, display, width } from "@mui/system"
// import { useState } from "react";

// export const DrawerMenu = ({ children }) => {
//     const theme = useTheme();
//     // const [IsDrawerOpen, setIsDrawerOpen] = useState(true);
//     const { menuOpen, menuWidth } = useGlobalContext();


//     return (
//         <>
//             <Drawer
//                 variant="permanent"
//                 anchor="left"
//                 open={menuOpen}
//                 onClose={() => setIsDrawerOpen(false)}
//                 widt={menuWidth}
//             >
//                 {/* <IconButton color="inherit" edge="start" aria-label="logo" onClick={() => { setIsDrawerOpen(false) }}>
//                     <Menu />
//                 </IconButton> */}
//                 <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection={"column"}>
//                     <Box
//                         width="100%"
//                         height={theme.spacing(20)}
//                         display="flex"
//                         flexDirection="column"
//                         alignItems="center"
//                         justifyContent="center"
//                     >
//                         <Avatar
//                             src="https://scontent.ffor13-1.fna.fbcdn.net/v/t39.30808-6/274826659_4882702178506609_3496783646798327922_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=31fx2CqFSlQAX91RTld&_nc_ht=scontent.ffor13-1.fna&oh=00_AT9wfGkMgvcMmrdZy5Gd3s7G-f61ghl4z3Ho6ZkqfW4Lxw&oe=63153BD5"
//                             sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
//                         />
//                         <Typography component="h2" fontSize={16} fontWeight="bold">Zona Sul</Typography>
//                         <Typography component="h2" fontSize={10} fontWeight="400">adm@adm.com.br</Typography>
//                     </Box>
//                     <Divider />
//                     <Box flex={1}>
//                         <List component="nav" height={theme.spacing(28)} display="flex" alineItems="center" justifyContent="center">
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <Home />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Página inicial" />

//                             </ListItemButton>
//                         </List>
//                         <List component="nav" height={theme.spacing(28)} display="flex" alineItems="center" justifyContent="center">
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <FormatListBulletedRounded />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Listas e Usuários" />

//                             </ListItemButton>
//                         </List>
//                     </Box>
//                 </Box>
//             </Drawer>

//             <Box heigth="100vh" marginLeft={theme.spacing(28)}>
//                 {/* Recebe os valores do app como filho */}
//                 {children}
//             </Box>
//         </>
//     )
// }