import React from "react";
import Header from "./Header";
import {render, screen} from "@testing-library/react";

describe('Header', () => {
    test('Check text', () => {
        render(<Header/>);
        const titleHeader = screen.getByTestId('title-header')
        expect(titleHeader).toBeInTheDocument()
    })
})