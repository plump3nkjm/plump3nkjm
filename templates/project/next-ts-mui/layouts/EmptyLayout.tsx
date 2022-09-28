import React from 'react'
import {CommonTheme} from "../styles/CommonTheme";
import {ThemeProvider} from "@mui/material";
import {LayoutProps} from "./pageWithLayout";

const AdminLayout: LayoutProps = ({ children }) => {
    return (
        <ThemeProvider theme={CommonTheme}>
            { children }
        </ThemeProvider>
    )
}

export default AdminLayout