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
                    {props.status === '0' ? 
                        <div className='history-orders__status--adopted'>Nowe</div>
                        : 
                        null
                    }
                    {props.status === '1' ? 
                        <div className='history-orders__status--progress'>W trakcie realizacji</div>
                        : 
                        null
                    }
                    {props.status === '2' ? 
                        <div className='history-orders__status--prepared'>Przygotowane</div>
                        : 
                        null
                    }
                    {props.status === '3' ? 
                        <div className='history-orders__status--delivery'>Dostawa</div>
                        : 
                        null
                    }
                    {props.status === '4' ? 
                        <div className='history-orders__status--done'>Zakończone</div>
                        : 
                        null
                    }
                </div>
            </div>
            
        </div>
     );
}
 
export default OrderFromHistory;