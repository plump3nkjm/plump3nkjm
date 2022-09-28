import React from 'react';
import {CommonTheme} from "@/styles/CommonTheme";
import {ThemeProvider, CssBaseline} from "@mui/material";

type Props = {
    children: React.ReactNode
}

export const CommonLayout: React.FC<Props> = ({children}) => {

    return (
        <ThemeProvider theme={CommonTheme}>
            <CssBaseline />
            <main>
                {children}
            </main>
        </ThemeProvider>
    );
}