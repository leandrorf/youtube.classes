import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import React from "react";

interface MenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Drawer open={true} variant={smDown ? 'temporary' : 'permanent'}>
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column">

                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center">

                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://yt3.ggpht.com/yti/ANjgQV9M1_PCQxm9zUJSwy9T-t4lq-1VHxsvco-cLCg5iKFFQhNl=s88-c-k-c0x00ffffff-no-rj" />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box
                height="100vh"
                marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};