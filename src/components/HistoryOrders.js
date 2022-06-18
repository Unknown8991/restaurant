import React from 'react';
import OrderFromHistory from './OrderFromHistory';

const HistoryOrders = (props) => {
    const clientOrdersHistoryById = props.orders.filter(item => item.orderClientId === props.clientId)
    const ordersHistory = clientOrdersHistoryById.map(order =>(
        <OrderFromHistory 
            id={order.id}
            key={order.orderID}
            clientId={order.orderClientId}
            name={order.nameOrder}
            price={order.orderPrice}
            number={order.orderNumber}
            dateOfRelease={order.orderDateOfRelease}
            status={order.orderStatus}
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