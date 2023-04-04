import {configureStore} from "@reduxjs/toolkit";
import iexCloudReducer from './slices/iexCloudSlice'



export default configureStore({
    reducer:{
        iexCloudReducer
    }
})

