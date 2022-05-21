import React from 'react';

const Notification = (props) => {
    return ( 
        <div key={props.id}>
            <div>{props.text}</div>
        </div>
     );
}
 
export default Notification;