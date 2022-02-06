import { combineReducers } from "redux";
import priceTickersReducer from "./priceTickersReducer";


const appReducer = combineReducers({
    tickers: priceTickersReducer,
})

export default appReducer;