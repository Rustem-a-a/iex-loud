import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 const Input = ({label, size, value, setChange,filter,style, ...props}) => {
    return (
        <Box
            component="form"
            sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
        >
            <TextField
             onKeyDown={e=>{
                    if(e.key==='Enter'){
                        filter()
                        e.preventDefault()}}}
                {...props} style={style} value={value}
             onChange={event => {setChange(event.target.value)}} id="outlined-search" label={label} size={size}/>
        </Box>
    );
}

export default Input