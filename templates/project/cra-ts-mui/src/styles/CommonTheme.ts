import { createTheme } from '@mui/material/styles';

export const CommonTheme = createTheme({
    mixins: {
        toolbar: {
            minHeight: 58,
            '@media (min-width:600px)': {
                minHeight: 58
            },
            paddingRight: 30,
            paddingLeft: 30,
        }
    },
    spacing: (factor: number) => `${2 * factor}px`,
    typography: {
        fontSize: 14,
        fontFamily: [
            'Hiragino Kaku Gothic ProN',
            'Arial',
            'Meiryo',
            'BlinkMacSystemFont',
            'Helvetica Neue',
            'sans-serif'
        ].join(','),
        h2: {
            fontSize: 24,
            fontWeight: 'bold',
            wordBreak: 'break-all',
        },
        h3: {
            fontSize: 20,
            fontWeight: 'bold',
            wordBreak: 'break-all',
        },
        h4: {
            fontSize: 18,
            fontWeight: 'normal',
            wordBreak: 'break-all',
        },
        body1: {
            fontSize: 14,
            wordBreak: 'break-all',
            color: '#1A1A1A',
        },
        body2: {
            fontSize: 12,
            wordBreak: 'break-all',
        },
        subtitle1: {
            fontSize: 12,
            fontWeight: 'bold',
            wordBreak: 'break-all',
        },
        button: {
            fontSize: 14,
            color: '#fff',
            fontWeight: 'bold',
        }
    },
    palette: {
        common: {
            black: '#1A1A1A',
        },
        primary: {
            main: '#1976D2',
            light: '#63a4ff',
            dark: '#004ba0'
        },
        error: {
            main: '#da1d1d',
            light: '#ff5c47',
            dark: '#a00000'
        },
        secondary: {
            main: '#cfcfcf',
            light: '#9e9e9e',
            dark: '#707070'
        }
    }
})
