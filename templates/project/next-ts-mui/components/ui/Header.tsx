import {AppBar, Stack, Typography} from "@mui/material";
import {DRAWER_WIDTH} from "./Aside";

export const HEADER_HEIGHT = 58;

export const Header = () => {

    return (
        <AppBar
            position="fixed"
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginLeft: DRAWER_WIDTH,
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                padding: (theme) => theme.spacing(0, 21),
                height: HEADER_HEIGHT,
                backgroundColor: '#fff',
                boxShadow: 'none',
                borderBottom: '1px solid #F3F3F3',
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
                width: 'calc(100% - 320px)'
            }}>

            </Stack>
        </AppBar>
    )
}