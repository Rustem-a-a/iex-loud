import React, {useEffect} from 'react';
import ComboBox from "./components/Combobox/ComboBox";
import {useDispatch} from "react-redux";
import {addSectors} from "./store/slices/iexCloudSlice";
import {getSectors} from "./Api/iexCloud";
import Filters from "./components/Filters/Filters";

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(addSectors())
    },[])
    return (
        <div>
           <Filters/>
        </div>
    );
};

export default App;