import React from 'react';

const Notification = (props) => {
    return ( 
        <div className='notification-content'>
            <div className='image-test'>R</div>
            <div className='col-md-11 notification-direction-content'>
            <div className='col-md-10 notification-content__text'>{props.text}</div>
                <div className=' notification-content__right-corner'>
                    <div className=' notification-content__time'>{props.currentTime}</div>
                </div>
                {/* <div className='notification-content__text'>{props.text}</div> */}
            </div>
        </div>
     );
}
 
export default Notification;