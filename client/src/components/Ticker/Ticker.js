import React from 'react';
import './Ticker.css'

const Ticker = ({ticker, price, change, change_percent}) => {
    return (
        <div className='ticker-container'>
            <div className='ticker-row'>
                <div className='ticker'>
                    <h1>{ticker}</h1>
                </div>
                <div className='ticker-data'>
                    <p className='ticker-price'>$ {price}</p>
                    <p className='ticker-change'>$ {change}</p>
                    {change_percent >= 0 ?
                        <p className='ticker-percent green'>+ {change_percent}%</p>
                        :
                        <p className='ticker-percent red'>- {change_percent}%</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Ticker;