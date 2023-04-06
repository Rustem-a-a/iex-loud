import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addSectorCollection, filterSectorCollection, setCurrentSector} from "../../store/slices/iexCloudSlice";

 const ComboBox = () => {
    const sectors = useSelector(state => state.iexCloudReducer?.sectors)
    const [sector, setSector] = useState({name: 'Energy Minerals'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addSectorCollection(sector))
        dispatch(setCurrentSector(sector))
    }, [sector])
    return (
        <Autocomplete
                style={{margin: '10px 15px 10px 15px'}}
                disablePortal
                value={sector}
                onChange={(event, newValue) => {
                    if (newValue) {
                        setSector(newValue)
                    } else {
                        dispatch(filterSectorCollection([]))
                        dispatch(setCurrentSector(''))
                    }
                }}
                id="combo-box-demo"
                getOptionLabel={option => option.name}
                options={sectors}
                sx={{width: 300,}}
                renderInput={(params) => <TextField {...params} label="Sectors"/>}
            />
    );
}

export default ComboBox