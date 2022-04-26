import React from 'react';
import Order from './Order';

const OrderList = (props) => {
    const orders = props.orders.map(order =>(
        <Order
            key={order.id}
            id={order.id}
            name={order.name}
            place={order.place}
            tableNumber={order.tableNumber}
            price={order.price}
            timeOfRelease={order.timeOfRelease}
            status={order.status}
            isChangeStatus={order.isChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
     
        />
    ))
    const itemsOrder = props.orders.filter(itemOrder => itemOrder.status === 3)
    const ordersDone = itemsOrder.map(orderDone =>(
        <Order
        key={orderDone.id}
        id={orderDone.id}
        name={orderDone.name}
        place={orderDone.place}
        tableNumber={orderDone.tableNumber}
        price={orderDone.price}
        timeOfRelease={orderDone.timeOfRelease}
        status={orderDone.status}
        isChangeStatus={orderDone.isChangeStatus}
        handleOpenStatus={props.handleOpenStatus}
 
    />
    ))
    return (  
        <>
            <div className='header-panel-admin'>Orders</div>
            <div className='header-panel-admin--text'>orders to processed</div>
            <div className='order-items'></div>
            <div>{orders}</div>

            <div className='header-panel-admin'>Orders</div>
            <div className='header-panel-admin--text'>orders to done</div>
            <div className='order-items'></div>
            <div>{ordersDone}</div>

        </>
    );
}
 
export default OrderList;