import React, {useState} from 'react'
import {CommonTheme} from "../styles/CommonTheme";
import {AdminContext} from "../contexts/AdminContext";
import {LayoutProps} from "./pageWithLayout";
import {Box, ThemeProvider, Container} from "@mui/material"
import {Loading} from "../components/ui/Loading";

const AdminLayout: LayoutProps = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <AdminContext.Provider value={{isLoading, setIsLoading}}>
            <ThemeProvider theme={CommonTheme}>
                <Loading />
                <Box mt={32}></Box>
                <Box sx={{py: 10, px: 10}}>
                    { children }
                </Box>
            </ThemeProvider>
        </AdminContext.Provider>
    )
}

export default AdminLayout