import List from "./List";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter,Routes, Route} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {createStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Table from "../Table/Table";
import React from "react";

const mockStore = createStore(() => ({
}));

 const filteredSectorCollection = [
     {symbol: 'HME-CV', companyName: 'Hemisphere Energy Corp', latestPrice: 'TSX VENTURE EXCHANGE', previousClose: 'close', change: null,latestUpdate:32432434234}]

describe('List', () => {
    test('Route test', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={mockStore}>
                    <Routes>
                    <Route path='/' element={ <List/>}/>
                    <Route path='/muitable' element={ <Table rows={filteredSectorCollection}/>}/>
                    </Routes>
                 </Provider>
            </MemoryRouter>
        );
        const muiLink = screen.getByTestId('mui-link')
        expect(muiLink).toBeInTheDocument()
        act(() => {userEvent.click(muiLink)})
        const customLink = screen.getByTestId('custom-link')
        expect(customLink).toBeInTheDocument()
        act(() => {userEvent.click(customLink)})
        expect(screen.getByTestId('mui-link')).toBeInTheDocument()
    })
})