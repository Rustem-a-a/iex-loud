import React, {useEffect} from 'react';
import Filters from "../Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import styles from './Main.module.scss'
import {filterSectorCollection} from "../../store/slices/iexCloudSlice";
import Preloader from '../Preloader/Preloader'
import List from '../List/List'

const Main = () => {
    const dispatch = useDispatch()
    const sectorCollection = useSelector(state => state.iexCloudReducer.sectorCollection)
    const loadingTable = useSelector(state => state.iexCloudReducer.loadingTable)
    useEffect(() => {
        dispatch(filterSectorCollection(sectorCollection))
    }, [sectorCollection])
    return (
        <div className={styles.wrapper}>
            <Filters/>
            {!loadingTable
                ? <List/>
                // ? <Table rows={filteredSectorCollection}/>
                : <Preloader/>}
        </div>
    );
};

export default Main;