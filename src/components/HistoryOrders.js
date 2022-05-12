import React from 'react';
import OrderFromHistory from './OrderFromHistory';

const HistoryOrders = (props) => {
    const clientOrdersHistoryById = props.orders.filter(item => item.clientId === props.clientId)
    const ordersHistory = clientOrdersHistoryById.map(order =>(
        <OrderFromHistory 
            id={order.id}
            clientId={order.clientId}
            name={order.name}
            price={order.price}
            number={order.number}
            dateOfRelease={order.dateOfRelease}
            status={order.status}
        />
    ))
    return ( 
        <div className='history-orders'>
            <div className='history-orders__header'>Historia zamówień</div>
            {ordersHistory}
            <div className='history-orders__button'>
                <button className='history-orders__button--item' onClick={props.handleCloseHistory}>Zamknij</button>
            </div>
        </div>
     );
}
 
export default HistoryOrders;