import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({label, size, value, setChange, ...props}) {
    return (
        <Box
            component="form"
            sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
        >
            <TextField {...props} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} value={value}
             onChange={event => {setChange(event.target.value)}} id="outlined-search" label={label} size={size}/>
        </Box>
    );
}