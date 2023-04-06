import React, {useState} from 'react';
import ComboBox from "../Combobox/ComboBox";
import Input from '../Input/Input';
import ButtonCustom from "../Button/ButtonCustom";
import {useDispatch, useSelector} from "react-redux";
import {filterSectorCollection} from "../../store/slices/iexCloudSlice";
import styles from './Filters.module.scss'

const Filters = () => {
    const sectorCollection = useSelector(state => state.iexCloudReducer?.sectorCollection)
    const dispatch = useDispatch()
    const [symbol, setSymbol] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [latestPriceFrom, setLatestPriceFrom] = useState('')
    const [latestPriceTo, setLatestPriceTo] = useState('')
    const [previousCloseFrom, setPreviousCloseFrom] = useState('')
    const [previousCloseTo, setPreviousCloseTo] = useState('')
    const [changeFrom, setChangeFrom] = useState('')
    const [changeTo, setChangeTo] = useState('')
    const [latestUpdateFrom, setLatestUpdateFrom] = useState('')
    const [latestUpdateTo, setLatestUpdateTo] = useState('')
    const filterTable = (sectorCollection) => {
        const filtered = sectorCollection.filter((item) =>
            (!symbol || item.symbol === symbol)
            && (!companyName || item.companyName === companyName)
            && (!latestPriceFrom || item.latestPrice >= latestPriceFrom)
            && (!latestPriceTo || item.latestPrice <= latestPriceTo)
            && (!previousCloseFrom || item.previousClose >= previousCloseFrom)
            && (!previousCloseTo || item.previousClose <= previousCloseTo)
            && (!changeFrom || item.change >= changeFrom)
            && (!changeTo || item.change <= changeTo)
            && (!latestUpdateFrom || new Date(item.latestUpdate) >= new Date(latestUpdateFrom))
            && (!latestUpdateTo || new Date(item.latestUpdate) <= new Date(latestUpdateTo))
        )
        dispatch(filterSectorCollection(filtered))
    }
    const clearFilterTable = (sectorCollection) => {
        setSymbol('')
        setCompanyName('')
        setLatestPriceFrom('')
        setLatestPriceTo('')
        setPreviousCloseFrom('')
        setPreviousCloseTo('')
        setChangeFrom('')
        setChangeTo('')
        setLatestUpdateFrom('')
        setLatestUpdateTo('')
        dispatch(filterSectorCollection(sectorCollection))
    }
    return (
        <div className={styles.wrapper}>
            <h1>Filtration:</h1>
            <ComboBox/>
            <p>Symbol:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} value={symbol} setChange={setSymbol} style={{width: 316, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='Symbol'/>
            </div>
            <p>Company name:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} value={companyName} setChange={setCompanyName} style={{width: 316, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='Company name'/>
            </div>
            <p>Latest price:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} value={latestPriceFrom} setChange={setLatestPriceFrom} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='From'/>
                <Input filter={()=>{filterTable(sectorCollection)}} value={latestPriceTo} setChange={setLatestPriceTo} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='To'/>
            </div>
            <p>Previous close:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} value={previousCloseFrom} setChange={setPreviousCloseFrom} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='From'/>
                <Input filter={()=>{filterTable(sectorCollection)}} value={previousCloseTo} setChange={setPreviousCloseTo} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='To'/>
            </div>
            <p>Change:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} value={changeFrom} setChange={setChangeFrom} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='From'/>
                <Input filter={()=>{filterTable(sectorCollection)}} value={changeTo} setChange={setChangeTo} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label='To'/>
            </div>
            <p>Latest update:</p>
            <div className={styles.inputWrapper}>
                <Input filter={()=>{filterTable(sectorCollection)}} type='date' value={latestUpdateFrom} setChange={setLatestUpdateFrom} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label=''/>
                <Input filter={()=>{filterTable(sectorCollection)}} type='date' value={latestUpdateTo} setChange={setLatestUpdateTo} style={{width: 150, backgroundColor: 'rgba(143,161,168,0.17)'}} size='small' label=''/>
            </div>
            <div className={styles.btns}>
                <ButtonCustom style={{alignSelf: 'center', width: '100px'}} clickFunction={() => {
                    filterTable(sectorCollection)
                }}>Filter</ButtonCustom>
                <ButtonCustom style={{alignSelf: 'center', width: '100px'}} clickFunction={() => {
                    clearFilterTable(sectorCollection)
                }}>Clear filter</ButtonCustom>
            </div>

        </div>
    );
};

export default Filters;