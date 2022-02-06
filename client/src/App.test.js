import App from './App';
import { render,  screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "./store/appStore";
import React from "react";

const Component = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    )
}

describe('App', () => {

    test('render App component', () => {
        render(<Component />);
        screen.debug()
    })
})
