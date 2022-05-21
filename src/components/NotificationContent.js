import React from 'react';
import Notification from './Notification';

const NotificationContent = (props) => {
    const NotificationArrayForUser = props.notifications.filter(item => item.clientId === props.clientId)
    const userNotification = NotificationArrayForUser.map(item =>(
        // console.log(item.id)
        <Notification
            key={item.id}
            text={item.text}
        />
    ))
    
    return ( 

        <div className='profile-box__notification-content'>
        <div className='container'>
            <div className='row'>
                <div className='profile-box__counter--text col-10'>Twoje powiadomienia</div>
                <div className='profile-box__counter--back col-2' onClick={props.handleCloseNotification}>X</div>
            </div>
            {props.counterNotification === 1 ? 
                <>
                    <div className='profile-box__counter--none'>Brak nowych powiadomień</div>
                    {props.randomBlikGenerateCode}
                </>
                
                :
                <div>
                    {userNotification}
                </div>
                // null
            }
        </div>
    </div>

     );
}
 
export default NotificationContent;