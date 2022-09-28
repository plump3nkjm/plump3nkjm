import React from 'react'
import {createTheme, PaletteColor, PaletteColorOptions, ThemeProvider} from "@mui/material";
import {orange} from '@mui/material/colors';


declare module '@mui/material' {
    interface Theme {
        status: {
            danger: string
        },
    }


    interface ThemeOptions {
        status?: {
            danger?: string
        }
    }

    interface BreakpointOverrides {
        xs: false;
        md: false;
        sm: true;
        tb: true;
        lg: true;
        xl: true;
    }

    interface PaletteOptions {
        borderGray?: PaletteColorOptions
    }

    interface Palette {
        borderGray: PaletteColor
    }
}

export const CommonTheme = createTheme({
    status: {
        danger: orange[500],
    },
    spacing: (factor: number) => `${2 * factor}px`,
    breakpoints: {
        values: {
            sm: 0,
            tb: 640,
            lg: 1280,
            xl: 1400
        }
    },
    typography: {
        fontSize: 14,
        fontFamily: ['Roboto', 'Hiragino Kaku Gothic ProN', 'Arial', 'Meiryo', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'].join(','),
        h1: {
            /* TODO h1 → SPで18にするやり方調べる */
            fontSize: 32,
            fontWeight: 'bold',
        },
        h2: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        h3: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        h4: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        h5: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        h6: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        button: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 15
        },
    },
    palette: {
        text: {
            primary: '#0C022F',
        },
        primary: {
            main: '#5333ED',
            dark: '#3a23a5',
            light: '#755bf0'
        },
        secondary: {
            main: '#33A3D7'
        },
        borderGray: {
            main: '#707070'
        }
    }
});