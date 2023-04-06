import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addSectors} from "./store/slices/iexCloudSlice";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(addSectors())},[])
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;