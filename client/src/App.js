import './App.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Ticker from "./components/Ticker";
import { initPriceTickersCreator } from "./store/actionsCreators/priceTickersCreator";


function App() {

    const tickers = useSelector((store) => store.tickers.tickers)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initPriceTickersCreator());

    }, [dispatch]);


  return (
          <div className="ticker-app">
              <h1 className="tickers-title">Realtime price tickers</h1>

              {tickers.map(stockItem => {
                  return (
                      <Ticker
                          key={stockItem.ticker}
                          ticker={stockItem.ticker}
                          price={stockItem.price}
                          change={stockItem.change}
                          change_percent={stockItem.change_percent}
                      />
                  );
              })}
          </div>
  );
}

export default App;

