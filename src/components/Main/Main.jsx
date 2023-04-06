import React, {useEffect} from 'react';
import Filters from "../Filters/Filters";
import {useSelector} from "react-redux";
import styles from './Main.module.scss'
import Preloader from '../Preloader/Preloader'
import List from '../List/List'
import {Route,Routes} from "react-router-dom";
import Table from '../Table/Table'

const Main = () => {
    const filteredSectorCollection = useSelector(state => state.iexCloudReducer.filteredSectorCollection)
    const loadingTable = useSelector(state => state.iexCloudReducer.loadingTable)
    return (
        <div className={styles.wrapper}>
            <Filters/>
            {!loadingTable
                ?  <>
                  <Routes>
                    <Route path='/' element={ <List/>}/>
                    <Route path='/muitable' element={ <Table rows={filteredSectorCollection}/>}/>
                  </Routes>
                  </>
                : <Preloader/>}
        </div>
    );
};

export default Main;