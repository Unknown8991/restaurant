import React from 'react';

const ActionButton = (props) => {
    return ( 
        <>
            <button className="action-button" onClick={props.sendBlikCode}>Pay</button>
        </>
     );
}
 
export default ActionButton;