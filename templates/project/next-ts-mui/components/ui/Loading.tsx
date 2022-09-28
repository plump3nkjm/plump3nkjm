import {Stack, Typography, CircularProgress, Dialog, DialogContent} from "@mui/material";
import {useContext} from "react";
import {CommonContext} from "../../contexts/CommonContext";

export const Loading = () => {
    const {isLoading, setIsLoading} = useContext(CommonContext)

    return (
        <Dialog open={isLoading} maxWidth={'lg'}>
            <DialogContent>
                <Stack sx={{p: 25}} alignItems={'center'} justifyContent={'center'}>
                    <CircularProgress/>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}