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
            
            
            <div className='order__elements--header'> {props.dateOfRelease}</div>
            <div className={props.isChangeStatus ? 'col-12 order order__change-status' : 'col-12 order'}>

                <div className='col-5 col-md-3 order--center' >
                    <div className='col-11 col-md-11 order__picture'>
                        
                            <img className='image-admin' src={props.image} alt="" />
                        
                    </div>
                </div>

                
                <div className='col-7 col-md-9 order__elements'>
                    <div className='order__elements--title'>{props.name}
 
                   <div className='status' onClick={() =>props.handleOpenStatus(props.id)}>
                        {props.status === 0 ?<label className='status status--adopted'>NOWY</label>: null
                       ||
                       props.status === 1 ?<label className='status status--progress'>REALIZACJA</label>: null
                       ||
                       props.status === 2 ?<label className='status status--prepared'>GOTOWE</label>: null
                       ||
                       props.status === 3 ?<label className='status status--delivery'>DOSTAWA</label>: null
                       ||
                       props.status === 4 ?<label className='status status--done'>ZAKOŃCZONE</label>: null
                       }
                    </div> 
                    </div>
                    <div className='order__elements--info'>{props.place} </div>
                    <div className='order__elements--info'>Kwota: {props.price} PLN </div>
                    {props.tableNumber !== null && props.tableNumber !== '' ? 
                        <div className='order__elements--info'>Numer stoliku: {props.tableNumber}</div> : null 
                    }
                    
                    {props.tableNumber !== null && props.tableNumber !== '' ?
                        <div className='order__elements--info'>Rezerwacja</div>
                        :
                        null
                    }
                    
                    <div className='order__elements--info'>Czas realizacji: {props.timeOfRelease}</div>
                    <div className='order__elements--info'>Data realizacji: {props.dateOfRelease}</div>
                    <div className='order__elements--info'>Ilość: {props.number}</div>
                    <div className='order__elements--info'>{props.city} {props.street} {props.homeNumber}</div>
                    
                </div>
            </div>
        </>
        
     );
}
 
export default Order;