import React from 'react';
import Order from './Order';

const OrderList = (props) => {
    // Wszystkie
    const orders = props.orders.map(order =>(
        
        <Order
            key={order.orderID}
            id={order.id}
            orderID={order.orderID}
            name={order.nameOrder}
            place={order.orderPlace}
            tableNumber={order.orderTableNumber}
            price={order.orderPrice}
            timeOfRelease={order.orderTimeOfRelease}
            dateOfRelease={order.orderDateOfRelease}
            status={order.orderStatus}
            isChangeStatus={order.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={order.orderCityClient}
            street={order.orderStreetClient}
            homeNumber={order.orderHomeClient}
            image={order.orderImg}
            number={order.orderNumber}
            // key={order.id}
            // id={order.id}
            // name={order.name}
            // place={order.place}
            // tableNumber={order.tableNumber}
            // price={order.price}
            // timeOfRelease={order.timeOfRelease}
            // dateOfRelease={order.dateOfRelease}
            // status={order.status}
            // isChangeStatus={order.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={order.city}
            // street={order.street}
            // homeNumber={order.homeNumber}
            // image={order.img}
            // number={order.number}
        />
    ))
    // console.log(props.orders)
    // status 0-1
    const itemsOrder1 = props.orders.filter(itemOrder => itemOrder.orderStatus === 0)
    const ordersDone1 = itemsOrder1.map(orderDone =>(
        <Order
            key={orderDone.orderID}
            id={orderDone.id}
            orderID={orderDone.orderID}
            name={orderDone.nameOrder}
            place={orderDone.orderPlace}
            tableNumber={orderDone.orderTableNumber}
            price={orderDone.orderPrice}
            timeOfRelease={orderDone.orderTimeOfRelease}
            dateOfRelease={orderDone.orderDateOfRelease}
            status={orderDone.orderStatus}
            isChangeStatus={orderDone.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={orderDone.orderCityClient}
            street={orderDone.orderStreetClient}
            homeNumber={orderDone.orderHomeClient}
            image={orderDone.orderImg}
            number={orderDone.orderNumber}
            // key={orderDone.id}
            // id={orderDone.id}
            // name={orderDone.name}
            // place={orderDone.place}
            // tableNumber={orderDone.tableNumber}
            // price={orderDone.price}
            // timeOfRelease={orderDone.timeOfRelease}
            // dateOfRelease={orderDone.dateOfRelease}
            // status={orderDone.status}
            // isChangeStatus={orderDone.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={orderDone.city}
            // street={orderDone.street}
            // homeNumber={orderDone.homeNumber}
            // image={orderDone.img}
            // number={orderDone.number}
    />
    ))
    // status 2
    const itemsOrder2 = props.orders.filter(itemOrder => itemOrder.orderStatus === 1)
    const ordersDone2 = itemsOrder2.map(orderDone =>(
        <Order
            key={orderDone.orderID}
            id={orderDone.id}
            orderID={orderDone.orderID}
            name={orderDone.nameOrder}
            place={orderDone.orderPlace}
            tableNumber={orderDone.orderTableNumber}
            price={orderDone.orderPrice}
            timeOfRelease={orderDone.orderTimeOfRelease}
            dateOfRelease={orderDone.orderDateOfRelease}
            status={orderDone.orderStatus}
            isChangeStatus={orderDone.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={orderDone.orderCityClient}
            street={orderDone.orderStreetClient}
            homeNumber={orderDone.orderHomeClient}
            image={orderDone.orderImg}
            number={orderDone.orderNumber}
            // key={orderDone.id}
            // id={orderDone.id}
            // name={orderDone.name}
            // place={orderDone.place}
            // tableNumber={orderDone.tableNumber}
            // price={orderDone.price}
            // timeOfRelease={orderDone.timeOfRelease}
            // dateOfRelease={orderDone.dateOfRelease}
            // status={orderDone.status}
            // isChangeStatus={orderDone.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={orderDone.city}
            // street={orderDone.street}
            // homeNumber={orderDone.homeNumber}
            // image={orderDone.img}
            // number={orderDone.number}
    />
    ))
    // status 3
    const itemsOrder3 = props.orders.filter(itemOrder => itemOrder.orderStatus === 2)
    const ordersDone3 = itemsOrder3.map(orderDone =>(
        <Order
            key={orderDone.orderID}
            id={orderDone.id}
            orderID={orderDone.orderID}
            name={orderDone.nameOrder}
            place={orderDone.orderPlace}
            tableNumber={orderDone.orderTableNumber}
            price={orderDone.orderPrice}
            timeOfRelease={orderDone.orderTimeOfRelease}
            dateOfRelease={orderDone.orderDateOfRelease}
            status={orderDone.orderStatus}
            isChangeStatus={orderDone.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={orderDone.orderCityClient}
            street={orderDone.orderStreetClient}
            homeNumber={orderDone.orderHomeClient}
            image={orderDone.orderImg}
            number={orderDone.orderNumber}
            // key={orderDone.id}
            // id={orderDone.id}
            // name={orderDone.name}
            // place={orderDone.place}
            // tableNumber={orderDone.tableNumber}
            // price={orderDone.price}
            // timeOfRelease={orderDone.timeOfRelease}
            // dateOfRelease={orderDone.dateOfRelease}
            // status={orderDone.status}
            // isChangeStatus={orderDone.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={orderDone.city}
            // street={orderDone.street}
            // homeNumber={orderDone.homeNumber}
            // image={orderDone.img}
            // number={orderDone.number}
    />
    ))
    // status 4
    const itemsOrder4 = props.orders.filter(itemOrder => itemOrder.orderStatus === 3)
    const ordersDone4 = itemsOrder4.map(orderDone =>(
        <Order
            key={orderDone.orderID}
            id={orderDone.id}
            orderID={orderDone.orderID}
            name={orderDone.nameOrder}
            place={orderDone.orderPlace}
            tableNumber={orderDone.orderTableNumber}
            price={orderDone.orderPrice}
            timeOfRelease={orderDone.orderTimeOfRelease}
            dateOfRelease={orderDone.orderDateOfRelease}
            status={orderDone.orderStatus}
            isChangeStatus={orderDone.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={orderDone.orderCityClient}
            street={orderDone.orderStreetClient}
            homeNumber={orderDone.orderHomeClient}
            image={orderDone.orderImg}
            number={orderDone.orderNumber}
            // key={orderDone.id}
            // id={orderDone.id}
            // name={orderDone.name}
            // place={orderDone.place}
            // tableNumber={orderDone.tableNumber}
            // price={orderDone.price}
            // timeOfRelease={orderDone.timeOfRelease}
            // dateOfRelease={orderDone.dateOfRelease}
            // status={orderDone.status}
            // isChangeStatus={orderDone.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={orderDone.city}
            // street={orderDone.street}
            // homeNumber={orderDone.homeNumber}
            // image={orderDone.img}
            // number={orderDone.number}
    />
    ))
    // status 5
    const itemsOrder5 = props.orders.filter(itemOrder => itemOrder.orderStatus === 4)
    const ordersDone5 = itemsOrder5.map(orderDone =>(
        <Order
            key={orderDone.orderID}
            id={orderDone.id}
            orderID={orderDone.orderID}
            name={orderDone.nameOrder}
            place={orderDone.orderPlace}
            tableNumber={orderDone.orderTableNumber}
            price={orderDone.orderPrice}
            timeOfRelease={orderDone.orderTimeOfRelease}
            dateOfRelease={orderDone.orderDateOfRelease}
            status={orderDone.orderStatus}
            isChangeStatus={orderDone.orderIsChangeStatus}
            handleOpenStatus={props.handleOpenStatus}
            city={orderDone.orderCityClient}
            street={orderDone.orderStreetClient}
            homeNumber={orderDone.orderHomeClient}
            image={orderDone.orderImg}
            number={orderDone.orderNumber}
            // key={orderDone.id}
            // id={orderDone.id}
            // name={orderDone.name}
            // place={orderDone.place}
            // tableNumber={orderDone.tableNumber}
            // price={orderDone.price}
            // timeOfRelease={orderDone.timeOfRelease}
            // dateOfRelease={orderDone.dateOfRelease}
            // status={orderDone.status}
            // isChangeStatus={orderDone.isChangeStatus}
            // handleOpenStatus={props.handleOpenStatus}
            // city={orderDone.city}
            // street={orderDone.street}
            // homeNumber={orderDone.homeNumber}
            // image={orderDone.img}
            // number={orderDone.number}
    />
    ))
    return (  
        <>
            {/* Wszystkie zamówienia */}
            <div className='header-panel-admin'>Zamówienia</div>
            <div className='header-panel-admin--text'>Wszystkie zamówienia</div>
            <div className='order-items'></div>
            <div className='testowanie'>{orders}</div>

            {/* W trakcie realizacji */}
            <div className='header-panel-admin' >Panel sterowania</div>
            <div className='status-options'>
                <button id="1" className='status-options--N' onClick={props.handleChangeActiveStatusForAdministratorPanel}>N</button>
                <button id="2" className='status-options--R' onClick={props.handleChangeActiveStatusForAdministratorPanel}>R</button>
                <button id="3" className='status-options--P' onClick={props.handleChangeActiveStatusForAdministratorPanel}>P</button>
                <button id="4" className='status-options--D' onClick={props.handleChangeActiveStatusForAdministratorPanel}>D</button>
                <button id="5" className='status-options--Z' onClick={props.handleChangeActiveStatusForAdministratorPanel}>Z</button>
            </div>
            {/* <div className='header-panel-admin'>Zamówienia</div> */}
            {/* activeStatusForPanelAdministrator wyświetlenie zamówień z danym statusem */}
            { props.activeStatusForPanelAdministrator === 1 ? 
                <div>
                    <div id='test1' className='header-panel-admin--text'>Nowe</div>
                    {ordersDone1} 
                </div>
                : 
                null 
            }
            { props.activeStatusForPanelAdministrator === 1 && ordersDone1.length < 1 ?
                <div className='text-for-processes'>Brak zamówień dla tego etapu</div> 
             : 
                null 
             }

            { props.activeStatusForPanelAdministrator === 2 ? 
                <div>
                    <div className='header-panel-admin--text'>W trakcie realizacji</div>
                    {ordersDone2} 
                </div>
                : 
                null 
            }
            { props.activeStatusForPanelAdministrator === 2 && ordersDone2.length < 1 ? 
                <div className='text-for-processes'>Brak zamówień dla tego etapu</div> 
                : 
                null 
            }

            { props.activeStatusForPanelAdministrator === 3 ? 
                <div>
                    <div className='header-panel-admin--text'>Przygotowane</div>
                    {ordersDone3} 
                </div>
                : 
                null 
            }
            { props.activeStatusForPanelAdministrator === 3 && ordersDone3.length < 1 ?
                 <div className='text-for-processes'>Brak zamówień dla tego etapu</div> 
                 : 
                 null 
            }

            { props.activeStatusForPanelAdministrator === 4 ? 
                <div>
                    <div className='header-panel-admin--text'>Gotowe do dostarczenia</div>
                    {ordersDone4} 
                </div>
                : 
                null 
            }
            { props.activeStatusForPanelAdministrator === 4 && ordersDone4.length < 1 ? 
                <div className='text-for-processes'>Brak zamówień dla tego etapu</div> 
                : 
                null 
            }

            { props.activeStatusForPanelAdministrator === 5 ? 
                <div>
                    <div className='header-panel-admin--text'>Zakończone</div>
                    {ordersDone5} 
                </div>
                : 
                null 
            }
            { props.activeStatusForPanelAdministrator === 5 && ordersDone5.length < 1 ? 
                <div className='text-for-processes'>Brak zamówień dla tego etapu</div> 
                : 
                null 
            }

            <div className='order-items'></div>
            {/* <div>{ordersDone}</div> */}



            {/* <div className='header-panel-admin--text'>W trakcie realizacji</div>
            <div className='order-items'></div>
            <div>{ordersDone}</div> */}
            
            {/*  */}

        </>
    );
}
 
export default OrderList;