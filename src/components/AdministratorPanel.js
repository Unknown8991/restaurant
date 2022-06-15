import React from 'react';
import OrderList from './OrderList';
import Statistics from './Statistics';

const AdministratorPanel = (props) => {
    return ( 
        <div className='panel-admin'>
            <div className='logo'>Admin Restaurant</div>
            <div className='logout-admin logout-for-admin' onClick={props.handleLogOut}>
                <i className="fa fa-power-off" aria-hidden="true"></i>
            </div>
            <div className='home'>
                <div className='container'>
                    <div className='header-panel-admin'>Statystyki restauracji</div>
                    <div className='col-12 statistics-center'>
                        <Statistics
                            orders={props.orders} 
                        />
                    </div>
                    {/* <div className='header-panel-admin'>Zamówienia</div>
                    <div className='header-panel-admin--text'>zamówienia do wykonania</div> */}
                    <div className='order-items'>
                        <OrderList  
                            orders={props.orders} 
                            handleOpenStatus={props.handleOpenStatus} 
                            handleChangeActiveStatusForAdministratorPanel={props.handleChangeActiveStatusForAdministratorPanel}
                            activeStatusForPanelAdministrator={props.activeStatusForPanelAdministrator}
                        />
                        {/* <div className='col-12 order'>
                            <div className='col-5 order--center'>
                                <div className='col-8 order__picture'></div>
                            </div>
                            <div className='col-7 order__elements'>
                                <div className='order__elements--title'>Burger Onion</div>
                                <div className='order__elements--info'>Delivery</div>
                                <div className='order__elements--info'>Delivery time: 20 minutes</div>
                                <div className='order__elements--info'>Time of realease: 18:20</div>
                            </div>
                        </div>
                        <div className='col-12 order'>
                            <div className='col-5 order--center'>
                                <div className='col-8 order__picture'></div>
                            </div>
                            <div className='col-7 order__elements'>
                                <div className='order__elements--title'>Burger Onion</div>
                                <div className='order__elements--info'>Delivery</div>
                                <div className='order__elements--info'>Delivery time: 20 minutes</div>
                                <div className='order__elements--info'>Time of realease: 18:20</div>
                            </div>
                        </div>
                        <div className='col-12 order'>
                            <div className='col-5 order--center'>
                                <div className='col-8 order__picture'></div>
                            </div>
                            <div className='col-7 order__elements'>
                                <div className='order__elements--title'>Burger Onion</div>
                                <div className='order__elements--info'>Delivery</div>
                                <div className='order__elements--info'>Delivery time: 20 minutes</div>
                                <div className='order__elements--info'>Time of realease: 18:20</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdministratorPanel;