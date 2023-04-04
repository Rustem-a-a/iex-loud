import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const addSectors = createAsyncThunk('addSectorst',
    async (id) => {
        try {
            const {data} = await axios('https://cloud.iexapis.com/stable/ref-data/sectors?token=pk_8e794ff0632745838028a41f6124dab3')
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    })
const initialState = {
    sectors: [],
    sectorCollection: []
}

const iexCloudSlice = createSlice(
    {
        name: 'iex',
        initialState,
        reducers:{
            addSectorCollection(state,action){

            }

        },
        extraReducers: {
            [addSectors.pending]: (state) => {
            },
            [addSectors.fulfilled]: (state, action) => {
                state.sectors = action.payload
            },
            [addSectors.rejected]: (state) => {
            },
        }
    }
)

export const {addSectorCollection} = iexCloudSlice.actions
export default iexCloudSlice.reducer
