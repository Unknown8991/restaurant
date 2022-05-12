import React from 'react';

const OrderFromHistory = (props) => {
    return ( 
        <div className='history-orders__item'>
            <div className='history-orders__details--date'>{props.dateOfRelease}</div>
            <div className='history-orders__details'>Nazwa: {props.name}</div>
            <div className='history-orders__details'>Kwota: {props.price * props.number} PLN</div>
            <div className='history-orders__row'>
            <div className='history-orders__details'>Status: 
            </div>
                <div className='history-orders__status'>
                    {/* Dodać kolejne statusy */}
                    {props.status === 0 ? 'Realizacja' : null}
                </div>
            </div>
            
        </div>
     );
}
 
export default OrderFromHistory;