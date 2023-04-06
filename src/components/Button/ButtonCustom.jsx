import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function ButtonCustom({clickFunction, ...props}) {
    return (
        <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
            <Button {...props} onClick={() => {clickFunction()}}>{props.children}</Button>
        </Box>
    );
}