import React, {useEffect, useState} from 'react'
import {CommonTheme} from "../styles/CommonTheme";
import {Box, ThemeProvider, Stack} from "@mui/material";
import {LayoutProps} from "./pageWithLayout";
import {useRouter} from "next/router";
import {CommonContext} from "../contexts/CommonContext";
import {Aside} from "../components/ui/Aside";
import {Header, HEADER_HEIGHT} from "../components/ui/Header";


const CommonLayout: LayoutProps = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <CommonContext.Provider value={{isLoading, setIsLoading}}>
            <ThemeProvider theme={CommonTheme}>
                <Stack direction={'row'}>
                    <Aside />
                    <Box>
                        <Header/>
                        <Box mt={HEADER_HEIGHT/2}>
                            { children }
                        </Box>
                    </Box>
                </Stack>
            </ThemeProvider>
        </CommonContext.Provider>
    )
}

export default CommonLayout