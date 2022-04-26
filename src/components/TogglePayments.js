import React from 'react';

const TogglePayments = (props) => {

    return ( 
        
        <div
            className={props.activeMethod ? "col-6 payments__active" : "col-6 payments--none-active"}
            onClick={ () => props.changePayments(props.id)}    
        >{props.id}.{props.name}
 
        </div>
     );
}
 
export default TogglePayments;