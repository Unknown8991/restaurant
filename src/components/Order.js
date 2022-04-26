import React from 'react';

const Order = (props) => {

    return ( 
        <>
            
            <div className={props.isChangeStatus ? 'col-12 order order__change-status' : 'col-12 order'}>
                {props.isChangeStatus ? <div className='status__position'>
                    <div>Change status</div>
                    <div className='button-status'>{props.status}.
                        {props.status === 1 ? <div className='button-status--preparing'>Done</div> : null
                        ||
                        props.status === 2 ? <div className='button-status--done'>Done</div> : null
                        }
                    </div>
                </div> : null}
                
                <div className={props.isChangeStatus ?'col-5 order--center order--blur' :'col-5 order--center'} >
                    <div className='col-8 order__picture'></div>
                </div>

                <div className={props.isChangeStatus? 'col-7 order__elements--blur' :'col-7 order__elements'}>
                    <div className='order__elements--title'>{props.name}
 
                   <div className='status' onClick={() =>props.handleOpenStatus(props.id)}>
                       {props.status}. {props.status === 0 ?<label className='status status--nodone'>NO DONE</label>: null
                       ||
                       props.status === 1 ?<label className='status--preparing'>PREPARING</label>: null
                       ||
                       props.status === 2 ?<label className='status--done'>DONE</label>: null}
                    </div> 
                    </div>
                    <div className='order__elements--info'>{props.place} </div>
                    {props.tableNumber !== null ? 
                        <div className='order__elements--info'>Table Number: {props.tableNumber}</div> : null 
                    }
                    
                    {/* <div className='order__elements--info'>Delivery time: 20 minutes</div> */}
                    <div className='order__elements--info'>Time of realease: {props.timeOfRelease}</div>
                </div>
            </div>
        </>
        
     );
}
 
export default Order;