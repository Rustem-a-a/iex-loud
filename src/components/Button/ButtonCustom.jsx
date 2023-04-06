import React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

 const ButtonCustom = ({clickFunction, ...props}) => {
    return (
        <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
            <Button sx={{color: "white", backgroundColor: "#000000D2"}} {...props}
                    onClick={() => {clickFunction()}}>{props.children}
            </Button>
        </Box>
    );
}

export default ButtonCustom