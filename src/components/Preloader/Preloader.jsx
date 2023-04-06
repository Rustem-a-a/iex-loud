import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 const Preloader = () => {
    return (
        <Box sx={{ display: 'flex',margin:'0 auto',marginTop:'30%' }}>
            <CircularProgress />
        </Box>
    );
}
export default Preloader