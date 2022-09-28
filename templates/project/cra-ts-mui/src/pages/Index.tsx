import React, {useState, useRef, useEffect, useContext, useCallback} from 'react';
import {Box, Typography, Container} from '@mui/material'

export const Index = () => {

    return (
        <Container>
            <Box sx={{ p: {md: 2}}}>
                <Typography variant={'h2'}>Hello React & Mui.</Typography>
            </Box>
        </Container>
    )
}