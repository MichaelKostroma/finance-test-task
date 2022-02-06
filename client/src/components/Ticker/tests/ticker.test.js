import React from "react";
import {render, screen} from "@testing-library/react";
import Ticker from "../Ticker";


describe("Ticker", () => {

    test("render Ticker component",() => {
        render(<Ticker/>)
        screen.debug()
    })
})
