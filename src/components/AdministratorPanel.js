import React from 'react';
import OrderList from './OrderList';

const AdministratorPanel = (props) => {
    return ( 
        <div className='panel-admin'>
            <div className='home'>
                <div className='container'>
                    <div className='header-panel-admin'>Dziś</div>
                    <div className='col-12'>
                        <div className='red-board container'>
                            {/* <div className='container'> */}
                                <div className='col-12 red-board__text'>Statystyki</div>
                                {/* <div className='col-12 red-board__direction'> */}
                                    <div className='red-board__number'>10</div>
                                    <div className='red-board__ball-items'>
                                        <div className='red-board__ball'></div>
                                        <div className='red-board__ball'></div>
                                        <div className='red-board__ball'></div>
                                    </div>
                                    {/* </div> */}
                            {/* </div> */}
                        </div>
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