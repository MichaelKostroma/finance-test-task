import priceTickersReducer from "../priceTickersReducer.js";
import {INIT_PRICE_TICKERS} from "../../actions/priceTickersActions";


const initPriceTickersCreator = (data) => {
    return ({type: INIT_PRICE_TICKERS, payload: data})
}
const initialState = {
    tickers: []
}

describe('Reducer actions work ', () => {
    test('should return proper tickers with INIT_PRICE_TICKERS type', () => {
        expect(priceTickersReducer(initialState, initPriceTickersCreator(5))).toStrictEqual({tickers: 5})
    })
})