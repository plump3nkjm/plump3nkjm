import {Drawer, Stack, Typography} from "@mui/material";

export const DRAWER_WIDTH = 100;

export const Aside = () => {

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                padding: (theme) => theme.spacing(0, 4),
                flexShrink: 0,
                whiteSpace: 'nowrap',
                transition: (theme) => theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            }}
            PaperProps={{
                sx: {
                width: DRAWER_WIDTH,
                transition: (theme) => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
                }),
                }
            }}
        >
        </Drawer>
    )
}