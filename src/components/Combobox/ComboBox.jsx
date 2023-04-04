import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ComboBox() {
    const sectors = useSelector(state => state.iexCloudReducer.sectors)
    const [sector, setSector] = useState({name:'Communications'})
    return (
        <Autocomplete
            disablePortal
            value={sector}
            onChange={(event,newValue) => setSector(newValue)}
            id="combo-box-demo"
            getOptionLabel={option => option.name}
            options={sectors}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Sectors" />}
        />
    );
}
