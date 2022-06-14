import React from 'react';
import Notification from './Notification';

const NotificationContent = (props) => {
    const NotificationArrayForUser = props.notifications.filter(item => item.clientId === props.clientId)
    const userNotification = NotificationArrayForUser.map(item =>(
        // console.log(item.id)
        <Notification
            key={item.id}
            text={item.text}
            currentTime={item.currentTime}
        />
    ))
    // console.log(props.counterNotification)
    // console.log(NotificationArrayForUser.length)
    return ( 

        <div className='profile-box__notification-content'>
        <div className='container notification-content__header'>
            <div className='row '>
                <div className='profile-box__counter--text col-10'>Powiadomienia</div>
                <div className='profile-box__counter--back col-2' onClick={props.handleCloseNotification}>X</div>
            </div>
            {props.counterNotification === 1 ? 
                <>
                    <div className='profile-box__counter--none'>Brak nowych powiadomień</div>
                    {props.randomBlikGenerateCode}
                </>
                
                :
                <div className='user-notify'>
                    {userNotification}
                </div>
                // null
            }
        </div>
    </div>

     );
}
 
export default NotificationContent;