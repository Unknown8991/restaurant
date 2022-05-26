import React from 'react';

const Order = (props) => {
// Tabela statusów
// 1. Przyjęte zamówienie (niebieski)
// 2. W trakcie realizacji (żółty)
// 3. Przygotowany (różowy)
// 4. Dostawa kurier/serwowanie przez kelnera (pomarańczowy)
// 5. Zakończony (zielony)
    return ( 
        <>
            
            {/* <div className={props.isChangeStatus ? 'col-12 order order__change-status' : 'col-12 order'}> */}
            <div className={props.isChangeStatus ? 'col-12 order order__change-status' : 'col-12 order'}>
                {/* {props.isChangeStatus ? <div className='status__position'>
                    <div>Zmień status</div>
                    <div className='button-status'>{props.status}.
                        {props.status === 1 ? <div className='button-status--preparing'>GotowS!</div> : null
                        ||
                        props.status === 2 ? <div className='button-status--done'>Gotowe!</div> : null
                        }
                    </div>
                </div> : null} */}
                
                {/* <div className={props.isChangeStatus ?'col-5 order--center order--blur' :'col-5 order--center'} >
                    <div className='col-8 order__picture'></div>
                </div> */}
                <div className='col-5 order--center' >
                    <div className='col-8 order__picture'></div>
                </div>

                {/* <div className={props.isChangeStatus? 'col-7 order__elements--blur' :'col-7 order__elements'}> */}
                <div className='col-7 order__elements'>
                    <div className='order__elements--title'>{props.name}
 
                   <div className='status' onClick={() =>props.handleOpenStatus(props.id)}>
                       {props.status}. {props.status === 0 ?<label className='status status--adopted'>NOWY</label>: null
                       ||
                       props.status === 1 ?<label className='status status--progress'>REALIZACJA</label>: null
                       ||
                       props.status === 2 ?<label className='status status--prepared'>PRZYGOTOWANE</label>: null
                       ||
                       props.status === 3 ?<label className='status status--delivery'>DOSTAWA/SERWIS</label>: null
                       ||
                       props.status === 4 ?<label className='status status--done'>ZAKOŃCZONE</label>: null
                       }
                    </div> 
                    </div>
                    <div className='order__elements--info'>{props.place} </div>
                    {props.tableNumber !== null ? 
                        <div className='order__elements--info'>Numer stoliku: {props.tableNumber}</div> : null 
                    }
                    
                    {/* <div className='order__elements--info'>Delivery time: 20 minutes</div> */}
                    <div className='order__elements--info'>Czas realizacji: {props.timeOfRelease}</div>
                </div>
            </div>
        </>
        
     );
}
 
export default Order;