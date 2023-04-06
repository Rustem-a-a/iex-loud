import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {token} from "../../Api/iexApi";

export const addSectors = createAsyncThunk('addSectors',
    async () => {
        try {
            const {data} = await axios('https://cloud.iexapis.com/stable/ref-data/sectors?token=' + token)
            return data
        } catch (e) {
        }
    })
export const addSectorCollection = createAsyncThunk('addSectorCollection',
    async (sector= {name: 'Energy Minerals'}) => {
        try {
            const {data} = await axios(`https://cloud.iexapis.com/stable/stock/market/collection/sector?collectionName=${sector.name}&token=` + token)
            return data
        } catch (e) {
        }
    })
export const initialState = {
    sectors: [],
    currentSector: '',
    sectorCollection: [],
    filteredSectorCollection: [],
    loadingTable: false
}
const iexCloudSlice = createSlice(
    {
        name: 'iex',
        initialState,
        reducers: {
            filterSectorCollection(state, action) {
                state.filteredSectorCollection = action.payload
            },
            setCurrentSector(state, action) {
                state.currentSector = action.payload
            }
        },
        extraReducers: {
            [addSectors.pending]: (state) => {
                state.loadingTable = true
            },
            [addSectors.fulfilled]: (state, action) => {
                state.sectors = action.payload
                addSectorCollection()
            },
            [addSectors.rejected]: (state) => {
            },
            [addSectorCollection.pending]: (state) => {
                state.loadingTable = true
            },
            [addSectorCollection.fulfilled]: (state, action) => {
                state.sectorCollection = action.payload
                state.filteredSectorCollection = action.payload
                state.loadingTable = false
            },
            [addSectorCollection.rejected]: (state) => {
            },
        }
    }
)

export const {filterSectorCollection, setCurrentSector} = iexCloudSlice.actions
export default iexCloudSlice.reducer
