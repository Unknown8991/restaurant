import React from 'react';

const ActionButton = (props) => {
    return ( 
        <>
            <button className="action-button" onClick={props.sendBlikCode}>Zapłać</button>
        </>
     );
}
 
export default ActionButton;