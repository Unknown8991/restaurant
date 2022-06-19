import React from 'react';

const MethodAtLocation = (props) => {
    return ( 
        <div className='method-at-location'>
            <div className='method-at-location__box col-12 col-md-7'>
               <div className='method-at-location__text method-at-location__text--header'>Płatnosć przy odbiorze</div> 
               {/* <div className='method-at-location__text'>Potwierdzono płatność przy obiorze.</div> */}
               <div className='method-at-location__text'>Możliwość dokonania płatności za pomocą karty płatniczej lub gotówką</div>
               <div>
                    <button className='action-button ' onClick={props.handlePaymentAtLocation}>Wykonaj zamówienie</button>
               </div>
            </div>
        </div>
     );
}
 
export default MethodAtLocation;