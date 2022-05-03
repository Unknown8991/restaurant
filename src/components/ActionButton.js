import React from 'react';

const ActionButton = (props) => {
    return ( 
        <>
            {props.blikNotifications ? 
                <button className="action-button" onClick={props.sendBlikCode}>Zapłać</button>
                :
                <button className="action-button action-button__disabled" onClick={props.sendBlikCode}>Zapłać</button>

            }
        </>
     );
}
 
export default ActionButton;