import { INIT_PRICE_TICKERS } from "../actions/priceTickersActions";
import {io} from "socket.io-client";

const socket = io("http://localhost:4000/");
socket.emit('start');

export const initPriceTickersCreator = () => async (dispatch) => {

   await socket.on('ticker',function(response) {
       dispatch({type:INIT_PRICE_TICKERS, payload: response })
    });

}


