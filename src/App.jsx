import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addSectors} from "./store/slices/iexCloudSlice";
import Filters from "./components/Filters/Filters";
import Table from "../src/components/Table/Table";
import styles from './App.scss'

const App = () => {
    const sectorCollection = useSelector(state => state.iexCloudReducer.sectorCollection)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(addSectors())
    },[])
    return (
        <div className={styles.wrapper}>
            <Filters/>
            <Table rows={sectorCollection}/>
        </div>
    );
};

export default App;