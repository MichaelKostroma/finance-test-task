import { INIT_PRICE_TICKERS } from "../actions/priceTickersActions";

const initialValues = {
    tickers: [],

}

const priceTickersReducer = (state = initialValues, action) => {
    switch (action.type){
        case INIT_PRICE_TICKERS: {
            return {...state, tickers: action.payload}
        }

        default:
            return state
    }

}

export default priceTickersReducer;